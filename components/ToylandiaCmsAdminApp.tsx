"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import CmsRichArticleEditor from "@/components/CmsRichArticleEditor";
import type { BlogFaq, BlogPost, BlogSection } from "@/lib/blogPosts";
import { assetPath } from "@/lib/assetPath";

const ADMIN_EMAIL = "admin@toylandia.com";

type Panel = "home" | "articles" | "seo" | "settings";

const emptyPost: BlogPost = {
  slug: "new-toylandia-article",
  title: "New ToyLandia Article",
  description: "Write a clear search description that answers the buyer's main question in one sentence.",
  publishedAt: new Date().toISOString().slice(0, 10),
  updatedAt: new Date().toISOString().slice(0, 10),
  category: "Buying Guide",
  readTime: "5 min read",
  keywords: ["ToyLandia", "toys Philippines", "brand new toys"],
  summary: "Start with the direct answer. Explain who the article is for and what the reader should do next.",
  deck: "Use this opening deck to make the reader feel understood before giving practical buying advice.",
  heroImage: {
    src: "/toy-1.jpg",
    alt: "ToyLandia toy display",
    caption: "Use a relevant ToyLandia image that matches the article topic.",
  },
  takeaways: [
    "Give the buyer a fast decision shortcut.",
    "Reduce risk by explaining what to check before ordering.",
    "End with one clear action path.",
  ],
  sections: [
    {
      heading: "Answer the buyer's real question first",
      body: [
        "Open with the useful answer before adding background. This helps SEO snippets, AI answer engines, and impatient mobile readers.",
        "Then explain the buying psychology: what the customer is worried about, what they want, and why ToyLandia is a practical next step.",
      ],
      bullets: ["Make the first paragraph specific", "Use plain buying language", "Add a clear next step"],
    },
  ],
  faqs: [
    {
      question: "What should this article answer?",
      answer: "It should answer one buyer question clearly, then guide the reader to ToyLandia's official buying channels.",
    },
  ],
  cta: {
    label: "Browse ToyLandia on Shopee",
    href: "https://shopee.ph/toylandia678",
    note: "Use one clear CTA that matches the article intent.",
  },
};

function clonePost(post: BlogPost): BlogPost {
  return JSON.parse(JSON.stringify(post)) as BlogPost;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function linesToArray(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function arrayToLines(value: string[]) {
  return value.join("\n");
}

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</span>
      <div className="mt-2">{children}</div>
      {hint ? <span className="mt-1.5 block text-xs font-medium text-slate-500">{hint}</span> : null}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-tl-red focus:ring-4 focus:ring-tl-red/10 ${props.className ?? ""}`}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-slate-950 outline-none transition focus:border-tl-red focus:ring-4 focus:ring-tl-red/10 ${props.className ?? ""}`}
    />
  );
}

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-600">{note}</p>
    </div>
  );
}

async function cmsFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const payload = (await response.json().catch(() => ({}))) as T & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error || "CMS request failed.");
  }

  return payload;
}

function renderBodyImage(image: { src: string; alt: string; caption?: string }) {
  const isInlineData = image.src.startsWith("data:");
  return (
    <figure>
      {isInlineData ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image.src} alt={image.alt} className="aspect-video w-full object-cover" />
      ) : (
        <Image
          src={assetPath(image.src)}
          alt={image.alt}
          width={1200}
          height={675}
          className="aspect-video w-full object-cover"
        />
      )}
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}

function PreviewArticle({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[#1A1410] text-white shadow-sm">
      <header className="relative min-h-[420px] overflow-hidden p-6 sm:p-9">
        <Image
          src={assetPath(post.heroImage.src || "/toy-1.jpg")}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410]/55 via-[#1A1410]/85 to-[#1A1410]" />
        <div className="relative z-10 flex min-h-[350px] flex-col justify-end">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-tl-red px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
              {post.category}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/80">
              {post.readTime}
            </span>
          </div>
          <h1 className="font-fun text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white/80">{post.deck}</p>
        </div>
      </header>

      <div className="p-6 sm:p-9">
        <section className="border-y border-white/15 py-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-tl-yellow">Answer first</p>
          <p className="mt-4 text-2xl font-semibold leading-relaxed text-white">{post.summary}</p>
        </section>

        {post.takeaways.length ? (
          <section className="mt-8 rounded-3xl border border-tl-yellow/30 bg-tl-yellow/10 p-6">
            <h2 className="font-fun text-3xl text-tl-yellow">Key takeaways</h2>
            <ul className="mt-4 grid gap-3">
              {post.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 text-base font-semibold leading-relaxed text-white/82">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tl-yellow" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="toylandia-article-prose mt-9 space-y-10">
          {post.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`}>
              <h2>{section.heading}</h2>
              {section.image?.src ? renderBodyImage(section.image) : null}
              {section.images?.map((image, imageIndex) => (
                <div key={`${image.src}-${imageIndex}`}>{renderBodyImage(image)}</div>
              ))}
              {section.body.map((paragraph) => (
                <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.quote ? <blockquote dangerouslySetInnerHTML={{ __html: section.quote }} /> : null}
            </section>
          ))}
        </div>

        {post.faqs.length ? (
          <section className="mt-10 border-t border-white/10 pt-8">
            <h2 className="font-fun text-4xl text-white">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-white/10">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="text-lg font-black text-tl-yellow">{faq.question}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

export default function ToylandiaCmsAdminApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [panel, setPanel] = useState<Panel>("home");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [draft, setDraft] = useState<BlogPost>(clonePost(emptyPost));
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [source, setSource] = useState("loading");
  const [saving, setSaving] = useState(false);

  const loadPosts = useCallback(async (preferredSlug?: string) => {
    const payload = await cmsFetch<{ posts: BlogPost[]; source: string; warning?: string }>("/api/cms/posts");
    const loadedPosts = sortPosts(payload.posts);
    setSource(payload.source);
    setPosts(loadedPosts);
    const next = loadedPosts.find((post) => post.slug === preferredSlug) ?? loadedPosts[0] ?? emptyPost;
    setSelectedSlug(next.slug);
    setDraft(clonePost(next));
    if (payload.warning) {
      setNotice(payload.warning);
    }
  }, []);

  useEffect(() => {
    cmsFetch<{ authenticated: boolean; email: string }>("/api/cms/auth")
      .then((session) => {
        setEmail(session.email || ADMIN_EMAIL);
        setLoggedIn(session.authenticated);
        if (session.authenticated) {
          void loadPosts();
        }
      })
      .catch(() => {
        setNotice("CMS API is not reachable. Deploy this project on a server runtime to use Turso.");
        setSource("offline");
      });
  }, [loadPosts]);

  const allKeywords = useMemo(() => Array.from(new Set(posts.flatMap((post) => post.keywords))).slice(0, 18), [posts]);
  const latestUpdate = posts[0]?.updatedAt ?? new Date().toISOString().slice(0, 10);

  async function login() {
    try {
      await cmsFetch<{ authenticated: boolean }>("/api/cms/auth", {
        method: "POST",
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      });
      setLoggedIn(true);
      setNotice("");
      await loadPosts();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Invalid CMS login.");
    }
  }

  async function signOut() {
    await cmsFetch("/api/cms/auth", { method: "DELETE" }).catch(() => null);
    setLoggedIn(false);
    setPassword("");
  }

  function selectPost(slug: string) {
    const post = posts.find((item) => item.slug === slug);
    if (!post) {
      return;
    }
    setSelectedSlug(slug);
    setDraft(clonePost(post));
    setPanel("articles");
  }

  function updateDraft(update: Partial<BlogPost>) {
    setDraft((current) => ({ ...current, ...update }));
  }

  async function saveDraft() {
    setSaving(true);
    const safeSlug = slugify(draft.slug || draft.title) || "toylandia-article";
    const nextPost = {
      ...draft,
      slug: safeSlug,
      updatedAt: new Date().toISOString().slice(0, 10),
    };

    try {
      const payload = await cmsFetch<{ post: BlogPost; source: string }>("/api/cms/posts", {
        method: "POST",
        body: JSON.stringify({ post: nextPost, status: "published" }),
      });
      setPosts((current) => {
        const exists = current.some((post) => post.slug === selectedSlug || post.slug === safeSlug);
        const next = exists
          ? current.map((post) => (post.slug === selectedSlug || post.slug === safeSlug ? payload.post : post))
          : [payload.post, ...current];
        return sortPosts(next);
      });
      setSource(payload.source);
      setSelectedSlug(payload.post.slug);
      setDraft(clonePost(payload.post));
      setNotice("Article saved to Turso and is available to the public blog.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Article save failed.");
    } finally {
      setSaving(false);
    }
  }

  function newArticle() {
    const next = clonePost(emptyPost);
    next.slug = `new-toylandia-article-${Date.now().toString().slice(-5)}`;
    next.title = "New ToyLandia Article";
    setSelectedSlug(next.slug);
    setDraft(next);
    setPanel("articles");
  }

  function duplicateArticle() {
    const next = clonePost(draft);
    next.slug = `${slugify(draft.slug)}-copy`;
    next.title = `${draft.title} Copy`;
    setSelectedSlug(next.slug);
    setDraft(next);
    setNotice("Duplicated into a new editable draft. Save when ready.");
  }

  async function deleteArticle() {
    if (!window.confirm("Delete this CMS article from Turso?")) {
      return;
    }
    try {
      await cmsFetch(`/api/cms/posts/${selectedSlug}`, { method: "DELETE" });
      const remaining = posts.filter((post) => post.slug !== selectedSlug);
      setPosts(remaining);
      const next = remaining[0] ?? emptyPost;
      setSelectedSlug(next.slug);
      setDraft(clonePost(next));
      setNotice("Article deleted from Turso.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Delete failed.");
    }
  }

  async function resetSeeds() {
    if (!window.confirm("Seed Turso with the built-in ToyLandia articles? This will only run if the table is empty.")) {
      return;
    }
    try {
      const result = await cmsFetch<{ inserted: number; skipped: number }>("/api/cms/seed", { method: "POST" });
      await loadPosts();
      setNotice(result.inserted ? `Seeded ${result.inserted} articles to Turso.` : `Seed skipped. Turso already has ${result.skipped} articles.`);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Seed failed.");
    }
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(sortPosts(posts), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "toylandia-blog-posts.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importJson(file: File | null) {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as BlogPost[];
        if (!Array.isArray(parsed)) {
          throw new Error("Invalid JSON");
        }
        Promise.all(parsed.map((post) => cmsFetch("/api/cms/posts", {
          method: "POST",
          body: JSON.stringify({ post, status: "published" }),
        })))
          .then(() => loadPosts())
          .then(() => setNotice("Imported article JSON into Turso."))
          .catch((error) => setNotice(error instanceof Error ? error.message : "Import failed."));
      } catch {
        setNotice("Import failed. Use the exported ToyLandia blog JSON format.");
      }
    };
    reader.readAsText(file);
  }

  function updateFaq(index: number, update: Partial<BlogFaq>) {
    const next = [...draft.faqs];
    next[index] = { ...next[index], ...update };
    updateDraft({ faqs: next });
  }

  function updateSections(sections: BlogSection[]) {
    updateDraft({ sections });
  }

  const shellClass =
    theme === "dark"
      ? "min-h-screen bg-slate-950 text-white"
      : "min-h-screen bg-slate-100 text-slate-950";
  const surfaceClass = theme === "dark" ? "border-white/10 bg-white/10" : "border-slate-200 bg-white";

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
          <section className="w-full rounded-3xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-tl-yellow">ToyLandia CMS</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight">Content dashboard login</h1>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white/65">
              Manage article drafts, SEO fields, FAQs, rich formatting, and preview-ready content for the ToyLandia website.
            </p>

            <div className="mt-7 space-y-4">
              <Field label="Email">
                <TextInput value={email} onChange={(event) => setEmail(event.target.value)} />
              </Field>
              <Field label="Password">
                <TextInput type="password" value={password} onChange={(event) => setPassword(event.target.value)} onKeyDown={(event) => event.key === "Enter" && login()} />
              </Field>
              {notice ? <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-100">{notice}</p> : null}
              <button type="button" onClick={login} className="w-full rounded-full bg-tl-yellow px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white">
                Log in
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={shellClass}>
      <div className="mx-auto max-w-[1680px] px-4 py-5 sm:px-6 lg:px-8">
        <header className={`sticky top-0 z-30 mb-5 rounded-3xl border ${surfaceClass} p-4 shadow-sm backdrop-blur`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-tl-red">ToyLandia CMS</p>
              <h1 className="text-2xl font-black tracking-tight">Content command center</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["home", "articles", "seo", "settings"] as Panel[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPanel(item)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition ${
                    panel === item ? "bg-tl-red text-white" : theme === "dark" ? "bg-white/10 text-white/75 hover:bg-white/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button type="button" onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} className="rounded-full border border-slate-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <button type="button" onClick={signOut} className="rounded-full border border-slate-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">
                Sign out
              </button>
            </div>
          </div>
        </header>

        {notice ? (
          <div className="mb-5 rounded-2xl border border-tl-yellow/50 bg-tl-yellow/15 px-5 py-3 text-sm font-bold text-current">
            {notice}
          </div>
        ) : null}

        {panel === "home" ? (
          <section className="grid gap-5 xl:grid-cols-[1fr_420px]">
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-4">
                <StatCard label="Articles" value={String(posts.length)} note="Loaded from Turso or seed fallback" />
                <StatCard label="Keywords" value={String(allKeywords.length)} note="Unique visible search topics" />
                <StatCard label="Last update" value={latestUpdate} note="Newest edited article date" />
                <StatCard label="Status" value={source === "turso" ? "Turso" : "Setup"} note={source === "turso" ? "Database-backed publishing is active" : "Using seeds until Turso token is configured"} />
              </div>

              <div className={`rounded-3xl border ${surfaceClass} p-5`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-black tracking-tight">Article library</h2>
                    <p className="mt-1 text-sm font-medium opacity-70">Open any post to edit its copy, SEO, FAQs, images, and preview.</p>
                  </div>
                  <button type="button" onClick={newArticle} className="rounded-full bg-tl-red px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white">
                    New article
                  </button>
                </div>
                <div className="mt-5 grid gap-3">
                  {posts.map((post) => (
                    <button
                      key={post.slug}
                      type="button"
                      onClick={() => selectPost(post.slug)}
                      className={`rounded-2xl border p-4 text-left transition hover:border-tl-red ${theme === "dark" ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.12em] text-tl-red">{post.category}</p>
                          <h3 className="mt-1 text-lg font-black">{post.title}</h3>
                          <p className="mt-1 line-clamp-2 text-sm font-medium opacity-70">{post.description}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-tl-yellow px-3 py-1 text-xs font-black text-slate-950">{post.readTime}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside className={`rounded-3xl border ${surfaceClass} p-5`}>
              <h2 className="text-xl font-black tracking-tight">Publishing checklist</h2>
              <div className="mt-5 space-y-4 text-sm font-semibold leading-relaxed opacity-80">
                <p>Answer the buyer&apos;s question in the first two sentences.</p>
                <p>Use one search-intent keyword in the title, description, first section, and FAQ.</p>
                <p>Add practical local context for Philippines buyers, gifting, party prep, Shopee browsing, and reseller use cases.</p>
                <p>Keep the CTA specific. Do not give buyers multiple competing next steps in one article.</p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <button type="button" onClick={exportJson} className="rounded-full bg-tl-yellow px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-slate-950">
                  Export JSON
                </button>
                <label className="cursor-pointer rounded-full border border-slate-300 px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em]">
                  Import JSON
                  <input type="file" accept="application/json" className="hidden" onChange={(event) => importJson(event.target.files?.[0] ?? null)} />
                </label>
              </div>
            </aside>
          </section>
        ) : null}

        {panel === "articles" ? (
          <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(480px,0.92fr)]">
            <div className={`rounded-3xl border ${surfaceClass} p-5`}>
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black tracking-tight">Article builder</h2>
                  <p className="mt-1 text-sm font-medium opacity-70">Edit the complete article, not disconnected resource blocks.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={saveDraft} disabled={saving} className="rounded-full bg-tl-red px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white disabled:cursor-not-allowed disabled:opacity-60">
                    {saving ? "Saving" : "Save"}
                  </button>
                  <button type="button" onClick={duplicateArticle} className="rounded-full border border-slate-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em]">
                    Duplicate
                  </button>
                  <button type="button" onClick={deleteArticle} className="rounded-full border border-red-300 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-red-500">
                    Delete
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Title">
                  <TextInput value={draft.title} onChange={(event) => updateDraft({ title: event.target.value })} />
                </Field>
                <Field label="Slug">
                  <TextInput value={draft.slug} onChange={(event) => updateDraft({ slug: slugify(event.target.value) })} />
                </Field>
                <Field label="Category">
                  <TextInput value={draft.category} onChange={(event) => updateDraft({ category: event.target.value })} />
                </Field>
                <Field label="Read time">
                  <TextInput value={draft.readTime} onChange={(event) => updateDraft({ readTime: event.target.value })} />
                </Field>
                <Field label="Published date">
                  <TextInput type="date" value={draft.publishedAt} onChange={(event) => updateDraft({ publishedAt: event.target.value })} />
                </Field>
                <Field label="Updated date">
                  <TextInput type="date" value={draft.updatedAt} onChange={(event) => updateDraft({ updatedAt: event.target.value })} />
                </Field>
              </div>

              <div className="mt-4 grid gap-4">
                <Field label="Meta description" hint="Keep it direct. 140-160 characters is usually enough.">
                  <TextArea rows={3} value={draft.description} onChange={(event) => updateDraft({ description: event.target.value })} />
                </Field>
                <Field label="Answer-first summary">
                  <TextArea rows={3} value={draft.summary} onChange={(event) => updateDraft({ summary: event.target.value })} />
                </Field>
                <Field label="Hero deck">
                  <TextArea rows={3} value={draft.deck} onChange={(event) => updateDraft({ deck: event.target.value })} />
                </Field>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-600">Hero image</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <Field label="Image path">
                    <TextInput value={draft.heroImage.src} onChange={(event) => updateDraft({ heroImage: { ...draft.heroImage, src: event.target.value } })} />
                  </Field>
                  <Field label="Alt text">
                    <TextInput value={draft.heroImage.alt} onChange={(event) => updateDraft({ heroImage: { ...draft.heroImage, alt: event.target.value } })} />
                  </Field>
                  <Field label="Caption">
                    <TextInput value={draft.heroImage.caption ?? ""} onChange={(event) => updateDraft({ heroImage: { ...draft.heroImage, caption: event.target.value } })} />
                  </Field>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field label="Keywords" hint="One keyword per line.">
                  <TextArea rows={7} value={arrayToLines(draft.keywords)} onChange={(event) => updateDraft({ keywords: linesToArray(event.target.value) })} />
                </Field>
                <Field label="Key takeaways" hint="One takeaway per line.">
                  <TextArea rows={7} value={arrayToLines(draft.takeaways)} onChange={(event) => updateDraft({ takeaways: linesToArray(event.target.value) })} />
                </Field>
              </div>

              <div className="mt-5">
                <div className="mb-3">
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-600">Rich article body</h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">Use headings, paragraphs, lists, quotes, links, and images. The preview reads from this same formatted article model.</p>
                </div>
                <CmsRichArticleEditor sections={draft.sections} onChange={updateSections} />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-600">FAQs for AEO</h3>
                  <button
                    type="button"
                    onClick={() => updateDraft({ faqs: [...draft.faqs, { question: "New question", answer: "Write a concise answer." }] })}
                    className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white"
                  >
                    Add FAQ
                  </button>
                </div>
                <div className="mt-4 space-y-4">
                  {draft.faqs.map((faq, index) => (
                    <div key={`${faq.question}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                        <TextInput value={faq.question} onChange={(event) => updateFaq(index, { question: event.target.value })} />
                        <button
                          type="button"
                          onClick={() => updateDraft({ faqs: draft.faqs.filter((_, itemIndex) => itemIndex !== index) })}
                          className="rounded-xl border border-red-200 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                      <TextArea rows={3} value={faq.answer} onChange={(event) => updateFaq(index, { answer: event.target.value })} className="mt-3" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-600">Call to action</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Field label="CTA label">
                    <TextInput value={draft.cta.label} onChange={(event) => updateDraft({ cta: { ...draft.cta, label: event.target.value } })} />
                  </Field>
                  <Field label="CTA URL">
                    <TextInput value={draft.cta.href} onChange={(event) => updateDraft({ cta: { ...draft.cta, href: event.target.value } })} />
                  </Field>
                </div>
                <Field label="CTA note">
                  <TextArea rows={3} value={draft.cta.note ?? ""} onChange={(event) => updateDraft({ cta: { ...draft.cta, note: event.target.value } })} />
                </Field>
              </div>
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className={`mb-4 rounded-3xl border ${surfaceClass} p-5`}>
                <h2 className="text-xl font-black tracking-tight">Live preview</h2>
                <p className="mt-1 text-sm font-medium opacity-70">This mirrors the public article format, including body, images, lists, quotes, FAQs, and CTA intent.</p>
              </div>
              <PreviewArticle post={draft} />
            </aside>
          </section>
        ) : null}

        {panel === "seo" ? (
          <section className={`rounded-3xl border ${surfaceClass} p-6`}>
            <h2 className="text-2xl font-black tracking-tight">SEO, AEO, and GEO map</h2>
            <p className="mt-2 max-w-3xl text-sm font-medium leading-relaxed opacity-70">
              Use this section to audit whether articles answer clear search intent, include local buying context, and provide extractable answers for AI systems.
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <StatCard label="SEO" value="Search" note="Title, meta description, keyword coverage, internal blog links, image alt text." />
              <StatCard label="AEO" value="Answers" note="Answer-first summary, FAQ schema content, concise buyer questions." />
              <StatCard label="GEO" value="Context" note="Philippines buyer language, Shopee behavior, event use cases, reseller intent." />
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950">
              <h3 className="font-black">Keyword bank</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {allKeywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {panel === "settings" ? (
          <section className={`rounded-3xl border ${surfaceClass} p-6`}>
            <h2 className="text-2xl font-black tracking-tight">CMS tools</h2>
            <p className="mt-2 max-w-3xl text-sm font-medium leading-relaxed opacity-70">
              Turso is the live article database. Use import/export for backups or bulk content movement.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <button type="button" onClick={exportJson} className="rounded-2xl border border-slate-200 bg-tl-yellow p-5 text-left text-slate-950">
                <span className="text-sm font-black uppercase tracking-[0.12em]">Export articles</span>
                <span className="mt-2 block text-sm font-semibold">Download the current CMS article JSON.</span>
              </button>
              <label className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-950">
                <span className="text-sm font-black uppercase tracking-[0.12em]">Import articles</span>
                <span className="mt-2 block text-sm font-semibold">Load an exported ToyLandia article file.</span>
                <input type="file" accept="application/json" className="hidden" onChange={(event) => importJson(event.target.files?.[0] ?? null)} />
              </label>
              <button type="button" onClick={resetSeeds} className="rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-950">
                <span className="text-sm font-black uppercase tracking-[0.12em]">Reset seeds</span>
                <span className="mt-2 block text-sm font-semibold">Push built-in articles to Turso if the database is empty.</span>
              </button>
              <button type="button" onClick={() => loadPosts()} className="rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-950">
                <span className="text-sm font-black uppercase tracking-[0.12em]">Refresh DB</span>
                <span className="mt-2 block text-sm font-semibold">Reload articles from the Turso API.</span>
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

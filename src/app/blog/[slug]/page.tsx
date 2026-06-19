import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Concessionaire Insurance Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Josh Cotner",
    },
    publisher: {
      "@type": "Organization",
      name: "Contractors Choice Agency",
      url: "https://concessionaireinsurance.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-teal-200 text-sm mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link> / {post.category}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-teal-200 text-sm">
            <span>By Josh Cotner</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <article className="lg:col-span-2">
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium border-l-4 border-teal-500 pl-6 bg-teal-50 py-4 pr-4 rounded-r-xl">
                {post.excerpt}
              </p>
              <div className="space-y-5">
                {post.content.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Box */}
              <div className="mt-12 bg-slate-50 rounded-2xl p-6 flex items-start space-x-4">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">JC</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 mb-1">Josh Cotner</h3>
                  <p className="text-teal-600 text-sm font-medium mb-2">
                    Commercial Insurance Specialist | Contractors Choice Agency
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Josh Cotner is a former contractor and 20-year veteran of commercial insurance
                    specializing in contractor and vendor coverage. He founded Contractors Choice Agency
                    in 2005. NPN: 8608479. Licensed in all 50 states.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div>
              {/* CTA */}
              <div className="bg-teal-500 rounded-2xl p-6 text-white mb-6 sticky top-24">
                <h3 className="font-heading font-bold text-xl mb-3">Get a Free Quote</h3>
                <p className="text-teal-100 text-sm mb-5">
                  15-minute quotes. Same-day certificates. Licensed in all 50 states.
                </p>
                <Link
                  href="/quote"
                  className="block bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors mb-3"
                >
                  Get a Quote Online
                </Link>
                <a
                  href="tel:844-967-5247"
                  className="flex items-center justify-center space-x-2 border border-teal-300 text-white hover:bg-teal-600 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>844-967-5247</span>
                </a>
                <p className="text-teal-200 text-xs text-center mt-4">NPN: 8608479 | All 50 States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-slate-200 hover:border-teal-300 rounded-2xl p-6 hover:shadow-md transition-all group"
                >
                  <span className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{p.excerpt}</p>
                  <div className="text-xs text-slate-500 mt-3">{p.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

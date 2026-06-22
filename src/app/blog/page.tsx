import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concessionaire Insurance Blog | Resources for Event Vendors",
  description:
    "Insurance guides, coverage explainers, and compliance resources for concessionaires, food vendors, fair operators, and event vendors. Expert advice from Contractors Choice Agency.",
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Concessionaire Insurance Resources
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto">
            Expert guides and resources on concessionaire insurance, event vendor coverage, and
            compliance — written by specialists with 20+ years in the industry.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <div className="text-teal-500 text-xs font-semibold uppercase tracking-widest mb-4">Featured Article</div>
              <Link
                href={`/blog/${featured.slug}`}
                className="block bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-2xl overflow-hidden transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-full overflow-hidden">
                    <img
                      src="/images/vendor-fair.jpg"
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                      {featured.category}
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-600 mb-5 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-slate-200 hover:border-teal-300 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-48 overflow-hidden bg-teal-50">
                  <img
                    src="/images/event-setup.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-50 text-teal-600 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center space-x-3 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Get a free concessionaire insurance quote in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-block bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:844-967-5247"
              className="inline-block border-2 border-white text-white hover:bg-teal-600 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

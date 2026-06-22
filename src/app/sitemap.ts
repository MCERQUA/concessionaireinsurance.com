import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { coverages } from "@/lib/coverages";

const BASE_URL = "https://concessionaireinsurance.com";
const coverageSlugs = [
  "food-trucks",
  "fair-festival-vendors",
  "stadium-concessions",
  "amusement-park-vendors",
  "carnival-game-operators",
  "merchandise-vendors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/", "/about", "/contact", "/quote", "/blog", "/services", "/coverages", "/privacy", "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.8,
  }));

  const servicePages = coverages.map((c) => ({
    url: `${BASE_URL}/services/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const coveragePages = coverageSlugs.map((slug) => ({
    url: `${BASE_URL}/coverages/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...coveragePages, ...blogPages];
}

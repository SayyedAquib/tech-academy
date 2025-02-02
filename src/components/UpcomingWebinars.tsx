"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Introduction to Software Development",
      description:
        "Understand the basics of software development and how to start coding efficiently.",
      slug: "introduction-to-software-development",
      isFeatured: true,
    },
    {
      title: "Web Development Fundamentals",
      description:
        "Learn the essential tools and technologies for building modern websites and applications.",
      slug: "web-development-fundamentals",
      isFeatured: true,
    },
    {
      title: "Advanced Data Structures & Algorithms",
      description:
        "Dive deep into data structures and algorithms to level up your problem-solving skills.",
      slug: "advanced-data-structures-algorithms",
      isFeatured: true,
    },
    {
      title: "Building Scalable Web Applications",
      description:
        "Learn techniques to build fast and scalable applications for the modern web.",
      slug: "building-scalable-web-applications",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Introduction to Cloud Computing",
      description:
        "Explore cloud platforms and learn how to deploy applications in the cloud.",
      slug: "introduction-to-cloud-computing",
      isFeatured: true,
    },
    {
      title: "Tech Career Development",
      description:
        "Get insights into building a successful career in technology and software development.",
      slug: "tech-career-development",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Tech Skills
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;

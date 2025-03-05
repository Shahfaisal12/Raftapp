"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CurrentPosition() {
  const jobCategories = [
    {
      title: "Developers",
      jobs: [
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "10k - 30k",
        },
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "50k - 90k",
        },
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "50k - 110k",
        },
      ],
    },
    {
      title: "Designers",
      jobs: [
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "100k - 190k",
        },
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "80k - 120k",
        },
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "90k - 150k",
        },
      ],
    },
    {
      title: "DevOps Engineer",
      jobs: [
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "80k - 120k",
        },
        {
          title: "Android Developer",
          description:
            "You're on a mission to build innovative mobile experiences that make an impact. If you're passionate about solving complex problems using technology, design, and problem-solving, you've come to the right place.",
          remote: true,
          salary: "100k - 170k",
        },
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 pb-8">
      {jobCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">{category.title}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.jobs.map((job, jobIndex) => (
              <div
                key={jobIndex}
                className="overflow-hidden rounded-lg bg-black dark:bg-white"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-300 dark:text-black">
                    {job.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-300 dark:text-black">
                    {job.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-4 w-4">
                          <Image
                            src="/images/career/type.svg"
                            alt="job type"
                            className="block w-full dark:hidden"
                            width={80}
                            height={20}
                          />
                          <Image
                            src="/images/career/type.svg"
                            alt="job type dark"
                            className="hidden w-full dark:block"
                            width={80}
                            height={20}
                          />
                        </span>
                        <span>Remote</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="mr-2 inline-block h-4 w-4">
                          <Image
                            src="/images/career/salary.svg"
                            alt="salary dark"
                            className="hidden w-full dark:block"
                            width={80}
                            height={20}
                          />
                          <Image
                            src="/images/career/salary.svg"
                            alt="salary"
                            className="block w-full dark:hidden"
                            width={80}
                            height={20}
                          />
                        </span>
                        <span className="">{job.salary}</span>
                      </div>
                    </div>
                    <button className="rounded-sm bg-primary px-6 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-2xl py-12 text-center">
        <h1 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
          Cant Find a Role That Fits?
        </h1>
        <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
          Were always on the lookout for passionate, driven individuals who want
          to make a difference. If you dont see a position that fits your
          skills, send us your resume—wed love to hear from you!
        </p>

        <Link
          href="/contact"
          className="rounded-sm bg-primary p-3 text-base text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Email Us Now
        </Link>
      </section>
    </main>
  );
}

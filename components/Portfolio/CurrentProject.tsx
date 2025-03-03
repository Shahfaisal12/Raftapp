import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CurrentProject = () => {
  const showcaseItems = Array(6).fill({
    title: "FitGenius",
    subtitle: "An AI Fitness App",
    imageUrl: "/images/portfolio/project-1.svg",
    link: "/",
  });

  return (
    <section id="home" className="relative z-10 overflow-hidden md:pb-24">
      <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {showcaseItems.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-white shadow-lg"
                >
                  <div className="relative h-60 w-full sm:h-72 md:h-80">
                    <Image
                      src={item.imageUrl}
                      alt="FitGenius App Screenshots"
                      layout="fill"
                      objectFit="cover"
                    />
                    <Link key={index} href={item.link} passHref>
                      <div className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cyan-500 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h10m0 0v10m0-10L7 17"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="bg-cyan-500 p-4 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default CurrentProject;

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const servicesData = [
  {
    title: "Custom App Development",
    description:
      "We create feature-rich web and mobile applications tailored to your business goals. Our apps are built with the latest technologies, ensuring smooth performance, scalability, and an intuitive user experience across all devices.",
    image: "/images/services/services-1.svg",
  },
  {
    title: "Web & Mobile Developement",
    description:
      "Streamline operations and enhance productivity with our customized enterprise software solutions. We design and develop secure, scalable, and integrated platforms that improve workflow automation, data management, and team collaboration. Whether you need a CRM, ERP, or a specialized business tool, we deliver solutions that empower your organization.",
    image: "/images/services/services-2.svg",
  },
  {
    title: "UI/UX Design",
    description:
      "Great design is more than just aesthetics—it’s about creating meaningful and engaging experiences. We specialize in UI/UX design that enhances usability, accessibility, and overall user satisfaction. By leveraging research-driven insights, interactive prototyping, and responsive design techniques, we craft digital experiences that keep users engaged, increase conversions, and build brand loyalty.",
    image: "/images/services/services-1.svg",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Embrace the power of artificial intelligence and automation to streamline workflows and improve efficiency. Our AI-powered solutions include chatbots, machine learning algorithms, and intelligent process automation that enhance user interactions, reduce operational costs, and enable data-driven decision-making.",
    image: "/images/services/services-1.svg",
  },

  {
    title: "Cloud Solutions",
    description:
      "Unlock the full potential of cloud computing with our tailored cloud solutions. We help businesses migrate to the cloud, set up scalable infrastructure, and optimize cloud-based applications for performance, security, and cost efficiency. Whether it’s AWS, Google Cloud, or Azure, we ensure a seamless transition and future-proof your digital operations.",
    image: "/images/services/services-1.svg",
  },
];

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`-mx-4 mb-4 flex flex-wrap items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[30/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src={service.image}
                  alt={`${service.title} dark`}
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-black dark:text-body-color sm:text-lg sm:leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 pt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          href="/meeting"
          className="rounded-sm bg-primary p-3 text-base text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Schedule A Meeting
        </Link>
        <Link
          href="/chat"
          className="inline-block rounded-sm bg-black p-3 text-base text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
        >
          Let’s Chat
        </Link>
      </div>
    </section>
  );
};

export default Services;

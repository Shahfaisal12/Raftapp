"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useState } from "react";

const AboutSectionOne = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Why Choose Us?"
                subTitle="Technology That Works for You"
                paragraph={
                  <>
                    <strong className=" text-black dark:text-white">
                      Future-Ready Tech –
                    </strong>{" "}
                    We use the latest technologies to ensure your solutions stay
                    ahead of the curve.
                    <br />
                    <strong className=" text-black dark:text-white">
                      Tailored Development –
                    </strong>{" "}
                    Every solution is customized to fit your business goals.
                    <br />
                    <strong className=" text-black dark:text-white">
                      Scalable & Secure –
                    </strong>{" "}
                    Robust solutions that grow with your business while ensuring
                    data protection.
                    <br />
                    <strong className=" text-black dark:text-white">
                      End-to-End Support –
                    </strong>{" "}
                    From ideation to launch, we’re with you every step of the
                    way.
                  </>
                }
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[1000px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      src="/images/about/about-img-1-1.svg"
                      alt="about-img-1 light mode"
                      width={500}
                      height={400}
                      className="h-full w-full rounded-lg object-cover drop-shadow-three"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="relative h-[250px] w-full">
                      <Image
                        src="/images/about/about-img-1-2.svg"
                        alt="about-img-2 light mode"
                        fill
                        className="rounded-lg object-cover drop-shadow-three"
                      />
                    </div>

                    <div className="relative h-[150px] w-full">
                      <Image
                        src="/images/about/about-img-1-3.svg"
                        alt="about-img-3 light mode"
                        fill
                        className="rounded-lg object-cover drop-shadow-three"
                      />
                    </div>
                  </div>
                </div>

                {mounted && (
                  <div className="hidden dark:block">
                    <div className="absolute inset-0 grid grid-cols-2 gap-4">
                      <div className="relative">
                        <Image
                          src="/images/about/about-img-1-1.svg"
                          alt="Dark mode visualization"
                          width={500}
                          height={400}
                          className="h-full w-full rounded-lg object-cover drop-shadow-none"
                        />
                      </div>

                      <div className="flex flex-col gap-12">
                        <div className="relative h-[250px] w-full">
                          <Image
                            src="/images/about/about-img-1-2.svg"
                            alt="Dark mode mobile app"
                            fill
                            className="rounded-lg object-cover drop-shadow-none"
                          />
                        </div>

                        <div className="relative h-[150px] w-full">
                          <Image
                            src="/images/about/about-img-1-3.svg"
                            alt="Dark mode dashboard"
                            fill
                            className="rounded-lg object-cover drop-shadow-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

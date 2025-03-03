import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const WhoWeAre = () => {
  return (
    <div className="mt-16">
      <SectionTitle
        title="Who We Are?"
        paragraph="We’re on a mission to build innovative digital experiences that make an impact. If you’re passionate about technology, design, and problem-solving, you’ve come to the right place!We’re on a mission to build innovative digital experiences that make an impact. If you’re passionate about technology, design, and problem-solving, you’ve come to the right place!We’re on a mission to build innovative digital experiences that make an impact. If you’re passionate about technology, design, and problem-solving, you’ve come to the right place!"
        center
      />
      <div>
        <Image
          src="/images/about/banner.png"
          alt="logo"
          className="hidden w-full dark:block"
          width={140}
          height={30}
        />
      </div>
      <section className="pt-28">
        <div className="container">
          <div className="relative mx-auto mb-20 max-w-6xl">
            <div className="flex flex-col items-center md:flex-row">
              <div className=" flex flex-col items-center md:flex-row">
                <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
                  <div className="mb-8">
                    <Image
                      src="/images/about/quotation-2.svg"
                      alt="Innovation workspace"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="font-dancing text-lg italic leading-relaxed text-black-300 dark:text-gray-300 md:text-xl">
                    Innovation isn't just about building technology—it's about
                    creating experiences that transform the way we live, work,
                    and connect.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Image
                      src="/images/about/quotation.svg"
                      alt="Innovation workspace"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/about/annovat.png"
                      alt="Innovation workspace"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

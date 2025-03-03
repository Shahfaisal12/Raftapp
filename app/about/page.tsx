import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import TeamSection from "@/components/About/TeamSection";
import WhoWeAre from "@/components/About/WhoWeAre";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description:
    "At Raft Apps LLC, we craft innovative digital solutions that redefine user experiences. Our team blends creativity, technology, and strategy to build cutting-edge apps, software, and web platforms that drive impact and success.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Raft Apps LLC, we craft innovative digital solutions that redefine user experiences. Our team blends creativity, technology, and strategy to build cutting-edge apps, software, and web platforms that drive impact and success."
      />
      <WhoWeAre />
      <TeamSection />
    </>
  );
};

export default AboutPage;

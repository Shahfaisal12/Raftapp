import Career from "@/components/Career";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";
import CurrentPosition from "../../components/Career/CurrentPosition";

export const metadata: Metadata = {
  title: "Services Page",
  description:
    "At Raft Apps LLC, we craft innovative digital solutions that redefine user experiences. Our team blends creativity, technology, and strategy to build cutting-edge apps, software, and web platforms that drive impact and success.",
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="We’re on a mission to build innovative digital experiences that make an impact. If you’re passionate about technology, design, and problem-solving, you’ve come to the right place!"
      />
      <Career />
      <CurrentPosition />
    </>
  );
};

export default CareerPage;

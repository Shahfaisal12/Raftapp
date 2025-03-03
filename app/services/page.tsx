import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page",
  description:
    "At Raft Apps LLC, we craft innovative digital solutions that redefine user experiences. Our team blends creativity, technology, and strategy to build cutting-edge apps, software, and web platforms that drive impact and success.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Core Services"
        description="We specialize in creating innovative, and high-performance digital solutions. Whether you're looking to build a custom app, integrate AI automation, or enhance user experience, our solutions are designed to drive growth, and deliver exceptional results."
      />
      <Services />
    </>
  );
};

export default ServicesPage;

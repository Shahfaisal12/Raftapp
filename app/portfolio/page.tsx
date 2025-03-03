import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";
import CurrentProject from "@/components/Portfolio/CurrentProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Page",
  description:
    "At Raft Apps LLC, we craft innovative digital solutions that redefine user experiences. Our team blends creativity, technology, and strategy to build cutting-edge apps, software, and web platforms that drive impact and success.",
};

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="We bring creativity, innovation, and technical expertise together to build exceptional digital experiences. From intuitive UI/UX designs to powerful web and mobile applications, our work speaks for itself."
      />
    <Portfolio />
    <CurrentProject />
    </>
  );
};

export default PortfolioPage;

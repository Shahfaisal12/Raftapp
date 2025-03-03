import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";
import CurrentProject from "@/components/Portfolio/CurrentProject";

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

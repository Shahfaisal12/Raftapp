import React from "react";
import SectionTitle from "../Common/SectionTitle";

const Portfolio = () => {
  return (
    <section id="features" className="pt-3 md:pt-8 lg:pt-24">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          paragraph="Showcasing some of our best work across industries, blending design, technology, and functionality."
          center
        />
      </div>
    </section>
  );
};

export default Portfolio;

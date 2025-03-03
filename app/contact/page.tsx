import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Need help, have a project idea, or just want to chat? Reach out to us for inquiries, collaborations, or support—we’re here to assist, innovate, and create something amazing together!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;

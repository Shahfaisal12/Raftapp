const SectionTitle = ({
  title,
  subTitle,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  subTitle?: string;
  paragraph: string | React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[36px]">
          {title}
        </h2>
        <h6 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[24px]">
            {subTitle}
          </h6>
        <p className="text-base !leading-relaxed text-body-color md:text-md">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

import React from "react";
import aiDesign from "../../assets/ai-design.jpg";
import mobileDev from "../../assets/mobile-dev.jpg";
import dataAnalysis from "../../assets/data-analysis.jpg";
import uiux from "../../assets/uiux-design.jpg";
import webScrape from "../../assets/web-scraping.jpg";
import websiteDesign from "../../assets/website-design.jpg";

const Services = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-4 py-10 px-20">
        <div className="flex flex-col gap-5">
          <span className="text-4xl md:text-6xl font-bold">
            Services we Offer!
          </span>
          <div className="border-2 self-center border-green-500 rounded-lg w-[60%]"></div>
        </div>
        <div className="text-lg font-medium text-center font-roboto leading-7">
          Discover innovative web solutions tailored to your needs! As a skilled
          frontend and backend developer, we transform ideas into seamless
          digital experiences. Let’s elevate your project to new heights
          together!
        </div>
      </div>
      <div className="flex px-2 md:px-32 flex-col gap-7 items-center justify-center md:justify-normal md:items-start md:gap-5 mt-10 py-5">
        <div className="flex flex-col md:flex-row gap-3 md:gap-60 justify-normal ">
          <img className="w-[300px] rounded-lg" src={uiux} alt="" />{" "}
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold font-roboto">UI/UX Design</span>
            <span className="text-lg font-roboto w-[320px] md:w-[500px]">
              Our UI/UX design service focuses on creating intuitive and
              visually appealing interfaces that enhance user satisfaction. By
              understanding user needs and behaviors, we design engaging
              experiences that ensure seamless navigation and interaction. Our
              iterative design process incorporates feedback and testing,
              resulting in products that not only look great but also drive user
              engagement and retention.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-60">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold font-roboto">
              Web Development
            </span>
            <span className="text-lg font-roboto w-[320px] md:w-[500px]">
              Our web development service encompasses building robust, scalable
              websites tailored to meet your business goals. We utilize the
              latest technologies and frameworks to create responsive,
              high-performance sites that provide an optimal experience across
              devices. From front-end design to back-end functionality, we
              ensure that your website is secure, efficient, and easy to
              maintain, helping you establish a strong online presence.
            </span>
          </div>
          <img className="w-[300px] rounded-lg" src={websiteDesign} alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-60">
          <img className="w-[300px] rounded-lg" src={mobileDev} alt="" />
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold font-roboto">
              Mobile Development
            </span>
            <span className="text-lg font-roboto w-[320px] md:w-[500px]">
              Our mobile development service delivers custom applications for
              iOS and Android platforms, ensuring a native look and feel. We
              focus on creating user-friendly apps that meet the specific needs
              of your audience. With a commitment to quality and performance, we
              build scalable and secure mobile solutions that facilitate
              engagement, increase accessibility, and promote brand loyalty.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-60 justify-normal md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold font-roboto">
              Generative AI
            </span>
            <span className="text-lg font-roboto w-[320px] md:w-[500px]">
              Harness the power of generative AI to transform your digital
              solutions. Our team integrates advanced AI technologies to create
              personalized content, automate processes, and enhance
              decision-making. Whether it's generating dynamic content,
              optimizing workflows, or improving user experiences, we leverage
              AI to drive innovation and efficiency, keeping your business ahead
              of the curve.
            </span>
          </div>
          <img className="w-[300px] rounded-lg" src={aiDesign} alt="" />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-60">
          <img className="w-[300px] rounded-lg" src={dataAnalysis} alt="" />
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold font-roboto">
              Data analysis
            </span>
            <span className="text-lg font-roboto w-[320px] md:w-[500px]">
              Unlock the potential of your data with our comprehensive data
              analysis services. We employ advanced analytical techniques to
              derive actionable insights from complex datasets, enabling you to
              make informed decisions. By visualizing trends and patterns, we
              help you understand your audience better, optimize operations, and
              drive strategic initiatives that enhance overall performance and
              growth.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

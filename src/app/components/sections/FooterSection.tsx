/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionWrapper from "../wrappers/SectionWrapper";

interface Props {}

const FooterSection = ({}: Props) => {
  return (
    <SectionWrapper className="relative w-screen py-8 md:py-8 bg-primary-100 flex items-center justify-center">
      <footer>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between w-screen text-center">
          <div className="mx-auto w-full max-w-screen-xl">
            <h2 className="text-lg md:text-2xl text-center my">
              Looking forward to meeting all the guests 👰🏻🤵🏻
            </h2>
            <img
              alt="Footer"
              src={`/images/looking-forward.webp`}
              className="w-11/12 md:max-w-[300px] mx-auto mt-10"
            />
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};
export default FooterSection;

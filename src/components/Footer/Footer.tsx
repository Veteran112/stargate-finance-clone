/* eslint-disable @next/next/no-img-element */
import FooterLinksRenderer from "@components/FooterLinksRenderer";
import Logo from "@components/Svgs/Logo";
import { footerLinks } from "@config/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 pt-[30px]">
      {/** Footer Top --Start-- */}
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-y-10">
          <div>
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-8 md:gap-[95px]">
            <FooterLinksRenderer {...footerLinks.protocol} />
            <FooterLinksRenderer {...footerLinks.community} />
            <FooterLinksRenderer {...footerLinks.resources} />
          </div>
        </div>
      </div>
      {/** Footer Top --End-- */}

      {/** Footer Bottom --Start-- */}
      <div className="py-7 border-t border-t-white/20 mt-9">
        <div className="px-[60px] flex-col items-center gap-y-4 md:flex-row flex justify-between text-sm text-white/50">
          <div className="flex gap-1.5 items-center">
            <p>Powered by</p>
            <img src="/img/logo1.png" alt="Logo" className="h-[17px]" />
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 justify-center">
            <a href="#" className="hover:text-white">
              Terms Of Use
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      {/** Footer Bottom --End-- */}
    </footer>
  );
};

export default Footer;

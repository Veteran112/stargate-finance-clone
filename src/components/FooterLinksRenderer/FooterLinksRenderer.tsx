import { FooterLinks } from "@config/types";
import React from "react";

const FooterLinksRenderer = ({ title, links }: FooterLinks) => {
  return (
    <div>
      <h6 className="text-[20px] font-semibold mb-[18px]">{title}</h6>
      <ul className="space-y-3">
        {links.map((link, i) => (
          <li key={i}>
            <a
              className="text-white opacity-50 py-2 block hover:opacity-100"
              href={link.url}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksRenderer;

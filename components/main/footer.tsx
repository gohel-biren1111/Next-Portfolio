import Link from "next/link";
import { FOOTER_DATA, NAV_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-6">
          {/* Existing Footer Columns */}
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon className="w-5 h-5 mr-2" />}
                  <span className="text-[15px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}

          {/* Quick Links Column */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">Quick Links</h3>
            {NAV_LINKS.map(({ title, link }) => (
              <Link
                key={`quick-${title}`}
                href={link}
                className="flex flex-row items-center my-[10px]"
              >
                <span className="text-[15px]">{title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Biren Gohel {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

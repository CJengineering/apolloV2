import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { Url } from "url";

import * as SocialIconsComponent from "./SocialIcons";

const ComponentsMap: {
  [key: string]: React.ComponentType<{ className: string }>;
} = {
  twitter: SocialIconsComponent.Twitter,
  facebook: SocialIconsComponent.Facebook,
  instagram: SocialIconsComponent.Instagram,
  linkedin: SocialIconsComponent.Linkedin,
};

interface SocialButtonProps {
  name: keyof typeof ComponentsMap;
  containerClassName?: string;
  iconClassName?: string;
  type?: "button" | "link";
  href?: Url | string;
  [key: string]: any; // for additional props
}

export function SocialButton({
  name,
  containerClassName = "",
  iconClassName = "",
  type = "button",
  href,
  ...props
}: SocialButtonProps) {
  containerClassName = twMerge(
    type === "button"
      ? "flex items-center justify-center w-10 h-10 duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 group hover:bg-gray-50"
      : "relative group",
    containerClassName
  );
  iconClassName = twMerge(
    "w-4 h-4 text-gray-700 duration-300 ease-in-out group-hover:text-red-700",
    iconClassName
  );

  if (name in ComponentsMap) {
    const Icon = ComponentsMap[name];
    return (
      <>
        {href ? (
          <Link {...(props as LinkProps)}>
            <a className={containerClassName}>
              <span className="sr-only">{name}</span>
              <Icon className={iconClassName} />
            </a>
          </Link>
        ) : (
          <span className={containerClassName} {...props}>
            <span className="sr-only">{name}</span>
            <Icon className={iconClassName} />
          </span>
        )}
      </>
    );
  } else {
    return null;
  }
}

import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import SocialLink from "./SocialLink";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";
import UpWorkIcon from "./icons/UpWorkIcon";
const Hero = () => {
  return (
    <div className="my-12 flex w-full items-center justify-center gap-4 divide-x-[1px] dark:divide-slate-500">
      <div className="relative h-48 w-48 rounded-full p-2">
        <StaticImage
          src="../images/kalibetre.png"
          alt="kalkidan's portrait"
          layout="fullWidth"
          objectFit="contain"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center p-2">
        <p className="text-xs text-slate-500 sm:text-sm">Hi, I'm</p>
        <h1 className="text-md sm:text-2xl">Kalkidan Betre</h1>
        <p className="text-xs sm:text-sm">
          Software engineer based in &nbsp;
          <a
            className="text-teal-600 after:content-['_↗'] hover:text-teal-400"
            target="_blank"
            href="https://visitethiopia.travel"
          >
            the land of origins
          </a>
        </p>
        <div className="mt-6 flex gap-1">
          <SocialLink href="https://github.com/kalibetre">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kalkidan-betre-405750110">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href="https://twitter.com/kalibetre?s=21&t=NkHjwMmVFifoQlG-k4hvUQ">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="https://www.upwork.com/freelancers/~0160d9d0df81064f8c">
            <UpWorkIcon />
          </SocialLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;

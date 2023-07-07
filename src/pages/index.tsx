import { type HeadFC, type PageProps } from "gatsby";
import * as React from "react";
import FeaturedBlogs from "../components/FeaturedBlogs";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import PageHead from "../components/PageHead";
import PageLayout from "../components/PageLayout";
import TechStack from "../components/TechStack";
import DjangoIcon from "../components/icons/DjangoIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import GatsbyIcon from "../components/icons/GatsbyIcon";
import ReactJsIcon from "../components/icons/ReactJsIcon";
import SpringBootIcon from "../components/icons/SpringBootIcon";
import TailwindIcon from "../components/icons/TailwindIcon";

const TECH_STACKS = [
  {
    icon: <ReactJsIcon />,
    label: "React",
  },
  {
    icon: <GatsbyIcon />,
    label: "Gatsby",
  },
  {
    icon: <TailwindIcon />,
    label: "Tailwind",
  },
  {
    icon: <DjangoIcon />,
    label: "Django",
  },
  {
    icon: <SpringBootIcon />,
    label: "Spring Boot",
  },
  {
    icon: <ExpressIcon />,
    label: "Express",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Hero />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TECH_STACKS.map((techStack) => (
          <TechStack key={techStack.label} {...techStack} />
        ))}
      </div>
      <div className="my-12">
        <FeaturedProjects />
      </div>
      <div className="my-12">
        <FeaturedBlogs />
      </div>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <PageHead title="Home Page" />;

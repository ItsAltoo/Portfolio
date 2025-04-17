import { TextAnimate } from "@/components/magicui/text-animate";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { portfolioData, Category } from "@/data/projectData";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface ButtonProps {
  aboutToContact: React.RefObject<HTMLDivElement | null>;
}

/* About Me */
export const AboutMe: React.FC<ButtonProps> = ({ aboutToContact }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative h-full flex flex-col justify-center px-6 md:px-24">
        <div className="flex items-center gap-2">
          <TextAnimate
            className="text-4xl md:text-7xl font-semibold italic text-left"
            animation="slideLeft"
            by="character"
          >
            About
          </TextAnimate>
          <TextAnimate
            className="text-4xl md:text-7xl font-semibold italic text-left brand-blue"
            animation="slideLeft"
            by="character"
            delay={0.2}
          >
            Me
          </TextAnimate>
        </div>

        <TextAnimate
          className="md:max-w-4xl text-pretty max-w-2xl mt-12 text-base md:text-xl text-start leading-relaxed "
          animation="fadeIn"
          by="character"
        >
          My name is Malik. I live in Samarinda, East Kalimantan, Indonesia. I
          have an interest in frontend development and want to learn more. I am
          still young and have not experienced much, but if you need a young man
          with high enthusiasm in programming, I'm your guy.
        </TextAnimate>

        <TextAnimate
          className="md:max-w-4xl text-pretty max-w-2xl mt-6 text-base md:text-xl text-start leading-relaxed"
          animation="fadeIn"
          by="character"
          delay={0.2}
        >
          In my spare time, I draw anime characters and explore new technologies
          that excite me. I'm also passionate about astronomy—looking at the
          starry night sky brings me peace.
        </TextAnimate>
        <div className="mt-8 ml-4">
          <Button
            className="h-16 w-40"
            variant="outlined"
            onClick={() => scrollToSection(aboutToContact)}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
};

/* Resume */
export const Resume = () => {
  const SkillSection = ({
    title,
    icons,
  }: {
    title: string;
    icons: string[];
  }) => (
    <div className="text-start">
      <h2 className="mb-4 font-semibold md:text-2xl text-xl">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {icons.map((icon, idx) => (
          <div
            key={idx}
            className="shadow-md shadow-blue-400 rounded-lg md:p-4 md:px-5 p-2 px-3 bg-zinc-400/20"
          >
            <i className={`${icon} text-3xl text-blue-500`}></i>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-around px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl border-l-2 pl-5 mb:pl-12 pb-12 dark:border-white/70">
          <h1 className="font-['Markazi_Text',serif] text-5xl md:text-6xl lg:text-8xl my-14 text-center md:text-start">
            My <span className="brand-blue">Resume</span>
          </h1>

          <TextAnimate
            className="max-w-[700px] mb-10 text-center md:text-start"
            animation="fadeIn"
            by="line"
            as="p"
            delay={0.3}
          >
            {`Passionate Web Developer with 2 years of practical learning experience, combined with a 3-year\nfoundation in Graphic Design from vocational high school. I enjoy building intuitive, visually\nengaging digital experiences by merging creativity with code.`}
          </TextAnimate>

          {/* Skill Sections */}
          <div className="flex flex-col gap-10">
            {/* LANGUAGES */}
            <SkillSection
              title="LANGUAGES"
              icons={[
                "devicon-css3-plain",
                "devicon-html5-plain",
                "devicon-javascript-plain",
                "devicon-mysql-original",
                "devicon-python-plain",
              ]}
            />

            {/* FRAMEWORKS */}
            <SkillSection
              title="FRAMEWORKS"
              icons={[
                "devicon-django-plain",
                "devicon-vitejs-plain",
                "devicon-react-original",
                "devicon-tailwindcss-original",
              ]}
            />

            {/* TOOLS */}
            <SkillSection
              title="TOOLS"
              icons={[
                "devicon-vercel-original",
                "devicon-vscode-plain",
                "devicon-nodejs-plain-wordmark",
                "devicon-photoshop-plain",
                "devicon-figma-plain",
                "devicon-github-original",
                "devicon-git-plain",
                "devicon-npm-original-wordmark",
              ]}
            />
          </div>

          {/* Education */}
          <div className=" mt-16">
            <h1 className="text-4xl font-bold mb-8">EDUCATION</h1>

            <div className="max-w-80 text-start dark:text-white/70">
              <p>Sep 2024 - Present</p>
              <span className="font-bold text-lg dark:text-white">
                Universitas Muhammadiyah Kalimantan Timur Samarinda
              </span>
              <p>Bachelors of Informatics Engineering</p>
            </div>

            <div className="max-w-80 text-start mt-12 dark:text-white/70">
              <p>Mar 2022 - Mar 2024</p>
              <span className="font-bold text-xl dark:text-white">
                SMKN 18 Samarinda
              </span>
              <p>Vocational Studies MultiMedia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* Project */
export const Project = () => {
  const categories: Category[] = ["All", "Website", "Art", "Design Grafis"];
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [selected, setSelected] = useState<Category>("All");

  const filtered =
    selected === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selected);

  return (
    <>
      <div className="flex flex-col items-baseline px-4">
        <div className="max-w-3xl pb-12 ml-2">
          <h1 className="font-['Markazi_Text',serif] text-5xl md:text-6xl lg:text-8xl mt-24 text-center md:text-start">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Project
            </span>
          </h1>

          <p className="mt-8 md:ml-28 text-xl">
            Here is a collection of my favorite projects that I've developed
            recently. Each project showcases my skills and dedication to
            creating high-quality applications. From innovative features to
            seamless user experiences, these projects represent the best of my
            work.
          </p>
        </div>

        {/* Project Content */}
        <div className="flex flex-col justify-center items-center w-full mt-24">
          <div className="p-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center">
              {categories.map((cate) => (
                <Button
                  key={cate}
                  variant={selected === cate ? "contained" : "outlined"}
                  onClick={() => setSelected(cate)}
                >
                  {cate}
                </Button>
              ))}
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-xl shadow-sm shadow-blue-500 bg-white dark:bg-zinc-900"
                >
                  {/* Gambar Project */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setZoomImage(item.imageUrl)}
                  />

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                  <p className="mt-2">{item.description}</p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap mt-4 gap-2">
                    {item.techIcons.map((icon, index) => (
                      <i
                        key={index}
                        className={`${icon} text-2xl text-blue-500`}
                      ></i>
                    ))}
                  </div>

                  {/* Action Buttons by Category */}
                  <div className="mt-4">
                    {item.category === "Website" && (
                      <Button
                        href={`https://${item.websiteUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                      >
                        Visit Site
                      </Button>
                    )}
                    {item.category === "Art" && (
                      <div className="mt-12">
                        <Button
                          href={item.imageUrl}
                          download
                          variant="contained"
                        >
                          Download Image
                        </Button>
                      </div>
                    )}
                    {item.category === "Design Grafis" && (
                      <div className="flex gap-2 flex-wrap">
                        <Button
                          href={item.imageUrl}
                          download
                          variant="contained"
                        >
                          Download Image
                        </Button>
                        {item.templateUrl && (
                          <Button href={item.templateUrl} download>
                            Download Template
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          className="md:mt-5 fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-[80%] max-h-[80%] rounded-lg shadow-xl border border-blue-500"
          />
        </div>
      )}
    </>
  );
};

/* Contact */
export const Contact = () => {
  return (
    <>
      <footer className="dark:bg-zinc-800 bg-zinc-700 border-t border-blue-500 shadow-2xl shadow-blue-500 text-gray-300 py-12 px-4 mt-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sosial Media */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/ItsAltoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-500 transition" />
            </a>
            <a href="" target="" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://www.instagram.com/malik_qit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-blue-500 transition" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center">
            © 2025 Malik S.A. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

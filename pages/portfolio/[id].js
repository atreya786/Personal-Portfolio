import React from "react";

import urban from "../../public/assets/portfolio/urban.png";
import blog from "../../public/assets/portfolio/blog-post .png";
import calculator from "../../public/assets/portfolio/calculator.png";
import demo from "../../public/assets/portfolio/demo-portfolio.png";
import dice from "../../public/assets/portfolio/dice-roll.png";
import erp from "../../public/assets/portfolio/erp.png";
import note from "../../public/assets/portfolio/keeper-app.png";
import news from "../../public/assets/portfolio/newsletter.png";
import orchestra from "../../public/assets/portfolio/orchestra.png";
import stopwatch from "../../public/assets/portfolio/stopwatch.png";
import tindog from "../../public/assets/portfolio/tindog.png";
import weather from "../../public/assets/portfolio/weatherapp.png";
import bubble from "../../public/assets/portfolio/bubble-game.png";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "Urban Interiors",
    imageSrc: urban,
    url: "urban-interiors",
    description:
      "The Urban Website is a visually stunning and responsive web design project. It showcases modern urban architecture and provides information about urban planning and development. With a clean and intuitive user interface, this website is an example of seamless navigation and engaging content presentation.",
  },
  {
    id: 2,
    title: "Blog Post",
    imageSrc: blog,
    url: "blog-post",
    description:
      "The Blog Post project is a platform for sharing insightful articles and blog posts. It features a user-friendly interface, allowing authors to write, publish, and manage their content effortlessly. Readers can explore a wide range of topics, comment on posts, and engage in meaningful discussions.",
  },
  {
    id: 3,
    title: "Calculator App",
    imageSrc: calculator,
    url: "calculator-app",
    description:
      "The Calculator App is a handy tool for performing basic arithmetic calculations. It offers a clean and straightforward user interface with support for addition, subtraction, multiplication, and division. This app is designed for ease of use and is a valuable tool for quick mathematical tasks.",
  },
  {
    id: 4,
    title: "Demo Portfolio",
    imageSrc: demo,
    url: "demo-portfolio",
    description:
      "The Demo Portfolio is a showcase of my web development skills and projects. It provides a glimpse into my capabilities as a developer and demonstrates my proficiency in creating responsive and visually appealing websites. Explore this portfolio to see a diverse range of web applications and designs.",
  },
  {
    id: 5,
    title: "Dice Roll App",
    imageSrc: dice,
    url: "dice-roll-app",
    description:
      "The Dice Roll App is a fun and interactive application for simulating the roll of a six-sided die. It includes animations and sound effects to enhance the user experience. Use this app for games, decision-making, or simply to have some virtual dice-rolling fun.",
  },
  {
    id: 6,
    title: "ERP System",
    imageSrc: erp,
    url: "erp-system",
    description:
      "The ERP System is a comprehensive enterprise resource planning solution designed to streamline business operations. It integrates various modules such as inventory management, finance, and HR to enhance efficiency and productivity within an organization. This system simplifies complex business processes and data management.",
  },
  {
    id: 7,
    title: "Keeper App",
    imageSrc: note,
    url: "keeper-app",
    description:
      "The Keeper App is a note-taking application that helps users organize and manage their notes. It features a user-friendly interface and allows users to create, edit, and categorize notes effortlessly. With this app, you can keep your thoughts and important information organized and easily accessible.",
  },
  {
    id: 8,
    title: "Newsletter Website",
    imageSrc: news,
    url: "newsletter-website",
    description:
      "The Newsletter Website is a platform for sharing news, updates, and articles. It offers a clean and modern design, making it easy for visitors to browse and subscribe to newsletters. Stay informed and connected with the latest news and updates in your area of interest.",
  },
  {
    id: 9,
    title: "Orchestra Website",
    imageSrc: orchestra,
    url: "orchestra-website",
    description:
      "The Orchestra Website is dedicated to promoting and showcasing the talent and performances of an orchestra. It provides information about upcoming concerts, featured musicians, and ticket booking options. Experience the beauty of classical music through this elegantly designed website.",
  },
  {
    id: 10,
    title: "Stopwatch App",
    imageSrc: stopwatch,
    url: "stopwatch-app",
    description:
      "The Stopwatch App is a simple yet efficient tool for timing events or activities. It offers precise timekeeping with start, stop, and reset functionality. Use it for workouts, cooking, or any situation where accurate timing is essential.",
  },
  {
    id: 11,
    title: "Tindog Website",
    imageSrc: tindog,
    url: "tindog-website",
    description:
      "The Tindog Website is a playful and interactive website designed for pet lovers. It offers information about pets available for adoption, pet care tips, and a platform for pet enthusiasts to connect. Explore this website to find your next furry friend or share your love for animals.",
  },
  {
    id: 12,
    title: "Weather App",
    imageSrc: weather,
    url: "weather-app",
    description:
      "The Weather App provides real-time weather forecasts and information for various locations. It offers accurate weather data, including temperature, humidity, and wind conditions. Stay informed about the weather in your area or plan your travels with confidence using this app.",
  },
  {
    id: 13,
    title: "Bubble Game",
    imageSrc: bubble,
    url: "bubble-game",
    description:
      "The Bubble Game is an addictive and entertaining online game where players aim to match and pop colorful bubbles. It offers multiple levels of increasing difficulty and a leaderboard to compete with other players. Enjoy hours of fun and challenge your bubble-popping skills!",
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc, description } }) => {
  return (
    <div className="h-fit w-full text-center bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>{description}</p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/atreya786">
            <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;

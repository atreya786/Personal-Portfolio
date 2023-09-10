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
import book from "../../public/assets/portfolio/book.png";
import nike from "../../public/assets/portfolio/nike.png";
import promptVue from "../../public/assets/portfolio/promptVue.png";
import reactTube from "../../public/assets/portfolio/tube.png";

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
    link: "http://github.com/atreya786/Urban-Interiors",
  },
  {
    id: 2,
    title: "Blog Post",
    imageSrc: blog,
    url: "blog-post",
    description:
      "The Blog Post project is a platform for sharing insightful articles and blog posts. It features a user-friendly interface, allowing authors to write, publish, and manage their content effortlessly. Readers can explore a wide range of topics, comment on posts, and engage in meaningful discussions.",
    link: "http://github.com/atreya786/Pen-And-Pixels",
  },
  {
    id: 3,
    title: "Nike",
    imageSrc: nike,
    url: "nike",
    description:
      "The Nike app is a leading fitness and sportswear application by Nike, Inc. It empowers users to achieve their fitness goals with personalized workout plans tailored to their needs, including running and strength training. The app offers a seamless shopping experience, allowing users to explore and purchase Nike's latest athletic apparel and footwear.",
    link: "http://github.com/atreya786/Nike",
  },
  {
    id: 4,
    title: "PromptVue",
    imageSrc: promptVue,
    url: "promptvue",
    description:
      "PromptVue is a dynamic CRUD application built using Next.js. It provides an intuitive interface for users to Create, Read, Update, and Delete data. With real-time updates and seamless navigation, PromptVue simplifies data management for various applications.",
    link: "http://github.com/atreya786/Next-Prompt-Vue",
  },
  {
    id: 5,
    title: "React Tube",
    imageSrc: reactTube,
    url: "reacttube",
    description:
      "ReactTube is a YouTube clone developed using React.js. It replicates the core features of YouTube, allowing users to search and watch videos, comment, and interact with content. Experience a familiar video-sharing platform with ReactTube.",
    link: "http://github.com/atreya786/React-Tube",
  },
  {
    id: 6,
    title: "Demo Portfolio",
    imageSrc: demo,
    url: "demo-portfolio",
    description:
      "The Demo Portfolio is a showcase of my web development skills and projects. It provides a glimpse into my capabilities as a developer and demonstrates my proficiency in creating responsive and visually appealing websites. Explore this portfolio to see a diverse range of web applications and designs.",
    link: "http://github.com/atreya786/Demo-Portfolio",
  },
  {
    id: 7,
    title: "Dice Roll",
    imageSrc: dice,
    url: "dice-roll-app",
    description:
      "The Dice Roll App is a fun and interactive application for simulating the roll of a six-sided die. It includes animations and sound effects to enhance the user experience. Use this app for games, decision-making, or simply to have some virtual dice-rolling fun.",
    link: "http://github.com/atreya786/Dice-Roll",
  },
  {
    id: 8,
    title: "ERP System",
    imageSrc: erp,
    url: "erp-system",
    description:
      "The ERP System is a comprehensive enterprise resource planning solution designed to streamline business operations. It integrates various modules such as inventory management, finance, and HR to enhance efficiency and productivity within an organization. This system simplifies complex business processes and data management.",
    link: "http://github.com/atreya786/ERP-System-Frontend",
  },
  {
    id: 9,
    title: "Keeper App",
    imageSrc: note,
    url: "keeper-app",
    description:
      "The Keeper App is a note-taking application that helps users organize and manage their notes. It features a user-friendly interface and allows users to create, edit, and categorize notes effortlessly. With this app, you can keep your thoughts and important information organized and easily accessible.",
    link: "http://github.com/atreya786/Note-Keeper-Frontend",
  },
  {
    id: 10,
    title: "Newsletter Website",
    imageSrc: news,
    url: "newsletter-website",
    description:
      "The Newsletter Website is a platform for sharing news, updates, and articles. It offers a clean and modern design, making it easy for visitors to browse and subscribe to newsletters. Stay informed and connected with the latest news and updates in your area of interest.",
    link: "http://github.com/atreya786/News-Letter",
  },
  {
    id: 11,
    title: "Orchestra Website",
    imageSrc: orchestra,
    url: "orchestra-website",
    description:
      "The Orchestra Website is dedicated to promoting and showcasing the talent and performances of an orchestra. It provides information about upcoming concerts, featured musicians, and ticket booking options. Experience the beauty of classical music through this elegantly designed website.",
    link: "http://github.com/atreya786/Orchestra",
  },
  {
    id: 12,
    title: "Stopwatch",
    imageSrc: stopwatch,
    url: "stopwatch-app",
    description:
      "The Stopwatch App is a simple yet efficient tool for timing events or activities. It offers precise timekeeping with start, stop, and reset functionality. Use it for workouts, cooking, or any situation where accurate timing is essential.",
    link: "http://github.com/atreya786/Stopwatch",
  },
  {
    id: 13,
    title: "Tindog Website",
    imageSrc: tindog,
    url: "tindog-website",
    description:
      "The Tindog Website is a playful and interactive website designed for pet lovers. It offers information about pets available for adoption, pet care tips, and a platform for pet enthusiasts to connect. Explore this website to find your next furry friend or share your love for animals.",
    link: "http://github.com/atreya786/Tin-Dog",
  },
  {
    id: 14,
    title: "Weather App",
    imageSrc: weather,
    url: "weather-app",
    description:
      "The Weather App provides real-time weather forecasts and information for various locations. It offers accurate weather data, including temperature, humidity, and wind conditions. Stay informed about the weather in your area or plan your travels with confidence using this app.",
    link: "http://github.com/atreya786/Weather-App",
  },
  {
    id: 15,
    title: "Bubble Game",
    imageSrc: bubble,
    url: "bubble-game",
    description:
      "The Bubble Game is an addictive and entertaining online game where players aim to match and pop colorful bubbles. It offers multiple levels of increasing difficulty and a leaderboard to compete with other players. Enjoy hours of fun and challenge your bubble-popping skills!",
    link: "http://github.com/atreya786/Bubble-Game",
  },
  {
    id: 16,
    title: "Calculator App",
    imageSrc: calculator,
    url: "calculator-app",
    description:
      "The Calculator App is a handy tool for performing basic arithmetic calculations. It offers a clean and straightforward user interface with support for addition, subtraction, multiplication, and division. This app is designed for ease of use and is a valuable tool for quick mathematical tasks.",
    link: "http://github.com/atreya786/Calculator",
  },
  {
    id: 17,
    title: "Book Hub",
    imageSrc: book,
    url: "book-hub",
    description:
      "BookHub is a comprehensive online platform for book lovers. It offers a vast library of books spanning various genres and authors, providing readers with an extensive collection of reading material. Users can create profiles, rate and review books, and join book clubs to connect with fellow readers. The platform also includes features like personalized book recommendations and a virtual bookshelf to help users organize their reading lists. Dive into the world of literature with BookHub and discover your next great read.",
    link: "http://github.com/atreya786/Book-Hub",
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

const OnePortfolio = ({
  portfolio: { title, imageSrc, description, url, link },
}) => {
  return (
    <div className="h-screen w-full text-center bg-gradient-to-br from-cyan-600 via-teal-600 to-green-500 text-white">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-12 sm:pt-24 p-4 sm:p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-4 sm:my-8 text-white font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-2xl sm:text-4xl mt-2 mb-4 sm:mb-8 text-center sm:text-left font-bold text-white tracking-wider">
          {title}
        </h1>

        <div className="relative w-80 sm:w-96 h-52 sm:h-56 mx-auto overflow-hidden my-4 sm:my-8">
          <Image
            src={imageSrc}
            alt={url}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>

        <h2 className="text-center sm:text-left my-4 text-xl font-bold">
          Description
        </h2>

        <p className="text-sm sm:text-base">{description}</p>

        <div className="flex items-center justify-center gap-4 sm:gap-10">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-4 sm:my-8 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href={link}>
            <div className="group flex items-center justify-center my-4 sm:my-8 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              git repo
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

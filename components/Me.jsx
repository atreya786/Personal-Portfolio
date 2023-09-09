import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          me
        </h2>

        <div className="shadow-xl shadow-blue-400 my-8 px-8">
          <ul className="py-4 max-w-2xl mx-auto">
            <li>
              &#8226; 🚀 Motivated Full Stack Developer: This phrase highlights
              your enthusiasm and drive for your role as a Full Stack Developer.
              It conveys your eagerness to take on challenges and contribute
              actively to your field.
            </li>
            <br />
            <li>
              &#8226; 👨‍💻 1-year hands-on experience in web development: This
              indicates that you have practical, real-world experience in web
              development for one year. It suggests that you have gained a
              foundational understanding of web development concepts during this
              time.
            </li>
            <br />
            <li>
              &#8226; 🔧 Proficient in a wide array of technologies: [ HTML ,
              CSS , JavaScript , React.js , Node.js , MongoDB , Next.js]: You
              have expertise in a diverse set of technologies commonly used in
              web development. This includes the core front-end technologies
              (HTML, CSS, JavaScript) and back-end technologies (Node.js,
              MongoDB), as well as popular frameworks like React.js and Next.js.
            </li>
            <br />
            <li>
              &#8226; 💡 Known for adaptability and passion for industry trends:
              This emphasizes your ability to adapt to changing technologies and
              trends in the web development industry. Your passion for staying
              updated with the latest developments is seen as an asset.
            </li>
            <br />
            <li>
              &#8226; 🏆 Successful project contributions, delivering efficient
              and user-friendly web applications: You&apos;ve made valuable
              contributions to projects, and your work has resulted in the
              creation of efficient and user-friendly web applications. This
              showcases your ability to deliver practical solutions.
            </li>
            <br />
            <li>
              &#8226; 📚 Committed to continuous learning and staying
              up-to-date: You are dedicated to ongoing learning and keeping
              yourself informed about the latest advancements in web
              development. This attitude is essential in a field that evolves
              rapidly.
            </li>
            <br />
            <li>
              &#8226; 🌟 Strong foundation for innovation and technical
              expertise: You possess a solid base of knowledge and skills that
              allows you to innovate and excel in technical aspects of web
              development. This suggests that you&apos;re not only capable but also
              creative in your approach to problem-solving and development
              challenges.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/assets/resume.pdf" download>
            <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-600 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;

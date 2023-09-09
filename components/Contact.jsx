import Image from "next/image";
import React from "react";
import Link from "next/link";

import contactus from "../public/assets/contact-us.jpg";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8 sm:py-16 text-center sm:text-left">
        <h2 className="text-3xl sm:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 shadow-xl shadow-blue-400 bg-gray-900 text-white mt-4">
          <div className="w-full sm:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-4 text-sm sm:text-base">
              I am open to talk regarding freelancing or full-time
              opportunities. Feel free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-10">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <Link href="https://www.linkedin.com/in/atreya-chandan/">
                  <a>
                    <FaLinkedin size={25} />
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <Link href="https://twitter.com/At_re_ya">
                  <a>
                    <FaTwitter size={25} />
                  </a>
                </Link>
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <Link href="https://www.instagram.com/_.atreya._/">
                  <a>
                    <FaInstagram size={25} />
                  </a>
                </Link>
              </div>

              <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <Link href="https://github.com/atreya786">
                  <a>
                    <FaGithub size={25} />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Form section */}
          <div className="w-full sm:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/357378e6-dce8-451c-8d15-226c219dc76a"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm sm:text-base py-2 text-white font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-2 sm:p-3 flex focus:outline-none border-blue-400 bg-gray-800"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm sm:text-base py-2 text-white font-light">
                      phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      className="border-2 rounded-lg p-2 sm:p-3 flex focus:outline-none bg-gray-800 border-blue-400"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm sm:text-base py-2 text-white font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-2 sm:p-3 flex focus:outline-none bg-gray-800 border-blue-400"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm sm:text-base py-2 text-white font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      className="border-2 rounded-lg p-2 sm:p-3 flex focus:outline-none bg-gray-800 border-blue-400"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-4 sm:my-8 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase rounded-md tracking-wide cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

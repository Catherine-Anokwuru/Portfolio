import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../data";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-orange underline text-base underline-offset-8 decoration-orange decoration-solid decoration-4 text-center font-medium "
          : ""
      } hover:text-orange transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="fixed w-full h-[70px] flex flex-row justify-between items-center px-[7%] py-[5px] bg-dark-green  text-off-white shadow-lg shadow-white/10 z-50">
      <h2 className="text-2xl desktop:text-orange desktop:font-bold desktop:text-3xl font-semibold font-garamond">
        CA
      </h2>

      {/* small screen menu */}
      <div className="  w-[100%] h-[100%]">
        <button
          className="p-3 desktop:hidden rounded-full bg-orange border-off-white border-2 left-[85%]  sm:left-[73%] relative top-1.5"
          onClick={toggleLinks}
        >
          <FaBars className="h-5 w-5" />
        </button>

        {showLinks && (
          <aside className="links-container fixed right-0 top-0  h-[100vh] w-[80%] bg-off-white transition-[width] ease-in-out 1s desktop:hidden">
            <div className="">
              <button
                className="p-3 desktop:hidden text-orange left-[81%] sm:left-[73%] relative top-[11px]"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <FaTimes className="h-7 w-7" />
              </button>
              <ul className="block text-dark-green text-center py-[2rem]">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id} className="py-[1.5rem] ">
                      <a
                        href={url}
                        className="text-xl text-center font-medium font-opensans hover:text-orange"
                      >
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        )}
      </div>

      {/* large screen menu */}

      <div className="links-container lg:hidden ">
        <ul className="flex justify-between flex-row gap-7px transition duration-500ms ease-in-out all">
          {links.map((link) => {
            const { id, text } = link;
            return (
              <li key={id} className="py-[1.5rem] pl-[1rem] ">
                <Link
                  page={text}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

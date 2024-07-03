import React, { useState } from "react";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";
import Phone from "../icons/phone.tsx";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle = "text-xl leading-6 font-jost text-primary-200";

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-6 flex justify-between items-center">
      <a href="/">
        {" "}
        <Logo />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row items-center gap-6">
          <a href="tel:+33684064069" className=" underline flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
            {" "}
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26" r="26" fill="#CDA274" />
              <path
                d="M35.3445 33.4554C34.5429 32.6478 32.6013 31.4691 31.6593 30.9941C30.4326 30.3762 30.3317 30.3258 29.3675 31.0421C28.7243 31.5201 28.2967 31.9471 27.5441 31.7866C26.7914 31.6261 25.1558 30.721 23.7236 29.2935C22.2914 27.8659 21.3338 26.183 21.1727 25.4329C21.0117 24.6828 21.4458 24.2603 21.9194 23.6156C22.5867 22.707 22.5362 22.5556 21.9658 21.329C21.521 20.3749 20.308 18.4517 19.4972 17.6541C18.6299 16.7975 18.6299 16.9489 18.0711 17.1811C17.6162 17.3725 17.1797 17.6052 16.7672 17.8762C15.9594 18.4128 15.5112 18.8585 15.1977 19.5284C14.8842 20.1982 14.7433 21.7686 16.3623 24.7095C17.9813 27.6504 19.1171 29.1542 21.468 31.4984C23.819 33.8426 25.6268 35.1031 28.2695 36.5851C31.5387 38.416 32.7927 38.0591 33.4646 37.7461C34.1365 37.4331 34.5843 36.9889 35.1219 36.1813C35.3936 35.7695 35.6268 35.3335 35.8186 34.8789C36.0513 34.3222 36.2027 34.3222 35.3445 33.4554Z"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg> 06.84.06.40.69
          </a>
          <a href="/" className={linkStyle}>
            Accueil
          </a>
          {/* <a href="/about" className={linkStyle}>
            À propos de nous
          </a>
          <a href="/services" className={linkStyle}>
            Nos services
          </a> */}

          <a href="/contact" className={linkStyle}>
            Contactez-nous
          </a>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          <a href="/" className={linkStyle}>
            Accueil
          </a>
          <a href="/about" className={linkStyle}>
            À propos de nous
          </a>
          <a href="/services" className={linkStyle}>
            Nos services
          </a>
          <a href="/contact" className={linkStyle}>
            Contactez-nous
          </a>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuSettings } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";

export default function Navbar(props) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);

  let [manu, setManu] = useState("");
  let pathname = usePathname();

  useEffect(() => {
    setManu(pathname);

    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    }
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [setManu]);

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    >
      <div className="container relative">
        {navClass === "nav-light" ? (
          <Link className="logo" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/dark-logo.svg"
                className="l-dark"
                width={158}
                height={34}
                alt="worksbyte logo dark"
              />
              <Image
                src="/images/light-logo.svg"
                className="l-light"
                width={158}
                height={34}
                alt="worksbyte logo light"
              />
            </span>
            <Image
              src="/images/light-logo.svg"
              width={158}
              height={34}
              className="hidden dark:inline-block"
              alt="worksbyte"
            />
          </Link>
        ) : (
          <Link className="logo" href="/">
            <Image
              src="/images/dark-logo.svg"
              width={158}
              height={34}
              className="inline-block dark:hidden"
              alt=" worksbyte logo dark"
            />
            <Image
              src="/images/light-logo.svg"
              width={158}
              height={34}
              className="hidden dark:inline-block"
              alt=" worksbyte logo light"
            />
          </Link>
        )}

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className={`navigation-menu ${navClass} ${navJustify}`}>
            <li className={manu === "#" || "" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={manu === "/features" || "" ? "active" : ""}>
              <Link href="features">Features</Link>
            </li>

            <li className={manu === "/pricing" || "" ? "active" : ""}>
              <Link href="pricing">Pricing</Link>
            </li>

            <li className={manu === "/blog" || "" ? "active" : ""}>
              <Link href="blog">Blog</Link>
            </li>

            <li className={manu === "/aboutus" || "" ? "active" : ""}>
              <Link href="aboutus">About Us</Link>
            </li>
            <li className={manu === "/contactus" || "" ? "active" : ""}>
              <Link href="contactus" className="sub-menu-item">
                Contact Us
              </Link>
            </li>
            <li className={manu === "/auth-signup" || "" ? "active" : ""}>
              <Link href="auth-signup" className="sub-menu-item">
                Get Started
              </Link>
            </li>
            <li
              className={
                manu === "/https://brightbars.dgitra.com/login" || ""
                  ? "active"
                  : ""
              }
            >
              <Link
                href="https://brightbars.dgitra.com/login"
                className="sub-menu-item"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

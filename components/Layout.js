import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderContext } from "../context/header";
export const Header = ({ extendedHeader, setExtendedHeader }) => {
  const [hideHeader, setHideHeader] = useState(false);

  //  header = {
  //     exnteded : true/false,
  //     title : "TEXT".
  // }
  useEffect(() => {
    if (extendedHeader) {
      console.log(extendedHeader.isActive);
      setHideHeader(true);
      window.onscroll = () => {
        if (document.getElementById("title")) {
          let rect =
            document.getElementById("title") &&
            document.getElementById("title").getBoundingClientRect();
          if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          ) {
            setHideHeader(true);
          } else {
            setHideHeader(false);
          }
        }
      };
    }
  }, [extendedHeader]);
  return (
    <>
      {extendedHeader.isActive && (
        <div
          className="hero_container"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div className="u_center_xy">
            <h1
              className="hero_title title_font slide-in-bck-center"
              href="#"
              id="title"
            >
              <span className=" title_color">
                {extendedHeader.title ? extendedHeader.title : "Pokémons"}
              </span>
            </h1>
          </div>
        </div>
      )}
      {extendedHeader.isActive && extendedHeader.title == "PokéDemo" ? (
        !hideHeader && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 100,
            }}
          >
            <nav className="navbar navbar-light title_bg">
              <div className="container-fluid">
                <div className="mx-auto my-1">
                  <Link href="/">
                    <a className="navbar-brand title_font" href="#">
                      <span className=" title_color">PokéDemo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )
      ) : (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <nav className="navbar navbar-light title_bg">
            <div className="container-fluid">
              <div className="mx-auto my-1">
                <Link href="/">
                  <a className="navbar-brand title_font" href="#">
                    <span className=" title_color">PokéDemo</span>
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

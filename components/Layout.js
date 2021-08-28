import React, { useState, useEffect } from "react";
import { HeaderContext } from "../context/header";
export const Header = ({ size, setSize }) => {
  const [hideHeader, setHideHeader] = useState(false);
  const [extendedHeader, setExtendedHeader] = useState(true);
  //  header = {
  //     exnteded : true/false,
  //     title : "TEXT".
  // }
  useEffect(() => {
    if (extendedHeader) {
      setHideHeader(true);
      window.onscroll = () => {
        let rect = document.getElementById("title").getBoundingClientRect();
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
      };
    }
  }, [extendedHeader]);
  return (
    <HeaderContext.Provider value={{ extendedHeader, setExtendedHeader }}>
      <>
        {extendedHeader ? (
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
              <nav class="navbar navbar-light title_bg">
                <div class="container-fluid">
                  <div className="mx-auto my-1">
                    <a class="navbar-brand title_font" href="#">
                      <span className=" title_color">PokeDemo</span>
                    </a>
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
            <nav class="navbar navbar-light title_bg">
              <div class="container-fluid">
                <div className="mx-auto my-1">
                  <a class="navbar-brand title_font" href="#">
                    <span className=" title_color">PokeDemo</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
        {extendedHeader && (
          <div
            className="hero_container"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div className="u_center_xy">
              <h1 class=" title_font" href="#" id="title">
                <span className=" title_color">PokeDemo</span>
              </h1>
            </div>
          </div>
        )}
      </>
    </HeaderContext.Provider>
  );
};

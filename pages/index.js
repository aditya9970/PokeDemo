import Link from "next/link";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../context/header";

function HomePage() {
  const { setExtendedHeader } = useContext(HeaderContext);
  useEffect(() => {
    setExtendedHeader({ isActive: true, title: "PokéDemo" });
  }, []);
  return (
    <div className="gradient py-3">
      <div className="container p-0 ">
        <div className="white_glass  p-3  u_rounded_2X">
          <div
            className="row d-flex justify-content-around"
            style={{ margin: 0 }}
          >
            <div className="col-12">
              <h2 className="text-secondary"> Featured</h2>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <Link href="pokemons">
                <div className=" feature_card u_rounded_2X text-center">
                  <div
                    className="feature_icon_container"
                    style={{ position: "relative" }}
                  >
                    <img
                      src="/assets/png/002-avatar.png"
                      className="feature_icon"
                    />
                  </div>
                  <p className="feature_card_text fw-bold text-secondary">
                    Pokémons
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className=" feature_card u_rounded_2X text-center">
                <div
                  className="feature_icon_container"
                  style={{ position: "relative" }}
                >
                  <img
                    src="/assets/png/007-berries.png"
                    className="feature_icon"
                  />
                </div>
                <p className="feature_card_text fw-bold text-secondary">
                  Berries
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="feature_card u_rounded_2X text-center">
                <div
                  className="feature_icon_container"
                  style={{ position: "relative" }}
                >
                  <img src="/assets/png/003-egg.png" className="feature_icon" />
                </div>
                <p className="feature_card_text fw-bold text-secondary">
                  Items
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className=" feature_card u_rounded_2X text-center">
                <div
                  className="feature_icon_container"
                  style={{ position: "relative" }}
                >
                  <img src="/assets/png/001-map.png" className="feature_icon" />
                </div>
                <p className="feature_card_text fw-bold text-secondary">
                  Locations
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className=" feature_card u_rounded_2X text-center">
                <div
                  className="feature_icon_container"
                  style={{ position: "relative" }}
                >
                  <img
                    src="/assets/png/005-swords.png"
                    className="feature_icon"
                  />
                </div>
                <p className="feature_card_text fw-bold text-secondary">
                  Moves
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}

import { useState, useEffect, useContext } from "react";
import Router, { withRouter } from "next/router";
import { get } from "../../actions/pokemon";
import { HeaderContext } from "../../context/header";
import { capitalize } from "../../helpers/capitalize";
import { Accordion } from "react-bootstrap";
import { Collapse } from "bootstrap";
import { UncontrolledCollapse } from "reactstrap";

const Pokemon = ({ pokemon, query }) => {
  //   const [pokemon, setPokemon] = useState({});
  let n = pokemon.order + 1000;
  n = n.toString().slice(1);
  const { setExtendedHeader } = useContext(HeaderContext);
  useEffect(() => {
    setExtendedHeader({ isActive: false, title: " " });
  }, []);
  return (
    <div className="title_bg my-5 ">
      <div style={{ height: "100px" }}></div>
      <div className="container">
        <div className="row bg-light my-3  u_rounded_2X">
          <div className="col-12 col-md-6">
            <div className="p-2">
              <h3>
                {capitalize(pokemon.name)}{" "}
                <span className="text-secondary" style={{ fontSize: "75%" }}>
                  #{n}
                </span>
              </h3>
              <div
                className="mx-auto my-2"
                style={{ aspectRatio: "1 / 1", width: "50%" }}
              >
                <img
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    // height: "100px",
                  }}
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${n}.png`}
                />
              </div>
              <div>
                <h4>Types</h4>
                <div className="text-center my-1">
                  {pokemon.types.map((type) => (
                    <span className="badge bg-primary mx-1" key={type.slot}>
                      {capitalize(type.type.name)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="border">
              <div>
                <div>
                  <div id="toggler1" className="p-2 border-bottom border-top">
                    General Info
                  </div>
                  <UncontrolledCollapse toggler="#toggler1">
                    <div className="p-2">
                      <div className="row">
                        <div className="col-6">
                          <div className="fw-bold">Name:</div>
                        </div>
                        <div className="col-6">
                          <div> {capitalize(pokemon.name)}</div>
                        </div>
                        <div className="col-6">
                          <div className="fw-bold">Weight:</div>
                        </div>
                        <div className="col-6">
                          <div>{pokemon.weight}</div>
                        </div>
                        <div className="col-6">
                          <div className="fw-bold">Height:</div>
                        </div>
                        <div className="col-6">
                          <div>{pokemon.height}</div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <div id="toggler2" className="p-2 border-bottom border-top">
                    Stats
                  </div>
                  <UncontrolledCollapse toggler="#toggler2">
                    <div className="p-2">
                      <div className="row">
                        {pokemon.stats.map((stat) => {
                          return (
                            <>
                              <div className="col-12">
                                <div className="fw-bold">
                                  {capitalize(stat.stat.name)}
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="border  rounded w-100 my-1 ">
                                  <div
                                    className="bg-secondary rounded "
                                    style={{
                                      width: `${stat.base_stat}%`,
                                      height: "20px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <div id="toggler3" className="p-2 border-bottom border-top">
                    Moves
                  </div>
                  <UncontrolledCollapse toggler="#toggler3">
                    <div className="p-2">
                      {" "}
                      {pokemon.moves.map((move) => (
                        <div
                          className="m-1 p-2 border rounded"
                          style={{ display: "inline-block" }}
                        >
                          {move.move.name}
                        </div>
                      ))}
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Pokemon.getInitialProps = ({ query }) => {
  return get(query.name).then(({ data }) => {
    console.log(data);
    return { pokemon: data, query };
  });
};

export default withRouter(Pokemon);

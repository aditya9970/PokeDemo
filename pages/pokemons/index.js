import React, { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../context/header";
import { list } from "../../actions/pokemon";
import { ListWithPagination } from "../../components/Utility";
import { Card } from "../../components/Card";

const index = () => {
  const { extendedHeader, setExtendedHeader } = useContext(HeaderContext);
  // const {setLoading}
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    setExtendedHeader({ isActive: true, title: "Pokémons" });
  }, []);
  return (
    <div className="title_bg pb-5">
      <div className="container title_bg">
        <ListWithPagination
          listData={{ data: pokemons, set: setPokemons }}
          action={list}
        >
          <div className="row">
            {pokemons &&
              pokemons.map((pokemon, i) => {
                // return JSON.stringify(pokemon);
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={i}>
                    <Card
                      link={pokemon.url}
                      name={pokemon.name}
                      number={i}
                    ></Card>
                  </div>
                );
              })}
          </div>
        </ListWithPagination>
      </div>
    </div>
  );
};

export default index;

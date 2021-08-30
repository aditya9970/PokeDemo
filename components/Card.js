import React, { useEffect } from "react";
import Link from "next/link";

export const Card = ({ link, name, number }) => {
  let n = number + 1001;
  n = n.toString().slice(1);
  return (
    <Link href={`pokemons/${name}`}>
      <div className="pokemon_card pokemon_card_img_bg  u_rounded_2X white_glass slide-in-bck-center">
        <img
          className="pokemon_card_img u_rounded_2X"
          alt={`pokemon_img_${number}`}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${n}.png`}
        />
        <p className=" card-text text-center" style={{ fontSize: "120%" }}>
          {name}
        </p>
      </div>
    </Link>
  );
};

import React from "react";

// props v2

export default function Pokemon({
  pokemon,
  onClick,
  handleInput,
  display,
  input,
}) {
  return (
    <div className="pokemon">
      <img
        className={display ? "show" : "hiden"}
        src={pokemon.img}
        alt={pokemon.name}
      />
      <input onChange={handleInput} value={input} />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

// Props V1

// export default function Pokemon(props) {
//   console.log("PROPS", props);
//   return (
//     <div>
//       <p>El nombre del pokemon: {props.pokemonName}</p>
//     </div>
//   );
// }

// class V

// export default class Pokemon extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { onClick, pokemonName } = this.props;

//     return (
//       <div>
//         <button onClick={onClick}>Next Pokemon</button>
//         <p>El nombre del pokemon: {pokemonName}</p>
//       </div>
//     );
//   }
// }

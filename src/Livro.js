import React, { Component } from "react";
import ImagemLivro from "./ImagemLivro";
import "./Livro.css";

class Livro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="caixa-livros">
        {this.props.livros.map(livro => (
          <li className="livro">
            <ImagemLivro imagem={livro.imagem} />
            <h1>{livro.nomeLivro}</h1>
            <h4>{livro.nomeAutor}</h4>
          </li>
        ))}
      </ul>
    );
  }
}

export default Livro;

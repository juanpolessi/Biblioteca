import React, { Component } from "react";
import Livro from "./Livro";
import Pesquisa from  "./Pesquisa"

class Biblioteca extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div>
        <Pesquisa />
        <Livro livros={this.state.livros} />
      </div>
    );
  }
}

export default Biblioteca;

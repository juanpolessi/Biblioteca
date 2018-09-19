import React, { Component } from "react";
import Livro from "./Livro";
import Pesquisa from  "./Pesquisa"

import './Biblioteca.css'

class Biblioteca extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div className="biblioteca">
        <Pesquisa />
        <Livro />
      </div>
    );
  }
}

export default Biblioteca;

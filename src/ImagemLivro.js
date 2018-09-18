import React, { Component } from "react";
import "./Livro.css";

class ImagemLivro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img src={this.props.imagem} className="imagem-livro" />;
  }
}

export default ImagemLivro;

import React, { Component } from "react";
import "./ImagemLivro.css";

class ImagemLivro extends Component {
  
  render() {
    return (
      <div className="imagem">
        <img className="img-livro" src={this.props.image} alt="livro"/>
      </div>
    )
  }
}

export default ImagemLivro;

import React, { Component } from "react";
import ImagemLivro from './ImagemLivro'
import "./Livros.css";

class Livros extends Component {

  render() {
    return (
      <div className="caixa-livros">        
        { this.props.bookList.map(livro => (
          <div key={livro.id} className="livro">
            <ImagemLivro image={livro.image}/>
            <h1>{livro.nameBook}</h1>
            <label>{livro.nameAuth}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Livros


import React, { Component } from "react";
import Livros from "./components/books/Livros";
import Pesquisa from  "./components/search/Pesquisa"
import books from "./helpers/books"

import './Biblioteca.css'

class Biblioteca extends Component {

  state = {
    nameBook: ''
  }

  handleOnBooksChange = nameBook => this.setState({ nameBook })
  
  render() {
    const { nameBook } = this.state
    const livros = books
    const listaLivros = []

    livros.forEach(livro => {
      if(listaLivros.indexOf(livro.nameBook) === -1)
      listaLivros.push(livro.nameBook)
    });

    const showingBooks = nameBook.length === 0 
                              ? livros
                              : livros.filter(livro => livro.nameBook === nameBook)
    
    return (
      <div className="biblioteca">
        <Pesquisa 
          bookList={showingBooks} 
          onBookChange={this.handleOnBooksChange}/>
        <Livros bookList={showingBooks}/>
      </div>
    );
  }
}

export default Biblioteca;

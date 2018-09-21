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

    const showingBooks = nameBook.length === 0
                              ? livros
                              : livros.filter(livro => livro.nameBook.toUpperCase().indexOf(nameBook.toUpperCase()) !== -1)
    
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

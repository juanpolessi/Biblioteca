import React, { Component } from "react";
import Livro from "./Livro";
import "./Biblioteca.css";

class Biblioteca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livros: [
        {
          imagem:
            "https://nerdbreak.com.br/wp-content/uploads/2018/05/livros.jpg",
          nomeLivro: "Livro1",
          nomeAutor: "Autor1"
        },
        {
          imagem:
            "https://s3.pixers.pics/pixers/700/FO/43/95/40/32/700_FO43954032_393384fab1bb023988d91c037a1c0854.jpg",
          nomeLivro: "Livro2",
          nomeAutor: "Autor2"
        },
        {
          imagem:
            "https://www.sunoresearch.com.br/wp-content/uploads/2017/03/livros-que-todo-investidor-deveria-ler.png",
          nomeLivro: "Livro3",
          nomeAutor: "Autor3"
        },
        {
          imagem:
            "https://www.colegioweb.com.br/wp-content/uploads/2014/08/Livros.jpg",
          nomeLivro: "Livro4",
          nomeAutor: "Autor4"
        },
        {
          imagem:
            "https://www.colegioweb.com.br/wp-content/uploads/2014/08/Livros.jpg",
          nomeLivro: "Livro5",
          nomeAutor: "Autor5"
        },
        {
          imagem:
            "https://www.colegioweb.com.br/wp-content/uploads/2014/08/Livros.jpg",
          nomeLivro: "Livro6",
          nomeAutor: "Autor6"
        },
        {
          imagem:
            "https://www.colegioweb.com.br/wp-content/uploads/2014/08/Livros.jpg",
          nomeLivro: "Livro7",
          nomeAutor: "Autor7"
        },
        {
          imagem:
            "https://www.colegioweb.com.br/wp-content/uploads/2014/08/Livros.jpg",
          nomeLivro: "Livro8",
          nomeAutor: "Autor8"
        }
      ]
    };
  }

  render() {
    return (
      <div className="biblioteca">
        <Livro livros={this.state.livros} />
      </div>
    );
  }
}

export default Biblioteca;

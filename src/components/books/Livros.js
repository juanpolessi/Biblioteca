import React, { Component } from "react";
import ImagemLivro from './ImagemLivro'
import { Modal } from 'antd';
import "./Livros.css"; 

class Livros extends Component {

  state = { 
    visible: false,
    book: null,
   }

  showModal = (livroId) => {     
    this.setState({
      book: this.props.bookList.find(livro => livro.id === livroId),
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
    const { book } = this.state

    return (
      <div className="caixa-livros">
          { this.props.bookList.map(livro => (            
            <div key={livro.id} className="livro" onClick={() => { this.showModal(livro.id)}}>
              <ImagemLivro image={livro.image}/>
              <h1>{livro.nameBook}</h1>
              <label>{livro.nameAuth}</label>              
            </div>            
          ))}
          {
            !book
            ? ''
            : <Modal                
                title={book.nameBook}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel} >
                <p>{book.description}</p>
              </Modal>   
          }
      </div>
    );
  }
}

export default Livros


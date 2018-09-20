import React, { Component } from 'react'
import "./Pesquisa.css"

import biblioteca from '../../img/biblioteca.png'

class Pesquisa extends Component{

    constructor(props) {
        super(props);
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const livros = this.props.bookList
        livros.map(book => (
            book.nameBook === event.target.value
        ))
    }
    
    render(){
        return(
            <div className="pesquisa">
                <img src={biblioteca} alt="books"/>
                <input type="text" onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default Pesquisa
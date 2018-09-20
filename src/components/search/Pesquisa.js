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
                <div>
                    {/* <img src={biblioteca} alt="books"/> */}
                    <label className="fas fa-books"></label>
                </div>
                <div className="input-pesquisa">
                    <div>
                        <input type="text" onChange={this.handleInputChange}/>
                        <span className="fas fa-search"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pesquisa
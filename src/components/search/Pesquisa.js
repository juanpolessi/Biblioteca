import React, { Component } from 'react'
import "./Pesquisa.css"

import biblioteca from '../../img/biblioteca.png'

class Pesquisa extends Component{

    handleInputChange = (event) => {
        const { onBookChange } = this.props;
        onBookChange(event.target.value);
    }
    
    render(){
        return(
            <div className="pesquisa">
                <div className="logo-biblioteca">
                    <label>
                        <span>Books</span>
                    </label>
                    <i class="fas fa-book-reader"></i>                   
                </div>
                <div className="input-pesquisa">
                    <input type="text" onChange={this.handleInputChange}/>
                    <span className="fas fa-search"></span>
                </div>
            </div>
        )
    }
}

export default Pesquisa
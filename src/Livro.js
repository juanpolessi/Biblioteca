import React, { Component, Fragment } from "react";
import { Avatar, List } from "antd";
import { connect } from 'react-redux'
import { fetchBooks } from './ducks/Books'

import 'antd/dist/antd.css'
import "./Livro.css";
class Livro extends Component {
  
  componentDidMount() {
    const { callFetchBooks } = this.props
    callFetchBooks()
  }

  render() {
    const { booksData } = this.props
    return (
      <div className="caixa-livros">
        <Fragment>
          <List
            locale={{ emptyText: 'Nenhum Livro Encontrado'}}
            dataSource={booksData.books}
            loading={booksData.loading}
            renderItem={ books => (
              <List.Item>
                <List.Item.Meta
                  avatar= { <Avatar size="large" shape="square" src={books.image}/>} 
                  title= { books.nameBook }
                  description= {`${books.nameAuth}-${books.description}`}
                  />
              </List.Item>
            )}
            />
        </Fragment>
      </div>
    );
  }
}

function mapStateToProps({ booksData }){
  return { booksData }
}

function mapDispatchToProps(dispatch){
  return{
    callFetchBooks () {
      dispatch(fetchBooks())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Livro);

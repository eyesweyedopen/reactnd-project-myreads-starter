import React from 'react'
import { Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage.js'
import SearchPage from './pages/SearchPage.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  handleChangeShelf = (book, shelf) => {
    const bookId = book.id;
    
    BooksAPI.update(book, shelf)
      .then(BooksAPI.get(bookId)
      .then((updatedBook) => {
        this.setState({
          books: this.state.books.map((book) => {
            console.log(book.id === bookId);
            if (book.id === bookId) {
              return updatedBook;
            }
            return book
          })
        });
        console.log('done');
      }));
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          //search page
          <SearchPage books={this.state.books} changeShelf={this.handleChangeShelf}/>
        )}/>
        <Route exact path="/" render={() => (
          // library home page
          <MainPage books={this.state.books} onChangeShelf={this.handleChangeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp

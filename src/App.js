import React from 'react'
import { Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage.js'
import SearchPage from './pages/SearchPage.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {BooksAPI.getAll().then((books) => this.setState({books: books}))})
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

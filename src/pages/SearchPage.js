import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'
import Book from '../Book.js'

class SearchPage extends Component {
    state = {
        query: '',
        matchedBooks: [],
        noResults: false
    }

    updateQuery = (query) => {
        this.setState({ query: query});

        if (query) {
            BooksAPI.search(query.trim()).then((books) => {
                if (books.error) {
                    this.setState({noResults: true})
                } else {
                    this.setState({ matchedBooks: books.map((book) => {if (!book.shelf) {book.shelf = 'none'}; return book}), noResults: false });
                }
            })
        } else {
            this.setState({matchedBooks: []})
        }
    }

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(this.state.noResults) ? (
                            <div>
                                <p>No books matched your search</p>
                            </div>
                        ) : this.state.matchedBooks.map((book) => (
                            <Book key={book.id} info={book} onShelfChange={(book, shelf) => this.props.changeShelf(book, shelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage
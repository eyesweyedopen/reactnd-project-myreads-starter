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
    }

    componentDidUpdate() {
        const { query, matchedBooks } = this.state;

        if (query) {
            BooksAPI.search(query.trim()).then((books) => {
                this.setState({matchedBooks: books, noResults: false})
            }).catch(() => this.setState({noResults: true}));
        } else {
            BooksAPI.getAll().then((books) => this.setState({matchedBooks: books}));
        }

    }

    componentWillUnmount() {
        
    }


    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
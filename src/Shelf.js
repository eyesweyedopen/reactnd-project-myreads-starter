import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{Object.values(this.props.catObj).toString()}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books
                            .filter((book) => book.shelf === Object.keys(this.props.catObj).toString())
                            .map((book) => (
                            <li key={book.id}>
                                <Book info={book} onShelfChange={(book, shelf) => this.props.changeShelf(book, shelf)}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
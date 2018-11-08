import React, { Component } from 'react'
import Book from './Book.js'

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li>
                                <Book info={book} onChange={(shelf) => this.props.changeShelf(shelf)}/>
                            </li>
                        ))
                            
                        /* <li>
                            <Book/>
                        </li>
                        <li>
                            <Book/>
                        </li> */}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
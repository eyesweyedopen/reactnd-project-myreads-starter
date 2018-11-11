import React, { Component } from 'react'
import Shelf from '../Shelf.js'
import { Link } from 'react-router-dom'

class MainPage extends Component {
    render() {
        const category = [
            { currentlyReading: "Currently Reading" },
            { wantToRead: "Will Read" },
            { read: "Read" }
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {category.map((shelf) => (
                            <Shelf changeShelf={(book, shelf) => this.props.onChangeShelf(book, shelf)} key={Object.keys(shelf).toString()} catObj={shelf} books={this.props.books}/>
                        ))}}</div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage
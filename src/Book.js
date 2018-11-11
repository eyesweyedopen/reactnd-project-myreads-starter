import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger.js'

class Book extends Component {
    handleChange = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.info, shelf);
    }

    render() {
        let backgroundImage = (this.props.info.imageLinks && this.props.info.imageLinks.thumbnail) ? `url(${this.props.info.imageLinks.thumbnail})` : 'none';

        return (
        <div className="book" key={this.props.info.id}>
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImage }}></div>
                <BookshelfChanger curShelf={this.props.info.shelf} onShelfChange={this.handleChange}/>
            </div>
            <div className="book-title">{this.props.info.title}</div>
            <div className="book-authors">{this.props.info.authors && this.props.info.authors.join('; ')}</div>
        </div>
        )
    }
}

export default Book
import React, { Component } from 'react'

class Book extends Component {
    handleChange = (e) => {
        e.preventDefault()
        const shelf = e.target.value;
        console.log(shelf);
        this.props.onChange(shelf);
    }

    render() {
        return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.info.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select onClick={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{this.props.info.title}</div>
            <div className="book-authors">{this.props.info.authors.join('; ')}</div>
        </div>
        )
    }
}

export default Book
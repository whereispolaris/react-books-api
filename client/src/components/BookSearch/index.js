import React, { Component } from "react";
import Book from "../Book";
const axios = require('axios');

class BookSearch extends Component {
    state = {
        value: "",
        results: []
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const input = this.state.value
        axios.get("/api/books/" + input).then(response => {
            this.setState({ results: response.data.items });
        })

        // Reset form
        this.setState({ value: '' });
        this.setState({ results: [] });
    }

    handleSave = (title, author, description, image, link) => {

        let bookObject = {
            "title": title,
            "authors": author.join(","),
            "description": description,
            "image": image,
            "link": link
        }
        axios.post("/api/save-book", bookObject).then(function (response) {
            alert("Book Saved!");
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <div className="card" >
                    <div className="card-header">
                        Book Search
            </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="input"
                                    id="book"
                                    value={this.state.value}
                                    onChange={this.handleValueChange}
                                />
                            </div>
                            <button onClick={this.handleFormSubmit}>Search</button>
                        </form>
                    </div>
                </div>
                <hr />

                <div className="card">
                    <div className="card-header">
                        Results
                </div>
                    <div className="card-body">
                        {
                            this.state.results.map((book, index) => (
                                <Book
                                    isSaved={false}
                                    key={index}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    title={book.volumeInfo.title}
                                    description={book.volumeInfo.description}
                                    author={book.volumeInfo.authors}
                                    handleSaveDelete={() => this.handleSave(
                                        book.volumeInfo.title,
                                        book.volumeInfo.authors,
                                        book.volumeInfo.description,
                                        book.volumeInfo.imageLinks.thumbnail,
                                        book.volumeInfo.previewLink)}
                                />
                            ))
                        }


                    </div>
                </div>
            </div>
        )
    }



}

export default BookSearch;
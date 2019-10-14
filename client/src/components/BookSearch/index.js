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

    handleSave = event => {
        event.preventDefault();
        console.log("Save button is pressed");
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
                                    author={book.volumeInfo.author}
                                    handleSaveDelete={this.handleSave}
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
import React, { Component } from "react";
import Book from "../Book";
const axios = require('axios');


class BookSearch extends Component {

    state = {
        value: ""
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const input = this.state.value
        // axios.get("")
        // Reset form
        this.setState({ value: '' });
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
                        <Book
                            image={"http://books.google.com/books/content?id=FzVjBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
                            title={"The Alchemist"}
                            description={"A special 25th anniversary edition of the extraordinary international bestseller, including a new Foreword by Paulo Coelho. Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations. Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams."}
                            author={"Paulo Cohelo"}
                        />
                    </div>
                </div>
            </div>
        )
    }



}

export default BookSearch;
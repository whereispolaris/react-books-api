import React, { useState, useEffect } from 'react';
import Book from '../Book';
import axios from 'axios';

const Saved = (props) => {

    const [books, setBooks] = useState([]);

    const handleDelete = event => {
        console.log("Delete button was pressed")
    }

    useEffect(() => {
        axios.get("/api/books").then(response => {
            setBooks(response.data)
        });
    }, []);


    return (
        <div className="card">
            <div className="card-header">
                Results
            </div>
            <div className="card-body">
                {
                    books.map((book) => (
                        <Book
                            isSaved={true}
                            key={book._id}
                            image={book.image}
                            title={book.title}
                            description={book.description}
                            author={book.author}
                            handleSaveDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Saved;
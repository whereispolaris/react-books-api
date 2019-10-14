import React from 'react';
import './Book.css'

const Book = (props) => {

    return (
        <div className="card book-card">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src={props.image} className="card-img" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><strong>Author: {props.author}</strong></p>
                    </div>
                </div>
                <div className="col-md-1">
                    <button onClick={props.handleSaveDelete} type="button" className="btn btn-secondary">{props.isSaved ? "Delete Book" : "Save Book"}</button>
                    <button type="button" className="btn btn-dark">View Book</button>
                </div>
            </div>
        </div>
    )
}

export default Book;
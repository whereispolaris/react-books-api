import React from "react";

const BookResults = (props) => {
    return (
        <div className="card">
            <div class="card-header">
                Resutls
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>

    )
}

export default BookResults;
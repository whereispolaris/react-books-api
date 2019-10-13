import React from "react";

const BookSearch = () => {
    return (
        <div className="card">
            <div class="card-header">
                Book Search
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="book" id="book" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default BookSearch;
import React from 'react'
import axios from 'axios'

const DeleteBook = (props) => {

    function deleteBook(){
        axios.delete(`https://gentle-coast-98929.herokuapp.com/books/${props.bookId}`)
            .then(props.onDelete)
        // console.log(bookId.bookId)
    }

    return (
        <button onClick={deleteBook}>Delete</button>
    )
}

export default DeleteBook
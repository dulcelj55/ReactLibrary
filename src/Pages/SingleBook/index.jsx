import {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";


const SingleBook = ({books}) => {
    const [bookToShow, setBookToShow] = useState(null);
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const bookIdFromURL = params.get('bookId');
    console.log(bookIdFromURL);


    useEffect(() =>{
        let myBook = books.find((book) => book.id === bookIdFromURL)
        console.log(myBook)
        if (myBook !== undefined) {
            setBookToShow(myBook)
        }
    }, [books] )

  return (
    <div className="page-container">
        {bookToShow ?
        <>
        <h1>{bookToShow.title}</h1>
        <p>{bookToShow.author}</p>
        <p>{bookToShow.pages}</p>
        </>
        : 
        <></>}

    </div>
  )
}

export default SingleBook
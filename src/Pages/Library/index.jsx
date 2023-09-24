import { Link} from "react-router-dom";


const Library = ({ books }) => {
    
  return (
    <div className="page-container">
      <h1>Library</h1>
      {books.map((eachBook) => {
        return (
          <Link to={`/single_book/?bookId=${eachBook.id}`} key={JSON.stringify(eachBook)}>
            <div key={JSON.stringify(eachBook)}>{eachBook.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Library;

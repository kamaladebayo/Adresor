import './Archive.css'
const Search = ({location, date}) => {
    return ( 
        <div className="archive-row">
            <p>{location}</p>
            <small>{date}</small>
        </div>
     );
}
 
export default Search;

import "./style.css"

function Search(props) {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search by First Name" aria-label="Search"
            name="search"
            value={props.search}
            onChange={props.handleSearch}
            />
       </form>
    )
}

export default Search;
function Search(props) {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search by First Name" aria-label="Search"
            name="search"
            value={props.search}
            onChange={props.handleSearch}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
    )
}

export default Search;
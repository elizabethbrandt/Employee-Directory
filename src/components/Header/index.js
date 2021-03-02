import "./style.css"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Search or sort by first name</p>
            </div>
        </div>
    )
}

export default Header;
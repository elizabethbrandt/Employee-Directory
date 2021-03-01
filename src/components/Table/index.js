function Table(props) {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col" onClick={props.handleSort}>First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody>
                {props.users.length > 0 ? props.users.map(user => {
                    return (
                        <tr>
                            <th scope="row"><img src={user.picture.thumbnail} alt="Employee" /></th>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                }) : <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>}

            </tbody>
        </table>
    )
}


export default Table;
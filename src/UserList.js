
const UserList = (props) => {
    const { user_list, removeUser } = props;
    return <>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TableBody user_list={user_list} removeUser={removeUser} />
            </tbody>
        </table>
    </>
}

const TableBody = (props) => {
    const { user_list, removeUser } = props;
    const html_text = user_list.map((user, index) => {
        return (<tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>
                <button onClick={() => removeUser(index)} className="btn btn-danger">Remove</button>
            </td>
        </tr>);
    })

    return html_text;
}


export default UserList;
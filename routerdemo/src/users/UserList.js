export default function UserList() {
    return (
        <>
            <h2>Users</h2>
            <ul>
                <li>Show list of users by pulling it from the backend NodeJS Express server using GET /users API call. The list should be displayed in the form of table that will have header columns namely <b>Username</b>, <b>Email</b>, <b>Phone</b> and <b>Action</b>. The action column should have two buttons for editing and deleting respective user record.</li>
                <li>When edit action button for an existing record is clicked, a new Component (EditUser) should be rendered on the screen, and should show the current values of Username, Email, Phone pre-filled. The component should have save and cancel buttons. Upon clicking the save button, call the backend PUT HTTP /users method and pass the JSON data of the updated field(s) only along with the unique id value for the current record. The backend API currently supports updating only the age property, so that will need to be updated to accommodate the new attributes. When the user record is saved successfully, it should get navigate the UI back to UserList component.</li>
                <li>The delete action should call backend API endpoint /users with HTTP DELETE method, please pass the value of the _id field for the target record while calling it as /users/&lt;_id&gt;</li>
                <li>To see how to call API endpoints, you can refer to https://clouddevs.com/react/api-calls-with-axios-hook/</li>
            </ul>
        </>
    )
}
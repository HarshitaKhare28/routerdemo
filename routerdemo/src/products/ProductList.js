export default function ProductList() {
    return (
        <>
            <h2>Products</h2>
            <ul>
                <li>Show list of products by pulling it from the backend NodeJS Express server using GET /products API call. The list should be displayed in the form of table that will have header columns namely <b>Product Name</b>,<b>Price</b> and <b>Action</b>. The action column should have two buttons for editing and deleting respective product record.</li>
                <li>When edit action button for an existing record is clicked, a new Component (EditProduct) should be rendered on the screen, and should show the current values of Product Name,Price pre-filled. The component should have save and cancel buttons. Upon clicking the save button, call the backend PUT HTTP /products method and pass the JSON data of the updated field(s) only along with the unique id value for the current record. When the product record is saved successfully, it should get navigate the UI back to ProductList component.</li>
                <li>The delete action should call backend API endpoint /products with HTTP DELETE method, please pass the value of the _id field for the target record while calling it as /products/&lt;_id&gt;</li>
                <li>To see how to call API endpoints, you can refer to https://clouddevs.com/react/api-calls-with-axios-hook/</li>
            </ul>
        </>
    )
}
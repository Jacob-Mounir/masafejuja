function EditMenuForm() {
    return (
        <>
        <div className="form-container">
            <button className="add-img">Add img +</button>
            <div className="form-column">
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description" />
            </div>
            <div className="form-column2">
                <input type="text" placeholder="Price" />
                <button>Add to menu</button>
            </div>
        </div>
        </>
    )
}

export default EditMenuForm
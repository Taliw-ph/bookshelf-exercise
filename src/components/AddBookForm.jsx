'use client';
import { useState } from 'react';

const AddBookForm = ({ setBooks }) => {
    const [title, setTitle] = useState('Domain Driven Design');

    const onTitleChange = (e) => setTitle(e.target.value);

    const onBookSubmit = (e) => {
        if (title === '') return;
        e.preventDefault();
        setBooks((prev) => [...prev, { title }]);
        setTitle('');
    };

    return (
        <div>
            <h1>ADD TO COLLECTION</h1>
            <form onSubmit={onBookSubmit}>
                <div>
                    <label>Title </label>
                    <input value={title} onChange={onTitleChange} />
                    <button type="submit">Add</button>
                    <br />
                    {title}
                </div>
            </form>
        </div>
    );
};

export default AddBookForm;

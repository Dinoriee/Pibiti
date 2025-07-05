import React, { useState, useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';

function ReviewForm() {
    const { handleAddReview } = useContext(ReviewContext);

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;

        handleAddReview({name, text});

        setName('');
        setText('');
    };

    return(
        <form onSubmit={handleSubmit} className='review-form'>
            <input
                type='text'
                placeholder='Nama Anda'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea placeholder='Tambahkan Review Anda disini...' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button type='submit'>Kirim Review</button>
        </form>
    );
}

export default ReviewForm;
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
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 max-w-[600px] m- m-auto'>
            <input type='text' className='w-full py-3 pl-8 border border-gray-300 rounded-lg text-base font-sans min-h-[3rem]' placeholder='Nama Anda' value={name} onChange={(e) => setName(e.target.value)}/>
            <textarea className='w-full py-3 pl-8 border border-gray-300 rounded-lg text-base font-sans min-h-[3rem] min-w-[30rem]' placeholder='Tambahkan Review Anda disini...' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button type='submit' className='py-[0.8rem] px-8 rounded-lg border-none bg-[#0d6efd] text-white text-base font-bold transition-colors duration-200 transition-colors duration-200 hover:bg-[#0b5ed7] '>Kirim Review</button>
        </form>
    );
}

export default ReviewForm;
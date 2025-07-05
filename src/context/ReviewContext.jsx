import React, { useState, useEffect, createContext, Children } from 'react';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem('reviews'));
        setReviews(storedReviews || []);
    }, []);

    const handleAddReview = (review) => {
        const newReview = {id: Date.now(), ...review};
        const updatedReviews = [newReview, ...reviews];

        setReviews(updatedReviews);
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    };

    const value = { reviews, handleAddReview };

    return(
        <ReviewContext.Provider value={value}>
            {children}
        </ReviewContext.Provider>
    );
};
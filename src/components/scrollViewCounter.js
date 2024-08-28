import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScrollViewCounter = () => {

    const [viewCount, setViewCount] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);
                setViewCount((prevCount) => prevCount + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    useEffect(() => {
        if (hasScrolled) {
            axios.post('https://your-backend-api.com/increment-view', { viewCount })
                .then(response => {
                    console.log('View count updated:', response.data);
                })
                .catch(error => {
                    console.error('Error updating view count:', error);
                });
        }
    }, [hasScrolled, viewCount]);

    return (
        <div>
            <h1>View Count: {viewCount}</h1>

        </div>
    );
};

export default ScrollViewCounter;

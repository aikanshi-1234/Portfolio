import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScrollViewCounter = () => {
    // Step 1: Set up state for the view count
    const [viewCount, setViewCount] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // Step 2: Detect scroll events
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true); // To prevent multiple increments
                setViewCount((prevCount) => prevCount + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup: Remove event listener when the component unmounts
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

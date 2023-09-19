import { useEffect } from 'react';

export const useSnapFunction = (contentSelector) => {
    useEffect(() => {
        const content = document.querySelector(contentSelector);

        if (!content) return;
        
        let isMouseDown = false; 
        let startX;
        let scrollLeft;

        const onMouseDown = (e) => {
            isMouseDown = true;
            startX = e.pageX - content.offsetLeft;
            scrollLeft = content.scrollLeft;
        };

        const onMouseLeave = () => {
            isMouseDown = false;
        };

        const onMouseUp = () => {
            isMouseDown = false;
        };

        const onMouseMove = (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - content.offsetLeft;
            const walk = (x - startX) * 3;
            content.scrollLeft = scrollLeft - walk;
        };

        content.addEventListener('mousedown', onMouseDown);
        content.addEventListener('mouseleave', onMouseLeave);
        content.addEventListener('mouseup', onMouseUp);
        content.addEventListener('mousemove', onMouseMove);

        return () => {
            content.removeEventListener('mousedown', onMouseDown);
            content.removeEventListener('mouseleave', onMouseLeave);
            content.removeEventListener('mouseup', onMouseUp);
            content.removeEventListener('mousemove', onMouseMove);
        };
    }, [contentSelector]); 
};

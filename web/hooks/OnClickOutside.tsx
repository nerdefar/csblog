import { useState, useEffect } from 'react';

export default function useMouseClickRegistration() {
    const [mouseIsDown, setMouseDown] = useState(false);
    const [mouseInitialXPosition, setMouseInitialXPosition] = useState(0);
    const [mouseMovePercentage, setMouseMovePercentage] = useState(0);
    const [previousPercentage, setPrevPercentage] = useState(0);

    const handleMouseDown = (event: MouseEvent) => {
        setMouseInitialXPosition(event.clientX);
        setMouseDown(true);
    }

    const handleTouchStart = (event: TouchEvent) => {
        setMouseInitialXPosition(event.touches[0].clientX);
        setMouseDown(true);
    }   

    const handleMouseUp = (event: MouseEvent) => {
        setPrevPercentage(mouseMovePercentage);
        setMouseInitialXPosition(0);
        setMouseDown(false);
    }

    const handleTouchEnd = (event: TouchEvent) => {
        setPrevPercentage(mouseMovePercentage);
        setMouseInitialXPosition(0);
        setMouseDown(false);
    }

    const handleMouseMove = (event: MouseEvent) => {
        if(mouseInitialXPosition === 0) return;
        if(mouseIsDown){
            const mouseDelta = mouseInitialXPosition - event.clientX;
            const maxDelta = window.innerWidth / 1;
            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentage = Math.max(Math.min(previousPercentage + percentage, 0), -100);
            setMouseMovePercentage(nextPercentage);
        }
    }

    const handleTouchMove = (event: TouchEvent) => {
        if(mouseInitialXPosition === 0) return;
        if(mouseIsDown){
            const mouseDelta = mouseInitialXPosition - event.touches[0].clientX;
            const maxDelta = window.innerWidth / 1;
            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentage = Math.max(Math.min(previousPercentage + percentage, 0), -100);
            setMouseMovePercentage(nextPercentage);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown, true);
        document.addEventListener('mousemove', handleMouseMove, true);
        document.addEventListener('mouseup', handleMouseUp, true);
        document.addEventListener('touchstart', handleTouchStart, true);
        document.addEventListener('touchmove', handleTouchMove, true);
        document.addEventListener('touchend', handleTouchEnd, true);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown, true);
            document.removeEventListener('mousemove', handleMouseMove, true);
            document.removeEventListener('mouseup', handleMouseUp, true);
            document.removeEventListener('touchstart', handleTouchStart, true);
            document.removeEventListener('touchmove', handleTouchMove, true);
            document.removeEventListener('touchend', handleTouchEnd, true);
        };
    });

    return { mouseMovePercentage, previousPercentage };
}
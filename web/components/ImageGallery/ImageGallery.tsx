"use client"
import React from 'react';
import useMouseClickRegistration from '../../hooks/OnClickOutside';
import ImageGalleryItem from './ImageGalleryItem';
import { useEffect } from 'react';

const ImageGallery = () => {
  const { mouseMovePercentage, previousPercentage } = useMouseClickRegistration();
  const divRef = React.useRef<HTMLDivElement>(null);
  useEffect( () => {
    divRef.current?.animate({
      transform: `translate(${mouseMovePercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
    },
    [mouseMovePercentage]);
  
  return(
    <div ref={divRef} className="image-gallery-track"> 
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1604658768979-ca1ef26b2324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1579683571996-f3482b0907c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1524060814534-c8540185978d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
      <ImageGalleryItem mouseMovePercentage={mouseMovePercentage} width={500} height={500} alt="" 
      src="https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
    </div>
  )
}

export default ImageGallery;
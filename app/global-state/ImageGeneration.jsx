"use client"
import { createContext, useState } from 'react';
import config from '../../config';

export const ImageGenOptions = createContext()

const ImageGeneration = ({children}) => {
    const [imagesQuantity, setImagesQuantity] = useState(1)
    const [aspectRatio, setAspectRatio] = useState(config.aspect_ratios[1])
    const [hdr, setHdr] = useState(50)
    const [upscaleIntensity, setUpscaleIntensity] = useState(50)
    const [isNegPrompt, setIsNegPrompt] = useState(false)
    const [prompt, setPrompt] = useState()
    const [negativePrompt, setNegativePrompt] = useState()
    const [imageUrls, setImageUrls] = useState(['https://images.unsplash.com/photo-1710415273421-4d19cc02b839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'])
    const [loadingImages, setLoadingImages] = useState(false) // this is a loading state for the image carousel
    const [upscaleImgs, setUpscaleImgs] = useState([])
  return (
    <ImageGenOptions.Provider value={{
      imagesQuantity, 
      setImagesQuantity, 
      aspectRatio, 
      setAspectRatio, 
      hdr, 
      setHdr, 
      upscaleIntensity, 
      setUpscaleIntensity, 
      isNegPrompt, 
      setIsNegPrompt, 
      prompt, 
      setPrompt, 
      negativePrompt, 
      setNegativePrompt, 
      imageUrls, 
      setImageUrls, 
      loadingImages, 
      setLoadingImages, 
      upscaleImgs, 
      setUpscaleImgs}}>{children}</ImageGenOptions.Provider>
  )
}



export default ImageGeneration
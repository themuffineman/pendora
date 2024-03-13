"use client"
import { createContext, useState } from 'react';
import config from '../../config';

const ImageGenOptions = createContext()

const ImageGeneration = ({children}) => {
    const [imagesQuantity, setImagesQuantity] = useState(1)
    const [aspectRatio, setAspectRatio] = useState(config.aspect_ratios[1])
    const [hdr, setHdr] = useState(50)
    const [upscaleIntensity, setUpscaleIntensity] = useState(50)
    const [isNegPrompt, setIsNegPrompt] = useState(false)
    const [prompt, setPrompt] = useState()
    const [negativePrompt, setNegativePrompt] = useState()
  return (
    <ImageGenOptions.Provider value={{imagesQuantity, setImagesQuantity, aspectRatio, setAspectRatio, hdr, setHdr, upscaleIntensity, setUpscaleIntensity, isNegPrompt, setIsNegPrompt, prompt, setPrompt, negativePrompt, setNegativePrompt }}>{children}</ImageGenOptions.Provider>
  )
}

export default ImageGeneration
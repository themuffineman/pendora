"use client"
import React, { useContext } from 'react'
import { ImageGenOptions } from './ImageGeneration'

const {imagesQuantity, aspectRatio, hdr, upscaleIntensity, prompt, negativePrompt,setImageUrls } = useContext(ImageGenOptions)


const imageFetchBody = {
    quantity: imagesQuantity,
    width: aspectRatio.width,
    height: aspectRatio.height,
    prompt: prompt,
    negativePrompt: negativePrompt
}

const imageUpscaleBody = {
    hdr: hdr,
    upscaleIntensity: upscaleIntensity
}

export const generateImage = async ()=>{
    try {
        const imagesJSON = await fetch('/api/create-prediction', {method: "POST", body: JSON.stringify(imageFetchBody)})
        const images = await imagesJSON.json()
        setImageUrls(images.urls)
    } catch (error) {
        console.log(error)
    }
}
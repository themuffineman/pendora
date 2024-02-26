import img1 from '../public/hero-images/img1.webp'

export const freePlan = {
    name: 'Free Plan',
    price: '0',
    featuresIncluded: ['3 free image generations per day'],
    featuresNotIncluded: ['Background Remover', 'Da Vinci Canvas', 'Image Upscaler', '4k Image Export', 'Access to community prompts'],
    icon: img1
}

export const daVinciPlan = {
    name: 'Da Vinci Plan',
    price: '10',
    featuresIncluded: ['400 image generations per month', 'Da Vinci Canvas', 'Image Upscaler', '4k Image Export', 'Background Remover', 'Access to community prompts'] ,
    icon: img1
}
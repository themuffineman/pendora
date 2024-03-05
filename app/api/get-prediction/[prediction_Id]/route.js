export const GET = async ({params}) =>{

    const intervalId = setInterval(getPrediction, 3000)

    async function getPrediction(){
        try {
            const prediction = await fetch(`https://api.replicate.com/v1/predictions/${params.prediction_Id}`, {method: 'GET', headers: {'Authorization': `Token ${process.env.REPLICATE_TOKEN}`,'Content-Type': 'application/json'}})
            const predictionJSON = await prediction.json()
    
            if (predictionJSON.status === 'succeeded'){
                clearInterval(intervalId)
                return Response.json({output: predictionJSON.output[0]})
            }
            else if(predictionJSON.status === 'failed'){
                console.log('Failed to get prediction')
                throw new Error('Failed to get prediction')
            } 
        } catch (error) {
           return Response.json({error}, {status: 500}) 
        }
        
    }

}
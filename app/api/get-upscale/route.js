
export const POST = async (req) =>{
    
    const id = await req.json()
    console.log('Prediction ID is:', id)
    let isSuccess = false
    let polls = 0

    while (!isSuccess){
        try{
            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve()
                },3000)
            })
            const prediction = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {method: 'GET', headers: {'Authorization': `Token ${process.env.REPLICATE_TOKEN}`,'Content-Type': 'application/json'}})
            polls++
            const predictionJSON = await prediction.json()
            console.log('This is the upscale JSON:', predictionJSON)
            if(predictionJSON.status === "succeeded"){

                console.log('✔ Success on getting upscale, we polled:', polls)
                isSuccess = true
                console.log('The prediction output from get upscale:', predictionJSON.output)

                return Response.json({output: predictionJSON.output}, {status: 200})                
            }else if (polls >= 80){
                throw new Error('Maximum Polls Reached')
            }else if (predictionJSON.status === "failed"){
                throw new Error(predictionJSON.error? predictionJSON.error : "Failed to get prediction")
            }
        }catch(error){
            return Response.error({error: `Error Getting Upscale: ${error}`}, {status: 500})
        }
    }
        
}
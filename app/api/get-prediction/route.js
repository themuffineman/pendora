
export const POST = async (req) =>{
    
    const id = await req.json()
    let isSuccess = false
    let polls = 0

    while (!isSuccess){
        try{

            await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve()
                },3000)
            })

            const predictionJSON = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {method: 'GET', headers: {'Authorization': `Token ${process.env.REPLICATE_TOKEN}`,'Content-Type': 'application/json'}})
            polls++
            const prediction = await predictionJSON.json()

            if(prediction.status === "succeeded"){

                console.log('✔ Success on getting prediction, we polled:', polls)
                isSuccess = true
                console.log('The prediction output from get prediction:', prediction.output )

                return Response.json({output: prediction.output}, {status: 200})
            }
            else if (polls >= 30){
                throw new Error('Maximum Polls Reached')
            }
            else if (prediction.status === "failed"){
                throw new Error(prediction.error? prediction.error : "Failed to get prediction")
            }
        }catch(error){
            return Response.json({error: `Error Getting Prediction: ${error}`}, {status: 500})
        }
    }
        
}
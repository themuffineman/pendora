
export const POST = async (req) =>{
  const fetchData = await req.json()

  console.log("This is the fetch data:", fetchData)

  const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "version": "0a1710e0187b01a255302738ca0158ff02a22f4638679533e111082f9dd1b615",
        "input": {
          "width": fetchData.width,
          "height": fetchData.height,
          "prompt": fetchData.prompt,
          "scheduler": "K_EULER",
          "num_outputs": fetchData.quantity,
          "guidance_scale": 2,
          "apply_watermark": true,
          "negative_prompt": "worst quality",
          // "prompt_strength": 0.8,
          "num_inference_steps": 7
        }
      })
  };
    
    
    try {
      const prediction = await fetch('https://api.replicate.com/v1/predictions', requestOptions)
      const predictionJSON = await prediction.json()
      console.log("This is the predictionJSON", predictionJSON)
      const output = await fetch('/api/get-prediction', {method:"POST", body: JSON.stringify(predictionJSON.id)})
      const outputJSON = await output.json()
      console.log('The prediction output from create prediction:', outputJSON )

      return Response.json({urls: outputJSON.output}, {status: 201})   
    } catch (error) {
      return Response.json({error: `❌Error on creating prediction: ${error}`}, {status: 500})
    }



}
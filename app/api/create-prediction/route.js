
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
        "version": "06775cd262843edbde5abab958abdbb65a0a6b58ca301c9fd78fa55c775fc019",
        "input": {
          "width": fetchData.width,
          "height": fetchData.height,
          "prompt": fetchData.prompt,
          "scheduler": "KarrasDPM",
          "num_outputs": fetchData.quantity,
          "guidance_scale": 7.5,
          "apply_watermark": true,
          "negative_prompt": "worst quality",
          "prompt_strength": 0.8,
          "num_inference_steps": 20
        }
      })
  };
    
    
    try {
      const prediction = await fetch('https://api.replicate.com/v1/predictions', requestOptions)
      const predictionJSON = await prediction.json()
      console.log("This is the predictionJSON", predictionJSON)
      const output = await fetch(`http://localhost:3000/api/get-prediction/`, {method:"POST", body: JSON.stringify(predictionJSON.id)})
      const outputJSON = output.json()

      return Response.json({urls: outputJSON}, {status: 201})   
    } catch (error) {
      return Response.json({error: `❌Error on creating prediction: ${error}`}, {status: 500})
    }



}
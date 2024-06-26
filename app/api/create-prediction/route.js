
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
          "negative_prompt": fetchData.negativePrompt,
          "prompt_strength": 0.8,
          "num_inference_steps": 20
        }
      })
  };
    
    
    try {
      const predictionJSON = await fetch('https://api.replicate.com/v1/predictions', requestOptions)
      const prediction = await predictionJSON.json()
      console.log("This is the prediction Object", prediction)
      const outputJSON = await fetch('http://localhost:3000/api/get-prediction', {method:"POST", body: JSON.stringify(prediction.id)})
      const output = await outputJSON.json()
      console.log('The prediction output from create prediction:', output)

      return Response.json({urls: output.output}, {status: 201})   
    } catch (error) {
      return Response.json({message: `❌Error on creating prediction: ${error}`}, {status: 500})
    }



}

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
          "version": "507ddf6f977a7e30e46c0daefd30de7d563c72322f9e4cf7cbac52ef0f667b13",
          "input": {
            "hdr": fetchData.hdr,
            "image": fetchData.imgUrl,
            "steps": 20,
            "prompt": fetchData.prompt,
            "scheduler": "DDIM",
            "creativity": fetchData.intensity,
            "guess_mode": false,
            "resolution": "original",
            "resemblance": 0.75,
            "guidance_scale": 7,
            "negative_prompt": "worst quality"
          }
        })
    };
      
      
      try {
        const prediction = await fetch('https://api.replicate.com/v1/predictions', requestOptions)
        const predictionJSON = await prediction.json()
        console.log("This is the predictionJSON", predictionJSON)
        const output = await fetch(`http://localhost:3000/api/get-upscale/`, {method:"POST", body: JSON.stringify(predictionJSON.id)})
        const outputJSON = await output.json()
        console.log('The prediction output from create prediction:', outputJSON )
        
        return Response.json({url: outputJSON}, {status: 201})   
      } catch (error) {
        return Response.json({error: `❌Error on creating upscale: ${error}`}, {status: 500})
      }
  
  
  
  }
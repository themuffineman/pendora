export default async function GET(){
    try {
        userData = await fetch('/some db')
        return new Response.json({userData: userData}, {status:200})
    } catch (error) {
        
    }
}
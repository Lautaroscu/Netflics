import { env } from "../getEnv"
export async function getTrendingMovies() {
    try {
        console.log(env.BASE_URL)
        const promise = await fetch(`${env.BASE_URL}/trending/movie/week`, {
            headers : {
                'Content-Type' : 'application/json' ,
                'Authorization' : `Bearer ${env.API_KEY}`
            }
        })
        return await promise.json()
    }catch(e){
        throw new Error(e)
    }
}
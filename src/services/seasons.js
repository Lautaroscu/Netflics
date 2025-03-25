import { env } from "../getEnv"

export async function getSeasonDetails(seasonNumber , serieId){
    try {
        const promise= await fetch(`${env.BASE_URL}/tv/${serieId}/season/${seasonNumber}` , {
            headers : {
                'Content-Type' : 'application/json' ,
                'Authorization' : `Bearer ${env.API_KEY}`
            }
        })
        return await promise.json();
    }catch(er) {
        throw new Error(er)
    }
    

}
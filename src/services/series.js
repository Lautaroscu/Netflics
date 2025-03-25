import { env } from "../getEnv"

export async function getTopRatedSeries() {
 try {
        const promise = await fetch(`${env.BASE_URL}/tv/top_rated`, {
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
export async function getPopularSeries() {
    try {
           const promise = await fetch(`${env.BASE_URL}/tv/popular`, {
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
   export async function getAiringTodaySeries() {
    try {
           const promise = await fetch(`${env.BASE_URL}/tv/airing_today`, {
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
   export async function getSerieById(id) {
    try {
           const promise = await fetch(`${env.BASE_URL}/tv/${id}`, {
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
   

   
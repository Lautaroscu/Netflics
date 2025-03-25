import { env } from "../getEnv"
export async function getTrendingMovies() {
    try {
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

export async function getTopRatedMovies() {
 try {
        const promise = await fetch(`${env.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`, {
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
export async function getUpcomingMovies() {
    try {
           const promise = await fetch(`${env.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2025-04-01&release_date.lte=2025-12-12`, {
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
   export async function getMovieById(id) {
    try {
           const promise = await fetch(`${env.BASE_URL}/movie/${id}` ,{
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
   export async function getRecommendations(id) {
    try {
        const promise = await fetch(`${env.BASE_URL}/movie/${id}/recommendations` ,{
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
   
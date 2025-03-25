import CC from "./src/assets/images/cc.jpg"
import MM from  "/src/assets/images/mm.jpg" 
import ELC from "/src/assets/images/elc.jpg" 
import ST from "/src/assets/images/ST.jpg" 

export const estrenos = [
    {
        image : CC ,
        description : "Tras la repentina muerte del Sumo Pontífice, el Cardenal Lawrence es designado para elegir al nuevo Papa. Ganadora de un Oscar ®." ,
        duration : "2 h" ,
        release_date : "2025" ,
        genres : ["Drama , Suspenso"] ,
        elenco : "Ralph Fiennes Stanley Tucci John Lithgow Isabella Rossellini" ,
        director : "Edward Berger"
    } ,
    {
        image : MM,
        description : "Multipremiada serie del productor y guionista de Los Soprano. Explora la era dorada de la publicidad en la década del 60 en Nueva York." ,
        duration : "7 temporadas" ,
        release_date : "2007" ,
        genres : ["Drama"] ,
        elenco : "Jon Hamm, Elisabeth Moss, Vincent Kartheise, Christina Hendricks, January Jones" ,
        director : "Alan Taylor" , 
        olderThan : 13

    },
    {
        image : ELC ,
        description : "Mamá Cora, el entrañable personaje de Antonio Gasalla, se enfrenta al dilema familiar sobre quién se hará cargo de ella." ,
        duration : "1 h 34 min" ,
        release_date : "1985 " ,
        genres : ["Comedia"] ,
        elenco : "Antonio Gasalla, China Zorrilla, Luis Brandoni, Betiana Blum" ,
        director : "Alejandro Doria" , 
        olderThan : 13

    },
    {
        image : ST,
        description : "Las cosas se complican para Jessie cuando descubre que el chico con quien pasó la noche en la víspera de año nuevo es una estrella de cine." ,
        duration : "2 temporadas" ,
        release_date : "2021 " ,
        genres : ["Comedia"] ,
        elenco : "Rose Matafeo, Nikesh Patel, Emma Sidi, Al Roberts" ,
        director : " Rose Matafeo" ,
        olderThan : 13
    }
]
/* eslint-disable */
import {api} from "./interceptor/api"

export default{ 
    getList(type,listType,pageNumber){
        return api.get("/"+type+"/"+listType+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+pageNumber) 
    },
    getPopularPart(){
        return api.get("/trending/all/day?api_key=196ce0b01013c413b6103f24b696e9c3")
    },
    getMovie(movieId){
        return api.get("/movie/"+movieId+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")
    },
    getSeries(seriesId){
        return api.get("/tv/"+seriesId+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")  
    },
    getMovieActors(movieId){
        return api.get("/movie/"+movieId+"/credits?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")
    },
    getSeriesActors(seriesId){
        return api.get("/tv/"+seriesId+"/credits?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")
    },
    getSearchResult(queryString,pageNumber){
        return api.get("/search/multi?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&query="+queryString+"&page="+pageNumber+"&include_adult=false")
    },
    getFilteredList(type,sortBy,genres,keyWord,pageNumber,fromScore,toScore){
        let sort=""
        if(sortBy==="Azalan popülerlik")
        {
            sort="popularity.asc"
        }
        else if(sortBy==="Artan popülerlik")
        {
            sort="popularity.desc"
        }
        else if(sortBy==="Artan oy")
        {
            sort="vote_average.asc"
        }
        else if(sortBy==="Azalan oy")
        {
            sort="vote_average.desc"
        }
        else if(sortBy==="Artan çıkış tarihi")
        {
            sort="relaese_date.asc"
        }
        else if(sortBy==="Azalan çıkış tarihi")
        {
            sort="relaese_date.desc"
        }
        
        return api.get("/discover/"+type+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&sort_by="+sort+"&include_adult=false&include_video=false&page="+pageNumber+"&vote_average.gte="+fromScore+"&vote_average.lte="+toScore+"&with_keywords="+keyWord+"&with_watch_monetization_types=flatrate&with_genres="+genres[0])
    }
}
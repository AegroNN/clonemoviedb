/* eslint-disable */
import {api} from "./interceptor/api"

export default{ 
    getList(type,listType,pageNumber){
        return api.get("/"+type+"/"+listType+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&page="+pageNumber) 
    },
    getPopularPart(){
        return api.get("trending/all/day?api_key=196ce0b01013c413b6103f24b696e9c3")
    },
    getMovie(movieId){
        return api.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")
    },
    getActors(movieId){
        return api.get("https://api.themoviedb.org/3/movie/"+movieId+"/credits?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US")
    },
    getSearchResult(queryString,pageNumber){
        return api.get("https://api.themoviedb.org/3/search/multi?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&query="+queryString+"&page="+pageNumber+"&include_adult=false")
    }
}
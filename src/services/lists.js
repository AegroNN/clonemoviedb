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
    getFilteredList(type,sortBy,releaseDateFirst,releaseDateLast,voteAverageFirst,voteAverageLast,genres,keyWord,pageNumber){
            return api.get("/discover/"+type+"?api_key=196ce0b01013c413b6103f24b696e9c3&language=en-US&sort_by="+sortBy+"&include_adult=false&include_video=false&page="+pageNumber+"&primary_release_date.gte="+releaseDateFirst+"&primary_release_date.lte="+releaseDateLast+"&vote_average.gte="+voteAverageFirst+"&vote_average.lte="+voteAverageLast+"&with_genres="+genres+"&with_keywords="+keyWord+"&with_watch_monetization_types=flatrate")
    }
}
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY;
const baseUrl = import.meta.env.VITE_APP_BASEURL;
// const baseImg = process.env.VITE_APP_BASEIMG;


export const getMovie = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie?.data?.results
}

export const getSimilar = async (id: any) => {
    const similar = await axios.get(`${baseUrl}/movie/${id}/similar?api_key=${apiKey}`)
    return similar?.data?.results
}

export const searchMovie = async (q:any) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search?.data?.results
}

export const getMovieId = async (id: string | undefined) => {
    try {
        if (id) {
            const movieDetail = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
            return movieDetail?.data
        } 
    } catch (error) {
        alert("Error Get Movie Detail")
    }
}

export const getUpcoming =async () => {
    const upcoming = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
    return upcoming?.data?.results
}

export const getNowPlaying =async () => {
    const nowPlaying = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`)
    return nowPlaying?.data?.results
}

export const getVideos = async (id: any) => {
    const video = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`)
    return video?.data?.results
}

export const getCredits = async (id: any) => {
    const credits = await axios.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
    return credits?.data?.cast
}

export const getCreditsDetail = async (id: any) => {
    const credits = await axios.get(`${baseUrl}/credit/${id}?api_key=${apiKey}`)
    return credits?.data
}

export const getPersonDetail = async (id: any) => {
    const person = await axios.get(`${baseUrl}/person/${id}?api_key=${apiKey}`)
    return person?.data
}

export const getPersonMovie = async (id: any) => {
    const person = await axios.get(`${baseUrl}/person/${id}/combined_credits?api_key=${apiKey}`)
    return person?.data
}

export const getPeopleMovie = async (id: any) => {
    const person = await axios.get(`${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`)
    return person?.data
}

export const getSocmed = async (id: any) => {
    const socmed = await axios.get(`${baseUrl}/person/${id}/external_ids?api_key=${apiKey}`)
    return socmed?.data
}

export const getFilter = async (page?: any, sort?: any, genre?: any, language?: any ) => {
    const queryParams = `${page ?? ''}${sort ?? ''}${genre ?? ''}${language ?? ''}`;
    const filter = await axios.get(`${baseUrl}/discover/movie?${queryParams}&api_key=${apiKey}`)
    return filter?.data?.results
}

export const getSort = async (sort: any, query:any) => {
    const sortby = await axios.get(`${baseUrl}/discover/movie?${sort}&${query}&api_key=${apiKey}`)
    return sortby?.data?.results
}

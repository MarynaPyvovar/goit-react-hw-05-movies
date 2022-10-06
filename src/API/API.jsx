import axios from "axios";

const API_KEY = '1cf55529396093bd7165d94d7485d292';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingData() {
    const data = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
    return data.data.results
}

export async function fetchSearchData(query) {
    const data = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    return data.data.results
}

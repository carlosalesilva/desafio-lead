const API_KEY = '09673750951467d3f2598953b9c6216d';
const API_BASE = 'https://api.themoviedb.org/3';

//função auxiliar que da um fatch na url 
//que quero pegar pegar o json como resultado e retornar o json

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json();
}

export default{
    getHomeList: async() => {
        return[
            {
                slug:'trending',
                title:'Mais Populares',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated??language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comédia',
                 items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'terror',
                 items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
        ]; 
    }
}
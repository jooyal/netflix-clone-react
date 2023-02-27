import { API_KEY } from "./constants/constants"

const Netflix_Originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
const ComedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
const HorrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`
const ActionMovies = `discover/movie?api_key=${API_KEY}&with_genres=28`
const RomanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`
const Documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`

export {Netflix_Originals, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries}
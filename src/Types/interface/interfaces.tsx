import { Cast, DetailsModel, Movie, Serie } from "../Models/models";



export interface Action {
    type     : string,
    payload? : any,
};

export interface MoviesRState {
    CinemaFilms   : Movie[]
    PopularFilms  : Movie[]
    UpcomingFilms : Movie[]
};

export interface ActiveRState {
    ActiveMovie?         : Movie
    ActiveCast           : Cast[]
    ActiveSimilar        : Movie[]
    ActiveRecommend      : Movie[]
    ActiveDetails?       : DetailsModel
    ActiveVideos?        : Video[] 
}

export interface iActiveSerieRState {
    ActiveSerie?              : Serie
    ActiveSeerieCast          : Cast[]
    ActiveSerieSimilar        : Movie[]
    ActiveSerieRecommend      : Movie[]
    ActiveSerieDetailsSerie?  : DetailsModel
    ActiveSerieVideos?        : Video[] 
}

export interface ModalRState {
    ModalOpen  : boolean
    ModalVideo : string
}

export interface iLoadRState {
    Loading : boolean
}

export interface iSearchRState {
    Results : Movie[]
}

export interface VideosModel {
    id:      number;
    results: Video[];
}

export interface Video {
    iso_639_1:    string;
    iso_3166_1:   string;
    name:         string;
    key:          string;
    published_at: Date;
    site:         string;
    size:         number;
    type:         string;
    official:     boolean;
    id:           string;
}

export interface iSeriesRState {
    SeriesOnAir     : Serie[]
    SeriesPopular   : Serie[]
    SeriesTop       : Serie[]
}


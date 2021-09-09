
// ============
// Movies Model
// ============

export interface MovieModel {
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface CreditsModel {
    id:   number;
    cast: Cast[];
    crew: Cast[];
}

export interface Movie {
    adult             : boolean;
    backdrop_path     : string;
    genre_ids         : number[];
    id                : number;
    original_language : string;
    original_title    : string;
    overview          : string;
    popularity        : number;
    poster_path       : string;
    release_date      : string;
    title             : string;
    video             : boolean;
    vote_average      : number;
    vote_count        : number;
}
export interface DetailsModel {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
}

interface Genre {
    id:   number;
    name: string;
}

interface BelongsToCollection {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}



//===========
// Tv Models
//===========

export interface TvModel {
    page:          number;
    results:       Serie[];
    total_pages:   number;
    total_results: number;
}

export interface Serie {
    backdrop_path:     null | string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    vote_average:      number;
    vote_count:        number;
}

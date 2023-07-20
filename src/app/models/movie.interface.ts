export interface MovieResult{

    page: number;
    results: Movie[];

}

export interface Movie{

    backdrop_path: string;
    id: number;
    original_title: string;
    poster_path: string;
    title: string;
    release_date: string;

}


export interface SingleMovie{
    
    id: number;
    backdrop_path: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    production_companies: Production[];
    price:number;
}

export interface Production{

    logo_path: string;
    name: string;
}

export interface MovieCast{
    
    id: number;
    cast: Cast[];
}

export interface Cast{

    name: string;
    profile_path: string;
}

export interface MovieTrailer{

    id: number;
    results: Trailer[];
}

export interface Trailer{

    site: string;
    key: string;
    id: string;
}


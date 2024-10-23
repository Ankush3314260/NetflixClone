export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  // MoviesResponse Interface
 export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }

 export interface Actor {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    known_for: Movie[];
  }
  
 export interface MovieResults {
    page: number;
    results: Actor[];
    total_pages: number,
    total_results: number
  }
interface IConfig {
  public: {
    movie_url: string;
    access_token: string;
    api_key: string;
  };
}
interface IPoster {
  id: number;
  src: string;
  name: string;
  path: string;
}

interface IMovieItems {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_language: string;
  media_type: string;
  genre_ids: number[];
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

interface IMovieList {
  page: number;
  results: IMovieItems[];
  total_pages?: number;
  total_results?: number;
}

interface IMovieSearch {
  page: number;
  results: IMovieItems[];
  total_pages: number;
  total_results: number;
}
interface ISearchQuery {
  query: string;
  language: string;
  page: number;
  region: string;
  include_adult: true | false;
  primary_release_year: string;
  year: string;
}
interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path?: any;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

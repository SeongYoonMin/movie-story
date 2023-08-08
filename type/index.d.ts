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
  adault: boolean;
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
  results: {
    id: number;
    name: string;
  }[];
  total_pages: number;
  total_results: 22;
}
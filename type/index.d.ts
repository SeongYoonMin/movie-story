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
  genre_ids: any;
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

interface IMovieList {
  page: number;
  results: IMovieItems[];
  total_pages: number;
  total_results: number;
}
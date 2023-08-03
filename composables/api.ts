// ISO 3166-1 ko-KR 한국

export default async (url: string, method: any) => {
  return useFetch<IMovieList>(url, {
    baseURL: "https://api.themoviedb.org/3",
    method: method,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTYyNjM5MTMzZTE2ODlhN2VjZTMxYzQxNDBmMTYwNyIsInN1YiI6IjY0ODFjZjc4ZTI3MjYwMDE0N2I4ODhmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNGh_Ij7dWQ1We97kKo_oymFHNQBsOLw1Pei8mX6338",
    },
    retry: 2,
    onRequest: (context) => {},
    onRequestError({ request, options, error }) {
      console.log("onRequestError::");
    },
    onResponse({ request, response }) {
      console.log("onResponse::");
    },
    onResponseError({ request, response, options }) {
      console.log("onresponseError::");
    },
  });
};

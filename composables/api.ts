// ISO 3166-1 ko-KR 한국

export default async (url: string, method: any) => {
  const config = useRuntimeConfig();
  return useFetch<IMovieList | any>(url, {
    baseURL: config.public.movie_url,
    method: method,
    headers: {
      accept: "application/json",
      Authorization: config.public.access_token,
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

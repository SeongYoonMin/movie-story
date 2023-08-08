// ISO 3166-1 ko-KR 한국
import { UseFetchOptions } from "nuxt/app";
import { KeyOfRes, KeysOf } from "nuxt/dist/app/composables/asyncData";

import { FetchContext, FetchOptions, FetchResponse } from "ohmyfetch";

// Request 전 Header 처리
async function onRequest({ options }: FetchContext<any>) {
  const config = useRuntimeConfig();
  options.headers = {
    accept: "application/json",
    Authorization: "Bearer " + config.public.access_token,
  };
}

// Response에러 일 시 에러에 따라서 retry 혹은 예외처리
async function onResponseError({
  response,
  options,
}: FetchContext<any> & { response: FetchResponse<ResponseType> }) {
  console.log("=========ERROR=========");
  console.log("ERROR_CODE ====", response._data.code);
  console.log("ERROR_MESSAGE ====", response._data.responseMessage);
}

async function onResponse({ response }: { response: FetchResponse<any> }) {}
async function onRequestError({
  context,
  error,
}: FetchContext & {
  context: FetchContext;
  error: Error;
}) {
  console.log("onRequestError::", error.message);
}

// Type 지정을 통해 return할때 (url:string, options?: FetchOptions) 형식 유지

export const useApi = <T>(url: string, options?: FetchOptions) => {
  const config = useRuntimeConfig();

  return $fetch<T>(url, {
    baseURL: config.public.movie_url,
    retry: 2,
    ...options,
    onRequest,
    onRequestError,
    onResponse,
    onResponseError,
  });
};
export const useApiFetch = <T>(
  url: string,
  options?: UseFetchOptions<
    T extends void ? unknown : T,
    (res: T extends void ? unknown : T) => T extends void ? unknown : T,
    KeyOfRes<(res: T extends void ? unknown : T) => T extends void ? unknown : T>
  >
) => {
  const config = useRuntimeConfig();
  return useFetch<T>(url, {
    baseURL: config.public.movie_url,
    credentials: "include",
    ...options,
    onRequest,
    onResponseError,
  });
};

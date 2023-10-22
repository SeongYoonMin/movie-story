# MOVIE STORY

MovieStory는 TMDB(TheMovieDataBase)의 API를 이용하여 영화 추천, 소개, 검색, 조회가 가능한 사이트입니다.

.env_example을 통하여 .env에 적어야할 필요한 정보들을 기입해두었습니다.
.env의 경우 local에서 실행시키기위해 .env.local로 기입해주시면됩니다.

Vue기반의 Nuxt(SSR)로 제작하였습니다.

MOVIE와 DRAMA 두가지 카테고리로 분류하여 관리하였고, 검색부분은 컴포넌트로써 사용할 수 있도록 만들어보았습니다.

실행은 npm run dev 로 실행시킬 시 .env.local 에서 값을 받아 nuxt.config.ts에 RuntimeConfig로 저장하여 이후 페이지에서 작동합니다.
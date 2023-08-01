interface INavigation {
  id: number;
  name: string;
  href: string;
}

export const navigation = ref<INavigation[]>([
  {
    id: 0,
    name: "시리즈",
    href: "series",
  },
  {
    id: 1,
    name: "개봉/오픈 예정",
    href: "open",
  },
  {
    id: 2,
    name: "드라마",
    href: "drama",
  },
  {
    id: 3,
    name: "영화",
    href: "movie",
  },
  {
    id: 4,
    name: "예능",
    href: "variety",
  },
  {
    id: 5,
    name: "애니메이션",
    href: "ani",
  },
  {
    id: 6,
    name: "내가 찜한 콘텐츠",
    href: "like",
  },
]);
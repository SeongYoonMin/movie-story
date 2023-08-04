interface INavigation {
  id: number;
  name: string;
  href: string;
}

export const navigation = ref<INavigation[]>([
  {
    id: 0,
    name: "개봉/오픈 예정",
    href: "open",
  },
  {
    id: 1,
    name: "드라마",
    href: "drama",
  },
  {
    id: 2,
    name: "영화",
    href: "movie",
  },
  {
    id: 3,
    name: "내가 찜한 콘텐츠",
    href: "like",
  },
]);
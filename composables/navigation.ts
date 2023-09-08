interface INavigation {
  id: number;
  name: string;
  href: string;
}

export const navigation = ref<INavigation[]>([
  {
    id: 0,
    name: "개봉/오픈 예정",
    href: "/open",
  },
  {
    id: 1,
    name: "드라마",
    href: "/drama",
  },
  {
    id: 2,
    name: "영화",
    href: "/movie",
  },
]);
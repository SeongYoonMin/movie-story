interface IInputRegion {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export const regions = ref<IInputRegion[]>([
  {
    iso_3166_1: "AD",
    english_name: "Andorra",
    native_name: "안도라",
  },
  {
    iso_3166_1: "AE",
    english_name: "United Arab Emirates",
    native_name: "아랍에미리트 연합",
  },
  {
    iso_3166_1: "AG",
    english_name: "Antigua and Barbuda",
    native_name: "앤티가 바부다",
  },
  {
    iso_3166_1: "AL",
    english_name: "Albania",
    native_name: "알바니아",
  },
  {
    iso_3166_1: "AO",
    english_name: "Angola",
    native_name: "앙골라",
  },
  {
    iso_3166_1: "AR",
    english_name: "Argentina",
    native_name: "아르헨티나",
  },
  {
    iso_3166_1: "AT",
    english_name: "Austria",
    native_name: "오스트리아",
  },
  {
    iso_3166_1: "AU",
    english_name: "Australia",
    native_name: "호주",
  },
  {
    iso_3166_1: "AZ",
    english_name: "Azerbaijan",
    native_name: "아제르바이잔",
  },
  {
    iso_3166_1: "BA",
    english_name: "Bosnia and Herzegovina",
    native_name: "보스니아 헤르체고비나",
  },
  {
    iso_3166_1: "BB",
    english_name: "Barbados",
    native_name: "바베이도스",
  },
  {
    iso_3166_1: "BE",
    english_name: "Belgium",
    native_name: "벨기에",
  },
  {
    iso_3166_1: "BF",
    english_name: "Burkina Faso",
    native_name: "부르키나파소",
  },
  {
    iso_3166_1: "BG",
    english_name: "Bulgaria",
    native_name: "불가리아",
  },
  {
    iso_3166_1: "BH",
    english_name: "Bahrain",
    native_name: "바레인",
  },
  {
    iso_3166_1: "BM",
    english_name: "Bermuda",
    native_name: "버뮤다",
  },
  {
    iso_3166_1: "BO",
    english_name: "Bolivia",
    native_name: "볼리비아",
  },
  {
    iso_3166_1: "BR",
    english_name: "Brazil",
    native_name: "브라질",
  },
  {
    iso_3166_1: "BS",
    english_name: "Bahamas",
    native_name: "바하마",
  },
  {
    iso_3166_1: "BY",
    english_name: "Belarus",
    native_name: "벨라루스",
  },
  {
    iso_3166_1: "BZ",
    english_name: "Belize",
    native_name: "벨리즈",
  },
  {
    iso_3166_1: "CA",
    english_name: "Canada",
    native_name: "캐나다",
  },
  {
    iso_3166_1: "CD",
    english_name: "Congo",
    native_name: "콩고-킨샤사",
  },
  {
    iso_3166_1: "CH",
    english_name: "Switzerland",
    native_name: "스위스",
  },
  {
    iso_3166_1: "CI",
    english_name: "Cote D'Ivoire",
    native_name: "코트디부아르",
  },
  {
    iso_3166_1: "CL",
    english_name: "Chile",
    native_name: "칠레",
  },
  {
    iso_3166_1: "CM",
    english_name: "Cameroon",
    native_name: "카메룬",
  },
  {
    iso_3166_1: "CO",
    english_name: "Colombia",
    native_name: "콜롬비아",
  },
  {
    iso_3166_1: "CR",
    english_name: "Costa Rica",
    native_name: "코스타리카",
  },
  {
    iso_3166_1: "CU",
    english_name: "Cuba",
    native_name: "쿠바",
  },
  {
    iso_3166_1: "CV",
    english_name: "Cape Verde",
    native_name: "까뽀베르데",
  },
  {
    iso_3166_1: "CY",
    english_name: "Cyprus",
    native_name: "사이프러스",
  },
  {
    iso_3166_1: "CZ",
    english_name: "Czech Republic",
    native_name: "체코",
  },
  {
    iso_3166_1: "DE",
    english_name: "Germany",
    native_name: "독일",
  },
  {
    iso_3166_1: "DK",
    english_name: "Denmark",
    native_name: "덴마크",
  },
  {
    iso_3166_1: "DO",
    english_name: "Dominican Republic",
    native_name: "도미니카 공화국",
  },
  {
    iso_3166_1: "DZ",
    english_name: "Algeria",
    native_name: "알제리",
  },
  {
    iso_3166_1: "EC",
    english_name: "Ecuador",
    native_name: "에콰도르",
  },
  {
    iso_3166_1: "EE",
    english_name: "Estonia",
    native_name: "에스토니아",
  },
  {
    iso_3166_1: "EG",
    english_name: "Egypt",
    native_name: "이집트",
  },
  {
    iso_3166_1: "ES",
    english_name: "Spain",
    native_name: "스페인",
  },
  {
    iso_3166_1: "FI",
    english_name: "Finland",
    native_name: "핀란드",
  },
  {
    iso_3166_1: "FJ",
    english_name: "Fiji",
    native_name: "피지",
  },
  {
    iso_3166_1: "FR",
    english_name: "France",
    native_name: "프랑스",
  },
  {
    iso_3166_1: "GB",
    english_name: "United Kingdom",
    native_name: "영국",
  },
  {
    iso_3166_1: "GF",
    english_name: "French Guiana",
    native_name: "프랑스령 기아나",
  },
  {
    iso_3166_1: "GH",
    english_name: "Ghana",
    native_name: "가나",
  },
  {
    iso_3166_1: "GI",
    english_name: "Gibraltar",
    native_name: "지브롤터",
  },
  {
    iso_3166_1: "GP",
    english_name: "Guadaloupe",
    native_name: "과들루프",
  },
  {
    iso_3166_1: "GQ",
    english_name: "Equatorial Guinea",
    native_name: "적도 기니",
  },
  {
    iso_3166_1: "GR",
    english_name: "Greece",
    native_name: "그리스",
  },
  {
    iso_3166_1: "GT",
    english_name: "Guatemala",
    native_name: "과테말라",
  },
  {
    iso_3166_1: "GY",
    english_name: "Guyana",
    native_name: "가이아나",
  },
  {
    iso_3166_1: "HK",
    english_name: "Hong Kong",
    native_name: "홍콩, 중국 특별행정구",
  },
  {
    iso_3166_1: "HN",
    english_name: "Honduras",
    native_name: "온두라스",
  },
  {
    iso_3166_1: "HR",
    english_name: "Croatia",
    native_name: "크로아티아",
  },
  {
    iso_3166_1: "HU",
    english_name: "Hungary",
    native_name: "헝가리",
  },
  {
    iso_3166_1: "ID",
    english_name: "Indonesia",
    native_name: "인도네시아",
  },
  {
    iso_3166_1: "IE",
    english_name: "Ireland",
    native_name: "아일랜드",
  },
  {
    iso_3166_1: "IL",
    english_name: "Israel",
    native_name: "이스라엘",
  },
  {
    iso_3166_1: "IN",
    english_name: "India",
    native_name: "인도",
  },
  {
    iso_3166_1: "IQ",
    english_name: "Iraq",
    native_name: "이라크",
  },
  {
    iso_3166_1: "IS",
    english_name: "Iceland",
    native_name: "아이슬란드",
  },
  {
    iso_3166_1: "IT",
    english_name: "Italy",
    native_name: "이탈리아",
  },
  {
    iso_3166_1: "JM",
    english_name: "Jamaica",
    native_name: "자메이카",
  },
  {
    iso_3166_1: "JO",
    english_name: "Jordan",
    native_name: "요르단",
  },
  {
    iso_3166_1: "JP",
    english_name: "Japan",
    native_name: "일본",
  },
  {
    iso_3166_1: "KE",
    english_name: "Kenya",
    native_name: "케냐",
  },
  {
    iso_3166_1: "KR",
    english_name: "South Korea",
    native_name: "대한민국",
  },
  {
    iso_3166_1: "KW",
    english_name: "Kuwait",
    native_name: "쿠웨이트",
  },
  {
    iso_3166_1: "LB",
    english_name: "Lebanon",
    native_name: "레바논",
  },
  {
    iso_3166_1: "LC",
    english_name: "St. Lucia",
    native_name: "세인트루시아",
  },
  {
    iso_3166_1: "LI",
    english_name: "Liechtenstein",
    native_name: "리히텐슈타인",
  },
  {
    iso_3166_1: "LT",
    english_name: "Lithuania",
    native_name: "리투아니아",
  },
  {
    iso_3166_1: "LU",
    english_name: "Luxembourg",
    native_name: "룩셈부르크",
  },
  {
    iso_3166_1: "LV",
    english_name: "Latvia",
    native_name: "라트비아",
  },
  {
    iso_3166_1: "LY",
    english_name: "Libyan Arab Jamahiriya",
    native_name: "리비아",
  },
  {
    iso_3166_1: "MA",
    english_name: "Morocco",
    native_name: "모로코",
  },
  {
    iso_3166_1: "MC",
    english_name: "Monaco",
    native_name: "모나코",
  },
  {
    iso_3166_1: "MD",
    english_name: "Moldova",
    native_name: "몰도바",
  },
  {
    iso_3166_1: "ME",
    english_name: "Montenegro",
    native_name: "몬테네그로",
  },
  {
    iso_3166_1: "MG",
    english_name: "Madagascar",
    native_name: "마다가스카르",
  },
  {
    iso_3166_1: "MK",
    english_name: "Macedonia",
    native_name: "마케도니아",
  },
  {
    iso_3166_1: "ML",
    english_name: "Mali",
    native_name: "말리",
  },
  {
    iso_3166_1: "MT",
    english_name: "Malta",
    native_name: "몰타",
  },
  {
    iso_3166_1: "MU",
    english_name: "Mauritius",
    native_name: "모리셔스",
  },
  {
    iso_3166_1: "MW",
    english_name: "Malawi",
    native_name: "말라위",
  },
  {
    iso_3166_1: "MX",
    english_name: "Mexico",
    native_name: "멕시코",
  },
  {
    iso_3166_1: "MY",
    english_name: "Malaysia",
    native_name: "말레이시아",
  },
  {
    iso_3166_1: "MZ",
    english_name: "Mozambique",
    native_name: "모잠비크",
  },
  {
    iso_3166_1: "NE",
    english_name: "Niger",
    native_name: "니제르",
  },
  {
    iso_3166_1: "NG",
    english_name: "Nigeria",
    native_name: "나이지리아",
  },
  {
    iso_3166_1: "NI",
    english_name: "Nicaragua",
    native_name: "니카라과",
  },
  {
    iso_3166_1: "NL",
    english_name: "Netherlands",
    native_name: "네덜란드",
  },
  {
    iso_3166_1: "NO",
    english_name: "Norway",
    native_name: "노르웨이",
  },
  {
    iso_3166_1: "NZ",
    english_name: "New Zealand",
    native_name: "뉴질랜드",
  },
  {
    iso_3166_1: "OM",
    english_name: "Oman",
    native_name: "오만",
  },
  {
    iso_3166_1: "PA",
    english_name: "Panama",
    native_name: "파나마",
  },
  {
    iso_3166_1: "PE",
    english_name: "Peru",
    native_name: "페루",
  },
  {
    iso_3166_1: "PF",
    english_name: "French Polynesia",
    native_name: "프랑스령 폴리네시아",
  },
  {
    iso_3166_1: "PG",
    english_name: "Papua New Guinea",
    native_name: "파푸아뉴기니",
  },
  {
    iso_3166_1: "PH",
    english_name: "Philippines",
    native_name: "필리핀",
  },
  {
    iso_3166_1: "PK",
    english_name: "Pakistan",
    native_name: "파키스탄",
  },
  {
    iso_3166_1: "PL",
    english_name: "Poland",
    native_name: "폴란드",
  },
  {
    iso_3166_1: "PS",
    english_name: "Palestinian Territory",
    native_name: "팔레스타인 지구",
  },
  {
    iso_3166_1: "PT",
    english_name: "Portugal",
    native_name: "포르투갈",
  },
  {
    iso_3166_1: "PY",
    english_name: "Paraguay",
    native_name: "파라과이",
  },
  {
    iso_3166_1: "QA",
    english_name: "Qatar",
    native_name: "카타르",
  },
  {
    iso_3166_1: "RO",
    english_name: "Romania",
    native_name: "루마니아",
  },
  {
    iso_3166_1: "RS",
    english_name: "Serbia",
    native_name: "세르비아",
  },
  {
    iso_3166_1: "RU",
    english_name: "Russia",
    native_name: "러시아",
  },
  {
    iso_3166_1: "SA",
    english_name: "Saudi Arabia",
    native_name: "사우디아라비아",
  },
  {
    iso_3166_1: "SC",
    english_name: "Seychelles",
    native_name: "쉐이쉘",
  },
  {
    iso_3166_1: "SE",
    english_name: "Sweden",
    native_name: "스웨덴",
  },
  {
    iso_3166_1: "SG",
    english_name: "Singapore",
    native_name: "싱가포르",
  },
  {
    iso_3166_1: "SI",
    english_name: "Slovenia",
    native_name: "슬로베니아",
  },
  {
    iso_3166_1: "SK",
    english_name: "Slovakia",
    native_name: "슬로바키아",
  },
  {
    iso_3166_1: "SM",
    english_name: "San Marino",
    native_name: "산마리노",
  },
  {
    iso_3166_1: "SN",
    english_name: "Senegal",
    native_name: "세네갈",
  },
  {
    iso_3166_1: "SV",
    english_name: "El Salvador",
    native_name: "엘살바도르",
  },
  {
    iso_3166_1: "TC",
    english_name: "Turks and Caicos Islands",
    native_name: "터크스케이커스제도",
  },
  {
    iso_3166_1: "TD",
    english_name: "Chad",
    native_name: "차드",
  },
  {
    iso_3166_1: "TH",
    english_name: "Thailand",
    native_name: "태국",
  },
  {
    iso_3166_1: "TN",
    english_name: "Tunisia",
    native_name: "튀니지",
  },
  {
    iso_3166_1: "TR",
    english_name: "Turkey",
    native_name: "터키",
  },
  {
    iso_3166_1: "TT",
    english_name: "Trinidad and Tobago",
    native_name: "트리니다드 토바고",
  },
  {
    iso_3166_1: "TW",
    english_name: "Taiwan",
    native_name: "대만",
  },
  {
    iso_3166_1: "TZ",
    english_name: "Tanzania",
    native_name: "탄자니아",
  },
  {
    iso_3166_1: "UA",
    english_name: "Ukraine",
    native_name: "우크라이나",
  },
  {
    iso_3166_1: "UG",
    english_name: "Uganda",
    native_name: "우간다",
  },
  {
    iso_3166_1: "US",
    english_name: "United States of America",
    native_name: "미국",
  },
  {
    iso_3166_1: "UY",
    english_name: "Uruguay",
    native_name: "우루과이",
  },
  {
    iso_3166_1: "VA",
    english_name: "Holy See",
    native_name: "바티칸",
  },
  {
    iso_3166_1: "VE",
    english_name: "Venezuela",
    native_name: "베네수엘라",
  },
  {
    iso_3166_1: "XK",
    english_name: "Kosovo",
    native_name: "코소보",
  },
  {
    iso_3166_1: "YE",
    english_name: "Yemen",
    native_name: "예멘",
  },
  {
    iso_3166_1: "ZA",
    english_name: "South Africa",
    native_name: "남아프리카",
  },
  {
    iso_3166_1: "ZM",
    english_name: "Zambia",
    native_name: "잠비아",
  },
  {
    iso_3166_1: "ZW",
    english_name: "Zimbabwe",
    native_name: "짐바브웨",
  },
]);

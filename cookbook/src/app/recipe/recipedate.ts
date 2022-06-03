import {Recipe} from './recipe';
export const RECIPEDATE :Recipe[ ] = [
  {
  id: 1,
  name : "チキンライス",
  minute : 15,
  feature: "美味しい",
  manner: "洋",
  serve: 2,
  ingre: [
    { name: "鶏モモ",amount: "中1枚" },
    { name: "ニンジン",amount: "2/3本" },
    { name: "玉ねぎ",amount: "1/4個" },
  ]
  },
  {
  id: 2 ,
  name: "カレー",
  minute : 60,
  feature: "まずい",
  manner: "洋",
  serve: 2,
  ingre: [
    { name: "鶏モモ", amount: "中1枚" },
    { name: "ニンジン", amount: "2/3本" },
    { name: "玉ねぎ", amount: "1/4個" },
  ]
},
  {
  id: 3,
  name: "ツナ",
  minute :90,
  feature: "普通",
  manner: "洋",
  serve: 2,
  ingre: [
    { name: "鶏モモ", amount: "中1枚" },
    { name: "ニンジン", amount: "2/3本" },
    { name: "玉ねぎ", amount: "1/4個" },
  ]
}
];

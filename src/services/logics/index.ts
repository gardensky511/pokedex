import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * @description ピクセル感じの昔ながらのイメージ
 */
export const baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/**
 * @description 画質のいい最新のイメージ
 */
// export const baseImageUrl = 'https://pokeres.bastionbot.org/images/pokemon/';

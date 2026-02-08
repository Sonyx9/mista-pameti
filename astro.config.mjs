// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Vlastní doména mistapameti.cz – assety na kořeni, ne pod /mista-pameti
export default defineConfig({
  site: 'https://mistapameti.cz',
  base: '/',
});

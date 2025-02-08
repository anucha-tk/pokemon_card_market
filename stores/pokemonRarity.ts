import { defineStore } from 'pinia';
import { POKE_API } from '~/constants/api_constant';

export const usePokemonRarity = defineStore('pokemon_rarities', {
  state: () => ({
    rarity: '',
    rarities: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchRarities() {
      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await $fetch<{ data: string[] }>(POKE_API.rarities);
        // TODO: remove slice
        this.rarities = data.slice(0, 5);
      } catch (error) {
        this.error = 'Failed to fetch sets';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    updateRarity(selectedRarity: string) {
      this.rarity = selectedRarity;
    },
  },
});

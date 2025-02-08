import { defineStore } from 'pinia';

export const usePokemonRarity = defineStore('pokemon_rarities', {
  state: () => ({
    rarity: '',
    rarities: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    updateRarities(rarities: string[]) {
      this.rarities = rarities;
    },
    updateRarity(selectedRarity: string) {
      this.rarity = selectedRarity;
    },
  },
});

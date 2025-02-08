import { defineStore } from 'pinia';
import { POKE_API } from '~/constants/api_constant';

export const usePokemonSets = defineStore('pokemon_sets', {
  state: () => ({
    set: '',
    setsName: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchSets() {
      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await $fetch<PokemonApiResponse>(POKE_API.setNames);
        // TODO: remove slice
        this.setsName = data.slice(0, 5).map((e) => e.name);
      } catch (error) {
        this.error = 'Failed to fetch sets';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    updateSet(selectedSet: string) {
      this.set = selectedSet;
    },
  },
});

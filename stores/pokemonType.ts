import { defineStore } from 'pinia';
import { POKE_API } from '~/constants/api_constant';

export const usePokemonType = defineStore('pokemon_types', {
  state: () => ({
    type: '',
    types: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchTypes() {
      this.isLoading = true;
      this.error = null;

      try {
        const { data } = await $fetch<{ data: string[] }>(POKE_API.types);
        // TODO: remove slice
        this.types = data.slice(0, 5);
      } catch (error) {
        this.error = 'Failed to fetch types';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    updateType(selectedType: string) {
      this.type = selectedType;
    },
  },
});

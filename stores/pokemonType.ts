import { defineStore } from 'pinia';

export const usePokemonType = defineStore('pokemon_types', {
  state: () => ({
    type: '',
    types: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    updateTypes(types: string[]) {
      this.types = types;
    },
    updateType(selectedType: string) {
      this.type = selectedType;
    },
  },
});

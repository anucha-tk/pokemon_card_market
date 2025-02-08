import { defineStore } from 'pinia';

export const usePokemonSets = defineStore('pokemon_sets', {
  state: () => ({
    set: '',
    setsName: [] as string[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    updateSets(sets: string[]) {
      this.setsName = sets;
    },
    updateSet(selectedSet: string) {
      this.set = selectedSet;
    },
  },
});

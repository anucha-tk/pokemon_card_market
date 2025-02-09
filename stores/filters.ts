import { defineStore } from 'pinia';

export const useFilters = defineStore('pokemon_rarities', {
  state: () => ({
    set: '',
    setsName: [] as string[],
    rarity: '',
    rarities: [] as string[],
    type: '',
    types: [] as string[],
    search: '',
  }),
  actions: {
    updateSets(sets: string[]) {
      this.setsName = sets;
    },
    updateSet(selectedSet: string) {
      this.set = selectedSet;
    },
    updateRarities(rarities: string[]) {
      this.rarities = rarities;
    },
    updateRarity(selectedRarity: string) {
      this.rarity = selectedRarity;
    },
    updateTypes(types: string[]) {
      this.types = types;
    },
    updateType(selectedType: string) {
      this.type = selectedType;
    },
    updateSearch(search: string) {
      this.search = search;
    },
  },
});

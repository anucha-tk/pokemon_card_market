<script setup lang="ts">
  const pokemonSets = usePokemonSets();
  const pokemonRarity = usePokemonRarity();
  const pokemonType = usePokemonType();
  const setNameOptions = ref<{ label: string; value: string }[]>([]);
  const setRaritiesOptions = ref<{ label: string; value: string }[]>([]);
  const setTypesOptions = ref<{ label: string; value: string }[]>([]);

  const selectedSet = ref('');
  const selectedRarity = ref('');
  const selectedType = ref('');

  onBeforeMount(async () => {
    await pokemonSets.fetchSets();
    await pokemonRarity.fetchRarities();
    await pokemonType.fetchTypes();
  });

  watch(
    () => pokemonSets.setsName,
    (newSetsName) => {
      setNameOptions.value = newSetsName.map((e) => ({ label: e, value: e }));
    },
    { immediate: true }
  );
  watch(
    () => pokemonRarity.rarities,
    (newRarities) => {
      setRaritiesOptions.value = newRarities.map((e) => ({ label: e, value: e }));
    },
    { immediate: true }
  );
  watch(
    () => pokemonType.types,
    (newTypes) => {
      setTypesOptions.value = newTypes.map((e) => ({ label: e, value: e }));
    },
    { immediate: true }
  );

  watch(
    () => selectedSet.value,
    (newValue) => {
      pokemonSets.updateSet(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedRarity.value,
    (newValue) => {
      pokemonRarity.updateRarity(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedType.value,
    (newValue) => {
      pokemonType.updateType(newValue);
    },
    { immediate: true }
  );
</script>

<template>
  <article id="menu" class="flex justify-between">
    <h1 class="text-lg font-semibold">Choose Card</h1>
    <div id="menu_filter" class="flex space-x-4">
      <SelectDropdown v-model="selectedSet" :placeholder="'Set'" :options="setNameOptions" />
      <SelectDropdown
        v-model="selectedRarity"
        :placeholder="'Rarity'"
        :options="setRaritiesOptions"
      />
      <SelectDropdown v-model="selectedType" :placeholder="'Type'" :options="setTypesOptions" />
    </div>
  </article>
</template>

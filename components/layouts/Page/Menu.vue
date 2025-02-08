<script setup lang="ts">
  const pokemonSets = usePokemonSets();
  const pokemonRarity = usePokemonRarity();
  const setNameOptions = ref<{ label: string; value: string }[]>([]);
  const setRaritiesOptions = ref<{ label: string; value: string }[]>([]);
  // const type = ref('');

  const selectedSet = ref('');
  const selectedRarities = ref('');

  onBeforeMount(async () => {
    await pokemonSets.fetchSets();
    await pokemonRarity.fetchRarities();
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
    () => selectedSet.value,
    (newValue) => {
      pokemonSets.updateSet(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedRarities.value,
    (newValue) => {
      pokemonRarity.updateRarity(newValue);
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
        v-model="selectedRarities"
        :placeholder="'Rarity'"
        :options="setRaritiesOptions"
      />
    </div>
  </article>
</template>

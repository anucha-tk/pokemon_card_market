<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';
  const pokemonSets = usePokemonSets();
  const pokemonRarity = usePokemonRarity();
  const pokemonTypes = usePokemonType();

  const pokemonSetOptions = useState<{ label: string; value: string }[]>('pokemonSets', () => []);
  const pokemonRaritiesOptions = useState<{ label: string; value: string }[]>(
    'pokemonRarities',
    () => []
  );
  const pokemonTypesOptions = useState<{ label: string; value: string }[]>(
    'pokemonTypes',
    () => []
  );

  const selectedSet = ref('');
  const selectedRarity = ref('');
  const selectedType = ref('');

  const setRes = await useAsyncData<PokemonApiResponse>('pokemonSets', () =>
    $fetch(POKE_API.setNames)
  );
  pokemonSetOptions.value =
    setRes.data.value?.data.map((e) => ({ label: e.name, value: e.name })) || [];
  pokemonSets.updateSets(setRes.data.value?.data.map((e) => e.name).sort() || []);

  const raritiesRes = await useAsyncData<{ data: string[] }>('pokemonRarities', () =>
    $fetch(POKE_API.rarities)
  );
  pokemonRaritiesOptions.value =
    raritiesRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  pokemonRarity.updateRarities(raritiesRes.data.value?.data.sort() || []);

  const typeRes = await useAsyncData<{ data: string[] }>('pokemonTypes', () =>
    $fetch(POKE_API.types)
  );
  pokemonTypesOptions.value = typeRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  pokemonTypes.updateTypes(typeRes.data.value?.data.sort() || []);

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
      pokemonTypes.updateType(newValue);
    },
    { immediate: true }
  );
</script>

<template>
  <article id="menu" class="flex justify-between">
    <h1 class="text-lg font-semibold">Choose Card</h1>
    <div id="menu_filter" class="flex space-x-4">
      <SelectDropdown v-model="selectedSet" :placeholder="'Set'" :options="pokemonSetOptions" />
      <SelectDropdown
        v-model="selectedRarity"
        :placeholder="'Rarity'"
        :options="pokemonRaritiesOptions"
      />
      <SelectDropdown v-model="selectedType" :placeholder="'Type'" :options="pokemonTypesOptions" />
    </div>
  </article>
</template>

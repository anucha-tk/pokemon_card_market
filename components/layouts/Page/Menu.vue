<script setup lang="ts">
  import { useMediaQuery } from '@vueuse/core';
  import AppClearFilter from '~/components/AppClearFilter.vue';
  import { POKE_API } from '~/constants/api_constant';

  const filterStore = useFilters();

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
    setRes.data?.value?.data?.map((e) => ({ label: e.name || '', value: e.id || '' })) || [];
  filterStore.updateSets(setRes.data?.value?.data?.map((e) => e.name || '').sort() || []);

  const raritiesRes = await useAsyncData<{ data: string[] }>('pokemonRarities', () =>
    $fetch(POKE_API.rarities)
  );
  pokemonRaritiesOptions.value =
    raritiesRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  filterStore.updateRarities(raritiesRes.data.value?.data.sort() || []);

  const typeRes = await useAsyncData<{ data: string[] }>('pokemonTypes', () =>
    $fetch(POKE_API.types)
  );
  pokemonTypesOptions.value = typeRes.data.value?.data.map((e) => ({ label: e, value: e })) || [];
  filterStore.updateTypes(typeRes.data.value?.data.sort() || []);

  watch(
    () => selectedSet.value,
    (newValue) => {
      filterStore.updateSet(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedRarity.value,
    (newValue) => {
      filterStore.updateRarity(newValue);
    },
    { immediate: true }
  );
  watch(
    () => selectedType.value,
    (newValue) => {
      filterStore.updateType(newValue);
    },
    { immediate: true }
  );
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isFilter = computed(() =>
    Boolean(filterStore.set || filterStore.type || filterStore.rarity)
  );

  const resetFilters = () => {
    filterStore.updateSet('');
    filterStore.updateRarity('');
    filterStore.updateType('');
    filterStore.updateSearch('');

    selectedSet.value = '';
    selectedRarity.value = '';
    selectedType.value = '';
  };
</script>
<template>
  <article
    id="menu"
    class="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-center md:space-y-0"
  >
    <div class="flex w-full items-center justify-between">
      <h1 class="text-lg font-semibold">Choose Card</h1>
      <AppClearFilter
        id="clear_filter_mobile"
        :is-show="isFilter && isMobile"
        :reset-filters="resetFilters"
      />
    </div>
    <div id="menu_filter" class="flex w-full items-center justify-between gap-2 md:w-fit">
      <AppClearFilter
        id="clear_filter_tablet"
        :is-show="isFilter && !isMobile"
        :reset-filters="resetFilters"
      />
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

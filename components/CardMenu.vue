<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';

  const pageQuery = usePageQuery();
  const filterStore = useFilters();
  const { page, size } = storeToRefs(pageQuery);

  const filters = ref({ name: '', set: '', rarity: '', type: '' });

  const queryFilter = computed(() => Object.values(filters.value).filter(Boolean).join(' '));

  const { data, status } = await useAsyncData<PokemonCardApiResponse>(
    'posts',
    () =>
      $fetch(POKE_API.pokemons, {
        params: {
          page: page.value,
          pageSize: size.value,
          q: queryFilter.value || undefined,
        },
      }),
    { watch: [page, size, queryFilter] }
  );

  const pokemons = computed(() => data.value?.data || []);

  watch(
    [
      () => filterStore.search,
      () => filterStore.set,
      () => filterStore.rarity,
      () => filterStore.type,
    ],
    ([search, set, rarity, type]) => {
      filters.value = {
        name: search ? `name:${search}` : '',
        set: set ? `set.id:${set}` : '',
        rarity: rarity ? `rarity:"${rarity}"` : '',
        type: type ? `types:"${type}"` : '',
      };
      pageQuery.setPage(1);
    },
    { immediate: true }
  );

  watch(
    data,
    () => {
      const totalCount = data.value?.totalCount || 0;
      const pageSize = data.value?.pageSize || 0;
      pageQuery.setTotalPage(Math.ceil(totalCount / pageSize));
      pageQuery.setCount(totalCount);
    },
    { immediate: true }
  );
</script>

<template>
  <AppSpinner v-if="status === 'pending'" />
  <div
    v-else
    id="container_card_menu"
    class="grid gap-y-6 md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-6"
  >
    <PokemonCard v-for="(p, i) in pokemons" id="Card_menu" :key="i" :p="p" />
  </div>
  <AppPagination />
</template>

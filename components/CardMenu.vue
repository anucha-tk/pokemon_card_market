<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';
  const pageQuery = usePageQuery();
  const filterStore = useFilters();
  const filters = ref({ name: '', set: '', rarity: '', type: '' });

  const queryFilter = computed(() => Object.values(filters.value).filter(Boolean).join(' '));

  const { data, refresh } = await useAsyncData<PokemonCardApiResponse>('posts', () =>
    $fetch(POKE_API.pokemons, {
      params: {
        page: pageQuery.page,
        pageSize: pageQuery.size,
        q: queryFilter.value || undefined,
      },
    })
  );
  watch(
    () => filterStore.search,
    (newSearch) => {
      filters.value.name = newSearch ? `name:${newSearch}` : '';
      pageQuery.setPage(1);
    }
  );
  watch(
    () => filterStore.set,
    (newSet) => {
      filters.value.set = newSet ? `set.id:${newSet}` : '';
      pageQuery.setPage(1);
    }
  );
  watch(
    () => filterStore.rarity,
    (newRarity) => {
      filters.value.rarity = newRarity ? `rarity:"${newRarity}"` : '';
      pageQuery.setPage(1);
    }
  );
  watch(
    () => filterStore.type,
    (newType) => {
      filters.value.type = newType ? `types:"${newType}"` : '';
      pageQuery.setPage(1);
    }
  );

  watch(
    () => [pageQuery.page, pageQuery.size],
    () => {
      refresh();
    }
  );
  watch(queryFilter, () => {
    refresh();
  });

  const pokemons = ref(data.value?.data || []);

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

  watch(data, () => {
    pokemons.value = data.value?.data || [];
  });
</script>

<template>
  <div
    id="container_card_menu"
    class="grid gap-y-6 md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-6"
  >
    <PokemonCard v-for="(p, i) in pokemons" id="Card_menu" :key="i" :p="p" />
  </div>
  <AppPagination />
</template>

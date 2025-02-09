<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';
  const pageQuery = usePageQuery();
  const setStore = usePokemonSets();
  const rarityStore = usePokemonRarity();
  const typeStore = usePokemonType();
  const filters = ref({ set: '', rarity: '', type: '' });

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
    () => setStore.set,
    (newSet) => {
      filters.value.set = newSet ? `set.id:${newSet}` : '';
      pageQuery.setPage(1);
    }
  );
  watch(
    () => rarityStore.rarity,
    (newRarity) => {
      filters.value.rarity = newRarity ? `rarity:"${newRarity}"` : '';
      pageQuery.setPage(1);
    }
  );
  watch(
    () => typeStore.type,
    (newType) => {
      filters.value.type = newType ? `types:"${newType}"` : '';
      pageQuery.setPage(1);
    }
  );

  watch(
    () => pageQuery.page,
    () => {
      refresh();
    }
  );
  watch(queryFilter, () => {
    refresh();
  });
  // TODO: update count totalPage every request

  const totalCount = data.value?.totalCount || 0;
  const pageSize = data.value?.pageSize || 0;
  pageQuery.setCount(totalCount);
  pageQuery.setTotalPage(Math.ceil(totalCount / pageSize));
  const pokemons = ref(data.value?.data || []);

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

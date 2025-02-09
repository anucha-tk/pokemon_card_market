<script setup lang="ts">
  import { POKE_API } from '~/constants/api_constant';

  const { data } = await useAsyncData<PokemonCardApiResponse>('pokemons', () =>
    $fetch(POKE_API.pokemons)
  );
  const pokemons = ref(data.value?.data);
</script>

<template>
  <div
    id="container_card_menu"
    class="grid gap-y-6 md:grid md:grid-cols-3 md:gap-x-4 lg:grid-cols-6"
  >
    <PokemonCard v-for="(p, i) in pokemons" id="Card_menu" :key="i" :p="p" />
  </div>
  <div id="paginate">paginate</div>
</template>

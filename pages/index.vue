<script setup lang="ts">
  import CardMenu from '~/components/CardMenu.vue';

  // const pokemonSets = usePokemonSets();
  // const pokemonRarity = usePokemonRarity();
  // const pokemonType = usePokemonType();
</script>

<template>
  <section id="home_page_menu" class="flex flex-col space-y-6">
    <LayoutsPageMenu />
    <CardMenu />
  </section>
</template>

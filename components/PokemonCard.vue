<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
  const { p } = defineProps<{
    p: Pokemon;
  }>();
  const priceMarket = computed(() => p.tcgplayer?.prices?.holofoil?.market || 'N/A');
  const cardTotal = computed(() => p.set.total || 'N/A');
</script>

<template>
  <div id="card" class="flex w-full flex-col items-center self-stretch">
    <!-- Image Section (On Top) -->
    <section id="poke_img" class="relative flex w-full justify-center">
      <NuxtImg
        :src="p.images?.small"
        class="relative z-10 h-[270px] drop-shadow-lg md:h-52 lg:h-[142px]"
      />
    </section>

    <!-- Background Card Section -->
    <div
      class="relative -mt-10 flex h-full w-full flex-col justify-between rounded-lg bg-[#1F1D2B] p-4 text-center"
    >
      <p class="pt-10 font-semibold text-white">{{ p.name }}</p>
      <p class="text-sm font-normal text-gray-400">$ {{ priceMarket }} • {{ cardTotal }} Cards</p>
      <!-- Add to Cart Button -->
      <button
        class="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-700 py-2 text-white"
      >
        <ShoppingBag style="width: 14px; height: 14px" class="text-white" />
        <span class="text-sm font-medium">Add to cart</span>
      </button>
    </div>
  </div>
</template>

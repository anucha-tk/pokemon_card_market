<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
  import clsx from 'clsx';

  const { p } = defineProps<{
    p: Pokemon;
  }>();
  const priceMarket = computed(() => p.tcgplayer?.prices?.holofoil?.market || 'N/A');
  const cardTotal = computed(() => p.set.total || 'N/A');
</script>

<template>
  <div id="card" class="flex w-full flex-col items-center self-stretch md:max-w-[176px]">
    <!-- Image Section (On Top) -->
    <section id="poke_img" class="relative flex w-full justify-center">
      <NuxtImg
        :src="p.images?.small"
        class="relative z-10 h-[270px] drop-shadow-lg md:h-52 lg:h-[142px]"
      />
    </section>

    <!-- Background Card Section -->
    <div
      class="relative -mt-10 flex h-full w-full flex-col justify-between rounded-lg bg-slate-200 p-4 text-center dark:bg-[#1F1D2B]"
    >
      <p class="pt-10 font-semibold dark:text-white">{{ p.name }}</p>
      <p class="text-sm font-normal dark:text-gray-400">
        $ {{ priceMarket }} • {{ cardTotal }} Cards
      </p>
      <!-- Add to Cart Button -->
      <button
        :disabled="priceMarket === 'N/A'"
        :class="
          clsx(
            'mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-white hover:bg-gray-700 dark:bg-[#312f3c] dark:hover:bg-[#474651]',
            priceMarket === 'N/A' &&
              'pointer-events-none hover:bg-[#ABBBC2] dark:hover:bg-[#312f3c]'
          )
        "
      >
        <ShoppingBag
          style="width: 14px; height: 14px"
          :class="priceMarket === 'N/A' ? 'text-[#82838B]' : 'text-white'"
        />
        <span :class="clsx('text-sm font-medium', priceMarket === 'N/A' && 'text-[#82838B]')"
          >Add to cart</span
        >
      </button>
    </div>
  </div>
</template>

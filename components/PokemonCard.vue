<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
  import clsx from 'clsx';

  const { p } = defineProps<{
    p: Pokemon;
  }>();
  const priceMarket = computed(() => p.tcgplayer?.prices?.holofoil?.market || 'N/A');
  const cardTotal = computed(() => p.set.total || 'N/A');
  const cartStore = useCart();
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
      class="relative -mt-10 flex h-full w-full max-w-sm flex-col justify-between gap-2 rounded-[16px] bg-slate-200 p-4 text-center dark:bg-[#1F1D2B] md:max-w-none"
    >
      <p class="pt-10 font-semibold dark:text-white">{{ p.name }}</p>
      <p class="text-sm font-normal dark:text-gray-400">
        $ {{ priceMarket }} • {{ cardTotal }} Cards
      </p>
      <!-- Add to Cart Button -->
      <!-- NOTE: we disable button when not have both id and price make sure cartStore work correctly -->
      <button
        :disabled="priceMarket === 'N/A' || !p.id"
        :class="
          clsx(
            'flex min-h-[41px] w-full items-center justify-center gap-2 rounded-[8px] bg-primary py-2 text-white hover:bg-gray-700 dark:bg-[#312f3c] dark:hover:bg-[#474651]',
            priceMarket === 'N/A' &&
              !p.id &&
              'pointer-events-none hover:bg-[#ABBBC2] dark:hover:bg-[#312f3c]'
          )
        "
        @click="
          cartStore.addCard(p.id!, {
            name: p.name || '',
            price: p.tcgplayer?.prices?.holofoil?.market!,
            img: p.images?.small || '',
            totalCard: p.set.total || 0,
          })
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

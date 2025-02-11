<script setup lang="ts">
  import { NuxtImg } from '#components';
  import { Button } from '@/components/ui/button';
  import { Plus, Minus } from 'lucide-vue-next';

  const { c, i } = defineProps<{
    c: CartCard;
    i: string;
  }>();
  const totalPrice = computed(() => {
    const total = c.price * c.qty;
    return total.toFixed(2);
  });
  const cartStore = useCart();
</script>
<template>
  <div :id="`card_${c.name}_${i}`" class="flex w-full flex-col space-y-2.5">
    <div id="card_information" class="flex w-full justify-between">
      <div id="img_n_name" class="flex w-full space-x-4">
        <NuxtImg id="img" :src="c.img" class="h-40" />
        <div id="name_n_price" class="flex flex-col space-x-1">
          <p class="text-xl font-medium">{{ c.name }}</p>
          <p class="text-gray-500 dark:text-gray-400">$ {{ c.price }}</p>
        </div>
      </div>
      <p id="totalPrice">$&nbsp;{{ totalPrice }}</p>
    </div>

    <div id="button_activity" class="flex h-14 justify-between space-x-2">
      <Button
        variant="outline"
        size="icon"
        class="h-full w-20 bg-[#ABBBC2] dark:bg-[#312F3C]"
        @click="cartStore.decrementCard(i)"
      >
        <Minus style="width: 24px; height: 24px" />
      </Button>
      <Button
        disabled
        variant="outline"
        size="icon"
        class="h-full w-full bg-[#ABBBC2] text-lg font-medium disabled:opacity-100 dark:bg-[#312F3C] disabled:dark:text-white"
      >
        {{ c.qty }}
      </Button>
      <Button
        :disabled="c.qty === c.totalCard"
        variant="outline"
        size="icon"
        class="h-full w-20 bg-[#ABBBC2] dark:bg-[#312F3C]"
        @click="cartStore.incrementCard(i)"
      >
        <Plus style="width: 24px; height: 24px" />
      </Button>
    </div>
  </div>
</template>

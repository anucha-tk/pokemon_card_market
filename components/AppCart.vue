<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
  import { Separator } from '@/components/ui/separator';
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
    SheetFooter,
    SheetClose,
  } from '@/components/ui/sheet';
  import AppCartCard from './AppCartCard.vue';

  const cartStore = useCart();
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <div class="h-12 w-12">
        <Button class="flex h-full w-full items-center justify-center bg-[#EA7C69]">
          <ShoppingBag style="width: 24px; height: 24px" class="text-white" />
        </Button>
      </div>
    </SheetTrigger>
    <SheetContent
      id="cart_container"
      class="flex w-full flex-col items-start px-5 py-6 md:w-auto md:min-w-[400px] lg:min-w-[500px]"
    >
      <SheetHeader id="cart_header" class="flex w-full space-y-5">
        <div id="header_content" class="flex items-center justify-between space-x-2">
          <div id="header" class="flex flex-col items-start space-y-1">
            <SheetTitle class="text-2xl font-semibold">Cart</SheetTitle>
            <SheetDescription class="text-sm font-normal text-[#ABBBC2] underline">
              clear all
            </SheetDescription>
          </div>
        </div>
        <div id="header_head_title" class="flex justify-between text-sm font-normal">
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
        </div>
      </SheetHeader>
      <div id="cart_container_contain" class="flex w-full flex-col space-y-6">
        <Separator class="bg-[#363946]" />
        <div id="cart_contain" class="flex flex-col space-y-6">
          <AppCartCard v-for="(c, i) in cartStore.cards" :key="`${c.name}_${i}`" :c="c" :i="i" />
        </div>
      </div>
      <SheetFooter id="cart_total" class="sticky">
        <p>cardTotal: {{ cartStore.totalCartCard }}</p>
        <p>priceTotal: {{ cartStore.totalPrice }}</p>
        <SheetClose as-child>
          <Button type="submit"> Save changes </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

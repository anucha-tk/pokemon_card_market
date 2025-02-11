<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
  import { ScrollArea } from '@/components/ui/scroll-area';

  import { Separator } from '@/components/ui/separator';
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
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
      class="flex w-full flex-col items-start px-5 py-6 md:w-auto md:min-w-[400px]"
    >
      <SheetHeader id="cart_header" class="flex w-full space-y-5">
        <div id="header_content" class="flex items-center justify-between space-x-2">
          <div id="header" class="flex flex-col items-start space-y-1">
            <SheetTitle class="text-2xl font-semibold">Cart</SheetTitle>
            <SheetDescription class="text-sm font-normal text-[#ABBBC2]">
              <Button variant="link" class="p-0" @click="cartStore.clearAllCard()">
                Clear all
              </Button>
            </SheetDescription>
          </div>
        </div>
        <div id="header_head_title" class="flex justify-between text-sm font-normal">
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
        </div>
      </SheetHeader>
      <div id="cart_container_contain" class="flex h-3/5 w-full flex-grow flex-col space-y-6">
        <Separator class="bg-[#363946]" />
        <ScrollArea class="w-full">
          <div id="cart_contain" class="flex flex-col space-y-6">
            <AppCartCard v-for="(c, i) in cartStore.cards" :key="`${c.name}_${i}`" :c="c" :i="i" />
          </div>
        </ScrollArea>
      </div>
      <div id="cart_total" class="w-full py-6">
        <div class="flex flex-col space-y-4">
          <div class="flex justify-between">
            <p class="dark:text-[#ABBBC2]">Total card amount</p>
            <p class="text-lg">{{ cartStore.totalCartCard }}</p>
          </div>
          <div class="flex justify-between">
            <p class="dark:text-[#ABBBC2]">Total price</p>
            <p class="text-lg">$&nbsp;{{ cartStore.totalPrice }}</p>
          </div>
          <SheetClose as-child>
            <Button class="h-12 bg-[#EA7C69] text-white">Continue to Payment</Button>
          </SheetClose>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

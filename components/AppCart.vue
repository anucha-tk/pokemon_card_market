<script setup lang="ts">
  import { ShoppingBag } from 'lucide-vue-next';
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
    <SheetContent id="cart_container" class="flex w-full flex-col items-start px-5 py-6 md:w-auto">
      <SheetHeader id="cart_header" class="flex w-full space-y-5">
        <div id="header_content" class="flex items-center justify-between space-x-2">
          <div id="header" class="flex flex-col items-start space-y-1">
            <SheetTitle class="text-2xl font-semibold">Cart</SheetTitle>
            <SheetDescription class="text-sm font-normal text-[#ABBBC2] underline">
              clear all
            </SheetDescription>
          </div>
        </div>
        <div id="header_head_title" class="flex">head title</div>
      </SheetHeader>
      <article id="cart_content">content</article>
      <SheetFooter id="cart_total" class="sticky">
        <SheetClose as-child>
          <Button type="submit"> Save changes </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

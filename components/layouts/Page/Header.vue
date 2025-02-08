<script setup lang="ts">
  import { Input } from '@/components/ui/input';
  import { Separator } from '@/components/ui/separator';

  import { ShoppingBag, Search } from 'lucide-vue-next';
</script>

<template>
  <nav id="header" class="space-y-6">
    <div id="title" class="flex items-center justify-between">
      <h1 id="" class="text-2xl font-semibold dark:text-white">Pokemon market</h1>
      <div id="tools_bar" class="flex space-x-4">
        <div id="search" class="relative flex w-full max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="Search By Name"
            class="h-full w-44 border-[#393C49] pl-12 placeholder:text-sm placeholder:font-normal dark:bg-[#252735] placeholder:dark:text-[#ABBBC2]"
          />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center p-3.5">
            <Search class="size-5 text-white" />
          </span>
        </div>
        <div class="h-12 w-12">
          <Button class="flex h-full w-full items-center justify-center bg-[#EA7C69]">
            <ShoppingBag style="width: 24px; height: 24px" class="text-white" />
          </Button>
        </div>
        <LayoutsPageThemeSwitch />
      </div>
    </div>
    <div id="menu">
      <Separator class="bg-[#363946]" />
    </div>
  </nav>
</template>

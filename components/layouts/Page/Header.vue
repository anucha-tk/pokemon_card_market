<script setup lang="ts">
  import { Input } from '@/components/ui/input';
  import { Separator } from '@/components/ui/separator';
  import { useDebounceFn } from '@vueuse/core';
  import { Search } from 'lucide-vue-next';

  const filtersStore = useFilters();
  const { search } = storeToRefs(filtersStore);
  const debouncedFn = useDebounceFn(() => {
    filtersStore.updateSearch(search.value);
  }, 2000);
  watch(
    () => search.value,
    () => {
      debouncedFn();
    }
  );
</script>

<template>
  <nav id="header" class="space-y-6">
    <div id="title" class="flex items-center justify-between">
      <div class="flex items-center justify-center">
        <!--  eslint-disable-next-line vue/html-self-closing -->
        <img
          src="/img/poke_ball.png"
          height="50"
          width="50"
          alt="poke_ball"
          class="hidden pr-4 md:block"
        />
        <h1 id="logo_name" class="text-2xl font-semibold dark:text-white">Pokemon market</h1>
      </div>
      <div id="tools_bar" class="flex space-x-4">
        <div id="search" class="relative hidden w-full max-w-sm items-center md:flex">
          <Input
            id="search"
            v-model="search"
            type="search"
            placeholder="Search By Name"
            class="h-full w-48 border-[#393C49] pl-12 placeholder:text-sm placeholder:font-normal dark:bg-[#252735] placeholder:dark:text-[#ABBBC2]"
          />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center p-3.5">
            <Search class="size-5 dark:text-white" />
          </span>
        </div>
        <ClientOnly>
          <AppCart />
        </ClientOnly>
        <LayoutsPageThemeSwitch />
      </div>
    </div>
    <!-- search input mobile screen -->
    <div id="search_input_mobile" class="flex h-12 w-full md:hidden">
      <div id="search" class="relative flex w-full items-center sm:hidden">
        <Input
          id="search"
          v-model="search"
          type="search"
          placeholder="Search By Name"
          class="h-full w-full border-[#393C49] pl-12 placeholder:text-sm placeholder:font-normal dark:bg-[#252735] placeholder:dark:text-[#ABBBC2]"
        />
        <span class="absolute inset-y-0 start-0 flex items-center justify-center p-3.5">
          <Search class="size-5 dark:text-white" />
        </span>
      </div>
    </div>
    <div id="menu">
      <Separator class="bg-[#363946]" />
    </div>
  </nav>
</template>

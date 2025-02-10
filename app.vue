<script lang="ts" setup>
  import { usePageSizeUpdater } from '@/stores/pageQuery';

  const { awesome } = useAppConfig();

  useHead({
    title: awesome.name,
    titleTemplate: `%s - ${awesome.name}`,
  });

  usePageSizeUpdater();
</script>

<template>
  <Body
    class="box-border w-screen overflow-x-hidden bg-white text-gray-800 dark:bg-[#252836] dark:text-gray-200"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

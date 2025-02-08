<script lang="ts" setup>
  const { awesome } = useAppConfig()

  useHead({
    title: awesome.name,
    titleTemplate: `%s - ${awesome.name}`,
  })
</script>

<template>
  <Body class="w-full overflow-hidden bg-white text-gray-800 dark:bg-[#252836] dark:text-gray-200">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

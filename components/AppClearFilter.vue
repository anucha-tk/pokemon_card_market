<script setup lang="ts">
  import { CircleX } from 'lucide-vue-next';

  const { isShow, resetFilters } = defineProps<{
    isShow: boolean;
    resetFilters: () => void;
  }>();
</script>

<template>
  <div v-show="isShow" id="clear_filter" class="h-10 w-10">
    <Button
      variant="outline"
      size="icon"
      class="h-full w-full bg-red-500 px-4"
      @click="resetFilters"
    >
      <CircleX style="width: 20px; height: 20px" class="text-white" />
    </Button>
  </div>
</template>

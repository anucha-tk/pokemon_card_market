<script setup lang="ts">
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';

  const model = defineModel<string>();
  const { options, placeholder } = defineProps<{
    placeholder: string;
    options: { label: string; value: string }[];
  }>();
</script>

<template>
  <Select id="menu_filter_set" v-model="model">
    <SelectTrigger class="space-x-2 border-[#393C49] dark:bg-[#1F1D2B]">
      <SelectValue :placeholder="placeholder" class="text-sm dark:text-white" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="option in options" :key="option.value" :value="option.value">{{
          option.label
        }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

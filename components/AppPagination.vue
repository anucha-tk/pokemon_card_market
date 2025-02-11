<script setup lang="ts">
  import { usePageQuery } from '#imports';
  import { Button } from '@/components/ui/button';

  import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
  } from '@/components/ui/pagination';

  const pageQuery = usePageQuery();
  const goToPage = (page: number) => {
    pageQuery.setPage(page);
  };
  const nextPage = () => {
    pageQuery.nextPage();
  };
  const prevPage = () => {
    pageQuery.prevPage();
  };
  const totalCount = computed(() => pageQuery.count);
  const currPage = computed(() => pageQuery.page);
</script>

<template>
  <Pagination
    id="app_pagination"
    v-slot="{ page }"
    :total="totalCount"
    :items-per-page="pageQuery.size"
    :sibling-count="1"
    show-edges
    :default-page="currPage"
    class="flex justify-center"
    :page="currPage"
  >
    <PaginationList v-slot="{ items }" class="flex w-full items-center justify-center gap-1">
      <PaginationFirst @click="goToPage(1)" />
      <PaginationPrev @click="prevPage" />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button
            class="h-10 w-10 p-0"
            :variant="item.value === page ? 'default' : 'outline'"
            @click="goToPage(item.value)"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext @click="nextPage" />
      <PaginationLast @click="goToPage(pageQuery.totalPage)" />
    </PaginationList>
  </Pagination>
</template>

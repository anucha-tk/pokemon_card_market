import { useMediaQuery } from '@vueuse/core';
import { defineStore } from 'pinia';

export const usePageQuery = defineStore('page_query', {
  state: () => ({
    page: 1,
    size: 20,
    count: 0,
    totalPage: 0,
  }),
  actions: {
    setPage(page: number) {
      this.page = page;
    },
    setSize(size: number) {
      this.size = size;
    },
    setCount(count: number) {
      this.count = count;
    },
    setTotalPage(totalPage: number) {
      this.totalPage = totalPage;
    },
  },
});

export function usePageSizeUpdater() {
  const pageQuery = usePageQuery();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  watch(
    [isMobile, isTablet],
    () => {
      if (isMobile.value) pageQuery.setSize(5);
      else if (isTablet.value) pageQuery.setSize(10);
      else pageQuery.setSize(20);
    },
    { immediate: true }
  );
}

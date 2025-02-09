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
    nextPage() {
      if (this.page + 1 <= this.totalPage) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page - 1 >= 1) {
        this.page--;
      }
    },
  },
});

import { defineStore } from 'pinia';

type Card = {
  qty: number;
  price: number;
};

export const useCart = defineStore('cart', {
  state: () => ({
    cards: {} as Record<string, Card>,
    totalCard: 0,
    totalPrice: 0,
  }),
  actions: {
    addCard(id: string, price: number) {
      if (!this.cards[id]) {
        this.cards[id] = { qty: 1, price };
      } else {
        this.cards[id].qty++;
      }
    },
    removeCard(id: string) {
      if (this.cards[id]) {
        if (this.cards[id].qty > 1) {
          this.cards[id].qty--;
        } else {
          Reflect.deleteProperty(this.cards, id);
        }
      }
    },
  },
});

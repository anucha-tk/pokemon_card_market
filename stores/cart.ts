import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({
    cards: {} as Record<string, CartCard>,
    totalCartCard: 0,
    totalPrice: 0,
  }),
  actions: {
    addCard(id: string, { name, price, img, totalCard }: Omit<CartCard, 'qty'>) {
      if (!this.cards[id]) {
        this.cards[id] = { name, qty: 1, price, img, totalCard };
      } else {
        this.cards[id].qty++;
      }
      this.totalCartCard++;
      this.totalPrice = parseFloat((this.totalPrice + price).toFixed(2));
    },
    incrementCard(id: string) {
      if (this.cards[id] && this.cards[id].qty < this.cards[id].totalCard) {
        this.cards[id].qty++;
        this.totalCartCard++;
        this.totalPrice = parseFloat((this.totalPrice + this.cards[id].price).toFixed(2));
      }
    },
    decrementCard(id: string) {
      if (this.cards[id]) {
        if (this.cards[id].qty > 1) {
          this.cards[id].qty--;
          this.totalCartCard--;
          this.totalPrice = parseFloat((this.totalPrice - this.cards[id].price).toFixed(2));
        } else {
          this.totalPrice = parseFloat((this.totalPrice - this.cards[id].price).toFixed(2));
          Reflect.deleteProperty(this.cards, id);
          this.totalCartCard--;
        }
        if (Object.keys(this.cards).length === 0) {
          this.totalPrice = 0;
          this.totalCartCard = 0;
        }
      }
    },
  },
});

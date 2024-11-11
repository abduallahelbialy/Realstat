import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    toggleFavorite(property) {
      const index = this.favorites.findIndex((item) => item.id === property.id);
      if (index === -1) {
        // أضف نسخة كاملة من العنصر إلى المفضلة
        this.favorites.push({ ...property });
      } else {
        // احذفه إذا كان موجودًا
        this.favorites.splice(index, 1);
      }
    },
    isFavorite(property) {
      return this.favorites.some((item) => item.id === property.id);
    },
  },
});

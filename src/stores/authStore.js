// stores/authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user, //valide user
  },
  actions: {
    registerUser(userData) {
      this.user = userData;
    },
    loginUser(email, password) {
      if (
        this.user &&
        this.user.email === email &&
        this.user.password === password
      ) {
        return true;
      }
      return false;
    },
  },
});

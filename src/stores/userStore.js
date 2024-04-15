import { create } from "zustand";

const userStore = create((set) => {
    return {
        user: null,
        setUser: (user) => set({ user }),
    };
  });

export default userStore;
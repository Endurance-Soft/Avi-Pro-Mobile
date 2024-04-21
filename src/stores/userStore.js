import { setUserId } from "firebase/analytics";
import { create } from "zustand";

const userStore = create((set) => {
    return {
        user: {
          idDoc: "",
          nombre: "",
          empresa: "",
        },
        setUser: (user) => set({ user }),
        setUserId: (idDoc) => set((state) => ({ user : {...state.user, idDoc}})),
        setName: (nombre) => set((state) => ({ user : {...state.user, nombre}})),
        setEmpresa: (empresa) => set((state) => ({ user : {...state.user, empresa}})),
    };
  });

export default userStore;
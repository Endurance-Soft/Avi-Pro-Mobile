import { create } from "zustand";

const userStore = create((set) => {
    return {
        user: {
          idDoc: "",
          nombre: "",
          empresa_id: "",
        },
        setUser: (user) => set({ user }),
        setUserId: (idDoc) => set((state) => ({ user : {...state.user, idDoc}})),
        setName: (nombre) => set((state) => ({ user : {...state.user, nombre}})),
        setEmpresa: (empresa_id) => set((state) => ({ user : {...state.user, empresa_id}})),
    };
  });

export default userStore;
import create from 'zustand';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase';

const useStore = create((set, get) => ({
  clientes: [],
  notasPendientes: [],
  clientesConNotas: [],

  subscribeToData: () => {
    const unsubscribeClientes = onSnapshot(collection(db, 'clientes'), (snapshot) => {
      const clientes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ clientes });
      get().combinarClientesConNotas();
      console.log("Clientes actualizados en tiempo real");
    });

    const unsubscribeNotas = onSnapshot(collection(db, 'notas_pendientes'), (snapshot) => {
      const notasPendientes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ notasPendientes });
      get().combinarClientesConNotas();
      console.log("Notas pendientes actualizadas en tiempo real");
    });

    return () => {
      unsubscribeClientes();
      unsubscribeNotas();
    };
  },

  combinarClientesConNotas: () => {
    const { clientes, notasPendientes } = get();
    const mapaNotasPorCuenta = notasPendientes.reduce((acc, nota) => {
      const cuenta = nota.Cuenta?.trim();
      acc[cuenta] = acc[cuenta] || [];
      acc[cuenta].push(nota);
      return acc;
    }, {});

    const clientesConNotas = clientes.map(cliente => {
      const cuentaCliente = cliente.Cuenta?.trim();
      return {
        ...cliente,
        NotasPendientes: mapaNotasPorCuenta[cuentaCliente] || []
      };
    });

    set({ clientesConNotas });
    console.log("Clientes con notas pendientes combinados y actualizados en el estado.");
  }

}));

export default useStore;

import {create} from 'zustand';
import { collection, onSnapshot, doc, updateDoc, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

const useStore = create((set, get) => ({
  clientes: [],
  notasPendientes: [],
  clientesConNotas: [],
  pagosRealizados: [],

  subscribeToData: () => {
    const unsubscribeClientes = onSnapshot(collection(db, 'clientes'), (snapshot) => {
      const clientes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ clientes });
      get().combinarClientesConNotas();
      // console.log("Clientes actualizados en tiempo real");
    });

    const unsubscribeNotas = onSnapshot(collection(db, 'notas_pendientes'), (snapshot) => {
      const notasPendientes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ notasPendientes });
      get().combinarClientesConNotas();
      // console.log("Notas pendientes actualizadas en tiempo real");
    });

    const unsubscribePagos = onSnapshot(collection(db, 'notas_cobradas'), (snapshot) => {
      const pagosRealizados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ pagosRealizados });
      // console.log("Pagos realizados actualizados en tiempo real");
    });
    return () => {
      unsubscribeClientes();
      unsubscribeNotas();
      unsubscribePagos();
    };
  },

  combinarClientesConNotas: () => {
    const { clientes, notasPendientes, pagosRealizados } = get();
    const mapaNotasPorCuenta = notasPendientes.reduce((acc, nota) => {
      const cuenta = nota.Cuenta?.trim();
      acc[cuenta] = acc[cuenta] || [];
      acc[cuenta].push(nota);
      return acc;
    }, {});

    const mapaPagados = pagosRealizados.reduce((acc, pago) => {
      const cuenta = pago.cuenta?.trim();
      acc[cuenta] = acc[cuenta] || [];
      acc[cuenta].push(pago);
      return acc;
    }, {});
    const clientesConNotas = clientes.map(cliente => {
      const cuentaCliente = cliente.Cuenta?.trim();
      return {
        ...cliente,
        NotasPendientes: mapaNotasPorCuenta[cuentaCliente] || [],
        PagosRealizados: mapaPagados[cuentaCliente] || [],
      };
    });

    set({ clientesConNotas });
    // console.log("Clientes con notas pendientes combinados y actualizados en el estado.");
  },

  updateNota: async (notaId, data) => {
    const notaRef = doc(db, 'notas_pendientes', notaId);
    await updateDoc(notaRef, data);
    console.log("Nota actualizada en Firestore.", notaRef.id);
  },

  agregarPago: async (pago) => {
    const pagosRealizados = collection(db, 'notas_cobradas');
    await addDoc(pagosRealizados, pago);
    // console.log("Pago agregado al estado.");
  },
}));

export default useStore;

import create from 'zustand'

const PaymentStore = create((set) => ({
  pagosRealizados: [],
  agregarPago: (nuevoPago) => set((state) => ({
    pagosRealizados: [...state.pagosRealizados, nuevoPago]
  })),
  eliminarPago: (numeroNota) => set((state) => ({
    pagosRealizados: state.pagosRealizados.filter(pago => pago.numeroNota !== numeroNota),
  })),
  borrarPagos: () => set(() => ({
    pagosRealizados: []
  }))
}))

export default PaymentStore;

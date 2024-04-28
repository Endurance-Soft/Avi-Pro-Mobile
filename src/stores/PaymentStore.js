import {create} from 'zustand'

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



// const factura = {
//   nombreEmpresa: "NOMBRE EMPRESA",
//   comprobanteDePago: "Comprobante de Pago",
//   cliente: {
//     nombre: "Jorge Herbas",
//     numeroCuenta: "201502651001"
//   },
//   notasPagadas: [
//     {
//       fecha: "12/05/24",
//       metodoPago: "Contado",
//       detalles: [
//         {
//           numeroNota: "R01210739",
//           fecha: "15/06",
//           monto: 2109.00,
//           saldo: 0.00
//         },
//         {
//           numeroNota: "R01210740",
//           fecha: "16/06",
//           monto: 109.00,
//           saldo: 1.00
//         },
//         {
//           numeroNota: "R01210740",
//           fecha: "16/07",
//           monto: 100.00,
//           saldo: 87.00
//         }
//       ]
//     }
//   ]
// };

// console.log(factura);


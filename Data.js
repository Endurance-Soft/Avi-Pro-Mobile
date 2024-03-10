const nombreClientes = [
    "Guadalupe José Eduardo Aponte",
    "Gloria Mario Samaniego Gastélum",
    "Agustín Nava",
    "Berta Julio Reynoso",
    "Isabela Cristal Mares",
    "José Eduardo Salcedo Nieto",
    "Porfirio Ávila",
    "Adán Serafín Alvarado Saavedra",
    "Socorro Gutiérrez",
    "Isaac María Eugenia Esparza Camarillo",
    "Minerva Hermelinda Correa",
    "Juan Tania Páez Mondragón",
    "Mitzy Muñiz Vélez",
    "Verónica Bahena",
    "Emiliano Coronado Santillán",
    "Dr. María José Apodaca",
    "Arcelia Abrego",
    "Karla Posada",
    "Alberto Camila Puente",
    "Amalia Hurtado Godínez",
    "Sonia Casares",
    "Sr(a). Rubén Gracia",
    "Enrique Meléndez Medina",
    "Marisol Centeno",
    "Minerva Gaytán",
    "Abril Espinoza Yáñez",
    "Perla Elena Piña Magaña",
    "Esteban Eloy Ontiveros",
    "Ariadna Abigail de la Garza",
    "Beatriz Nieto",
    "Mtro. Estela Grijalva",
    "María Eugenia Quiroz Benítez",
    "Mauro Enrique Ávalos Reyes",
    "Fidel Sepúlveda Jimínez",
    "Ing. Esmeralda Cabán",
    "Elisa Espinal Rivero",
    "Horacio Lara Sanabria",
    "Óliver de la O Corona",
    "Dr. Tomás Contreras",
    "Sr(a). Pamela Otero",
    "Estela Zepeda",
    "Lic. Esperanza Raya",
    "Gabriela Vallejo",
    "Mariano Briseño Valdés",
    "Carolina Madera",
    "Indira Espinosa",
    "Gabriela María Elena Avilés Amaya",
    "Virginia Guillermo Echeverría Viera",
    "Bernardo Alfonso Escamilla Quezada",
    "Julio Ballesteros Mata",
    "Antonia Gaitán",
    "Citlali Villareal Valladares",
    "Ing. Salvador Nieto",
    "Laura Arturo Pelayo",
    "Rubén Orellana",
    "Dolores Yeni Aparicio Cazares",
    "Hermelinda Gutiérrez Montaño",
    "Gabriela Puente",
    "Dr. Sara Montalvo",
    "Isaac Alejandro Malave Collazo",
    "Fidel Luevano Bonilla",
    "Sr(a). Pilar Márquez",
    "Paulina Meléndez",
    "Dr. Leonel de Jesús",
    "Jacinto Isabel Villalobos Escobar",
    "Ariadna Eugenia de la Garza",
    "Lic. Enrique Márquez",
    "Carmen Mascareñas Verdugo",
    "Antonia Julio César Alfaro Blanco",
    "Lic. Noelia Ávalos",
    "María Jonás Orozco",
    "Ing. Marcos Salcedo",
    "Tania Marco Antonio Chávez Ponce",
    "Roberto de la Crúz",
    "Ing. Benito Reyes",
    "Norma Dávila",
    "Bruno Esparta Garica Adame",
    "Dr. Gerardo Morales",
    "Dr. Emiliano Rosado"
];

const nombresCombradores = [
    "Jaqueline María del Carmen Ornelas Alarcón",
    "Lic. Marisela Beltrán",
    "Dulce María Augusto Tamayo",
    "Dr. Jacinto Solano",
    "Juan Carlos de la O Chapa",
    "Mtro. Julio César Ávila",
    "Humberto Castro Menchaca",
    "Abigail Adriana Nazario Hurtado",
    "Angélica Lucía Sanabria",
    "Sr(a). Marisol Zedillo",
    "Pamela Jaime Pichardo Corona",
    "Gabriela Camilo Acuña",
    "Eva Antonio Murillo Colón",
    "Mtro. Débora Garza",
    "Porfirio del Río",
    "Timoteo Mendoza Loya",
    "Esparta Pacheco",
    "Ing. Rolando Serrato",
    "Carmen Borrego Meza",
    "Sr(a). Aida Frías",
    "Antonia Natalia Matías"
];

const cobradores = [
    // Generar un cobrador_id único para cada cobrador.
    // Asignar un empresa_id a cada cobrador de forma que se distribuyan equitativamente entre los 3 IDs de empresa (por ejemplo, 1, 2, y 3).
    // Utilizar los nombres proporcionados en la lista nombresCombradores para cada cobrador.
    { cobrador_id: 1, empresa_id: 1, nombre: 'Jaqueline María del Carmen Ornelas Alarcón' },
    { cobrador_id: 2, empresa_id: 2, nombre: 'Lic. Marisela Beltrán' },
    { cobrador_id: 3, empresa_id: 3, nombre: 'Dulce María Augusto Tamayo' },
    { cobrador_id: 4, empresa_id: 1, nombre: 'Dr. Jacinto Solano' },
    { cobrador_id: 5, empresa_id: 2, nombre: 'Juan Carlos de la O Chapa' },
    { cobrador_id: 6, empresa_id: 3, nombre: 'Mtro. Julio César Ávila' },
    { cobrador_id: 7, empresa_id: 1, nombre: 'Humberto Castro Menchaca' },
    { cobrador_id: 8, empresa_id: 2, nombre: 'Abigail Adriana Nazario Hurtado' },
    { cobrador_id: 9, empresa_id: 3, nombre: 'Angélica Lucía Sanabria' },
    { cobrador_id: 10, empresa_id: 1, nombre: 'Sr(a). Marisol Zedillo' },
    { cobrador_id: 11, empresa_id: 2, nombre: 'Pamela Jaime Pichardo Corona' },
    { cobrador_id: 12, empresa_id: 3, nombre: 'Gabriela Camilo Acuña' },
    { cobrador_id: 13, empresa_id: 1, nombre: 'Eva Antonio Murillo Colón' },
    { cobrador_id: 14, empresa_id: 2, nombre: 'Mtro. Débora Garza' },
    { cobrador_id: 15, empresa_id: 3, nombre: 'Porfirio del Río' },
    { cobrador_id: 16, empresa_id: 1, nombre: 'Timoteo Mendoza Loya' },
    { cobrador_id: 17, empresa_id: 2, nombre: 'Esparta Pacheco' },
    { cobrador_id: 18, empresa_id: 3, nombre: 'Ing. Rolando Serrato' },
    { cobrador_id: 19, empresa_id: 1, nombre: 'Carmen Borrego Meza' },
    { cobrador_id: 20, empresa_id: 2, nombre: 'Sr(a). Aida Frías' },
    { cobrador_id: 21, empresa_id: 3, nombre: 'Antonia Natalia Matías' }
  ];

  const clientes = [
    //   cliente_id: Asignaremos un ID único a cada cliente.
    //   cobrador_id: Asignaremos a cada cliente un cobrador cuyo empresa_id coincida con el empresa_id del cliente. Esto implica que necesitamos hacer coincidir los cobradores con las empresas de los clientes de manera equitativa.
    //   cuenta: Generaremos un número de cuenta único de 14 dígitos para cada cliente.
    //   dirección: Por simplicidad, generaremos una dirección ficticia para cada cliente.
    //   empresa_id: Este debe coincidir con el empresa_id del cobrador asignado.
    //   nombre: Utilizaremos los nombres proporcionados en nombreClientes.
    //   sucursal_id: Asignaremos un número aleatorio de dos dígitos.
    //   telefono: Generaremos un número de teléfono ficticio para cada cliente.
    { cliente_id: 1, cobrador_id: 7, cuenta: '85581672134095', direccion: 'Calle Ficticia 1, Ciudad Imaginaria', empresa_id: 1, nombre: 'Guadalupe José Eduardo Aponte', sucursal_id: 53, telefono: '5550884288' },
    { cliente_id: 2, cobrador_id: 5, cuenta: '02853594576896', direccion: 'Calle Ficticia 2, Ciudad Imaginaria', empresa_id: 2, nombre: 'Gloria Mario Samaniego Gastélum', sucursal_id: 39, telefono: '5526788278' },
    { cliente_id: 3, cobrador_id: 9, cuenta: '88817307516087', direccion: 'Calle Ficticia 3, Ciudad Imaginaria', empresa_id: 3, nombre: 'Agustín Nava', sucursal_id: 35, telefono: '5520606295' },
    { cliente_id: 4, cobrador_id: 19, cuenta: '30697771157953', direccion: 'Calle Ficticia 4, Ciudad Imaginaria', empresa_id: 1, nombre: 'Berta Julio Reynoso', sucursal_id: 92, telefono: '5539898947' },
    { cliente_id: 5, cobrador_id: 20, cuenta: '83451576873380', direccion: 'Calle Ficticia 5, Ciudad Imaginaria', empresa_id: 2, nombre: 'Isabela Cristal Mares', sucursal_id: 46, telefono: '5581524548' },
    { cliente_id: 6, cobrador_id: 6, cuenta: '26066196748017', direccion: 'Calle Ficticia 6, Ciudad Imaginaria', empresa_id: 3, nombre: 'José Eduardo Salcedo Nieto', sucursal_id: 54, telefono: '5547168331' },
    { cliente_id: 7, cobrador_id: 13, cuenta: '86557324641850', direccion: 'Calle Ficticia 7, Ciudad Imaginaria', empresa_id: 1, nombre: 'Porfirio Ávila', sucursal_id: 64, telefono: '5591341639' },
    { cliente_id: 8, cobrador_id: 8, cuenta: '16993530395383', direccion: 'Calle Ficticia 8, Ciudad Imaginaria', empresa_id: 2, nombre: 'Adán Serafín Alvarado Saavedra', sucursal_id: 54, telefono: '5558213672' },
    { cliente_id: 9, cobrador_id: 12, cuenta: '44193092034007', direccion: 'Calle Ficticia 9, Ciudad Imaginaria', empresa_id: 3, nombre: 'Socorro Gutiérrez', sucursal_id: 78, telefono: '5573998829' },
    { cliente_id: 10, cobrador_id: 19, cuenta: '86356896053840', direccion: 'Calle Ficticia 10, Ciudad Imaginaria', empresa_id: 1, nombre: 'Isaac María Eugenia Esparza Camarillo', sucursal_id: 23, telefono: '5596644894' },
    { cliente_id: 11, cobrador_id: 17, cuenta: '99641252316156', direccion: 'Calle Ficticia 11, Ciudad Imaginaria', empresa_id: 2, nombre: 'Minerva Hermelinda Correa', sucursal_id: 48, telefono: '5557789101' },
    { cliente_id: 12, cobrador_id: 9, cuenta: '33746248125329', direccion: 'Calle Ficticia 12, Ciudad Imaginaria', empresa_id: 3, nombre: 'Juan Tania Páez Mondragón', sucursal_id: 10, telefono: '5595867722' },
    { cliente_id: 13, cobrador_id: 19, cuenta: '33295318103536', direccion: 'Calle Ficticia 13, Ciudad Imaginaria', empresa_id: 1, nombre: 'Mitzy Muñiz Vélez', sucursal_id: 15, telefono: '5575835333' },
    { cliente_id: 14, cobrador_id: 20, cuenta: '71112481648485', direccion: 'Calle Ficticia 14, Ciudad Imaginaria', empresa_id: 2, nombre: 'Verónica Bahena', sucursal_id: 62, telefono: '5528582967' },
    { cliente_id: 15, cobrador_id: 21, cuenta: '91270787446599', direccion: 'Calle Ficticia 15, Ciudad Imaginaria', empresa_id: 3, nombre: 'Emiliano Coronado Santillán', sucursal_id: 43, telefono: '5576016676' },
    { cliente_id: 16, cobrador_id: 7, cuenta: '12074298236150', direccion: 'Calle Ficticia 16, Ciudad Imaginaria', empresa_id: 1, nombre: 'Dr. María José Apodaca', sucursal_id: 98, telefono: '5565536470' },
    { cliente_id: 17, cobrador_id: 20, cuenta: '55897361757425', direccion: 'Calle Ficticia 17, Ciudad Imaginaria', empresa_id: 2, nombre: 'Arcelia Abrego', sucursal_id: 20, telefono: '5520876121' },
    { cliente_id: 18, cobrador_id: 12, cuenta: '58845282262368', direccion: 'Calle Ficticia 18, Ciudad Imaginaria', empresa_id: 3, nombre: 'Karla Posada', sucursal_id: 79, telefono: '5559197080' },
    { cliente_id: 19, cobrador_id: 10, cuenta: '87971836931388', direccion: 'Calle Ficticia 19, Ciudad Imaginaria', empresa_id: 1, nombre: 'Alberto Camila Puente', sucursal_id: 83, telefono: '5551383266' },
    { cliente_id: 20, cobrador_id: 17, cuenta: '86838056650736', direccion: 'Calle Ficticia 20, Ciudad Imaginaria', empresa_id: 2, nombre: 'Amalia Hurtado Godínez', sucursal_id: 36, telefono: '5562878211' },
    { cliente_id: 21, cobrador_id: 12, cuenta: '18323961263753', direccion: 'Calle Ficticia 21, Ciudad Imaginaria', empresa_id: 3, nombre: 'Sonia Casares', sucursal_id: 99, telefono: '5566626263' },
    { cliente_id: 22, cobrador_id: 10, cuenta: '35069737764238', direccion: 'Calle Ficticia 22, Ciudad Imaginaria', empresa_id: 1, nombre: 'Sr(a). Rubén Gracia', sucursal_id: 21, telefono: '5587187545' },
    { cliente_id: 23, cobrador_id: 11, cuenta: '91727145158394', direccion: 'Calle Ficticia 23, Ciudad Imaginaria', empresa_id: 2, nombre: 'Enrique Meléndez Medina', sucursal_id: 20, telefono: '5526611147' },
    { cliente_id: 24, cobrador_id: 9, cuenta: '03303120340249', direccion: 'Calle Ficticia 24, Ciudad Imaginaria', empresa_id: 3, nombre: 'Marisol Centeno', sucursal_id: 38, telefono: '5516881422' },
    { cliente_id: 25, cobrador_id: 10, cuenta: '98406541085378', direccion: 'Calle Ficticia 25, Ciudad Imaginaria', empresa_id: 1, nombre: 'Minerva Gaytán', sucursal_id: 38, telefono: '5591186850' },
    { cliente_id: 26, cobrador_id: 14, cuenta: '45565859002115', direccion: 'Calle Ficticia 26, Ciudad Imaginaria', empresa_id: 2, nombre: 'Abril Espinoza Yáñez', sucursal_id: 41, telefono: '5592123377' },
    { cliente_id: 27, cobrador_id: 3, cuenta: '07314242877286', direccion: 'Calle Ficticia 27, Ciudad Imaginaria', empresa_id: 3, nombre: 'Perla Elena Piña Magaña', sucursal_id: 99, telefono: '5525109597' },
    { cliente_id: 28, cobrador_id: 19, cuenta: '06037297725714', direccion: 'Calle Ficticia 28, Ciudad Imaginaria', empresa_id: 1, nombre: 'Esteban Eloy Ontiveros', sucursal_id: 37, telefono: '5552281258' },
    { cliente_id: 29, cobrador_id: 11, cuenta: '33088193573209', direccion: 'Calle Ficticia 29, Ciudad Imaginaria', empresa_id: 2, nombre: 'Ariadna Abigail de la Garza', sucursal_id: 62, telefono: '5575100439' },
    { cliente_id: 30, cobrador_id: 6, cuenta: '83093908002986', direccion: 'Calle Ficticia 30, Ciudad Imaginaria', empresa_id: 3, nombre: 'Beatriz Nieto', sucursal_id: 15, telefono: '5537628948' },
    { cliente_id: 31, cobrador_id: 10, cuenta: '72506973851484', direccion: 'Calle Ficticia 31, Ciudad Imaginaria', empresa_id: 1, nombre: 'Mtro. Estela Grijalva', sucursal_id: 23, telefono: '5589792095' },
    { cliente_id: 32, cobrador_id: 11, cuenta: '60622032969170', direccion: 'Calle Ficticia 32, Ciudad Imaginaria', empresa_id: 2, nombre: 'María Eugenia Quiroz Benítez', sucursal_id: 69, telefono: '5525709144' },
    { cliente_id: 33, cobrador_id: 3, cuenta: '49065507154437', direccion: 'Calle Ficticia 33, Ciudad Imaginaria', empresa_id: 3, nombre: 'Mauro Enrique Ávalos Reyes', sucursal_id: 61, telefono: '5593755942' },
    { cliente_id: 34, cobrador_id: 19, cuenta: '71894343251511', direccion: 'Calle Ficticia 34, Ciudad Imaginaria', empresa_id: 1, nombre: 'Fidel Sepúlveda Jimínez', sucursal_id: 62, telefono: '5518563051' },
    { cliente_id: 35, cobrador_id: 2, cuenta: '11549379548813', direccion: 'Calle Ficticia 35, Ciudad Imaginaria', empresa_id: 2, nombre: 'Ing. Esmeralda Cabán', sucursal_id: 40, telefono: '5587754185' },
    { cliente_id: 36, cobrador_id: 9, cuenta: '94915869820239', direccion: 'Calle Ficticia 36, Ciudad Imaginaria', empresa_id: 3, nombre: 'Elisa Espinal Rivero', sucursal_id: 98, telefono: '5585675054' },
    { cliente_id: 37, cobrador_id: 4, cuenta: '06563570434864', direccion: 'Calle Ficticia 37, Ciudad Imaginaria', empresa_id: 1, nombre: 'Horacio Lara Sanabria', sucursal_id: 61, telefono: '5555158110' },
    { cliente_id: 38, cobrador_id: 8, cuenta: '18741508875165', direccion: 'Calle Ficticia 38, Ciudad Imaginaria', empresa_id: 2, nombre: 'Óliver de la O Corona', sucursal_id: 90, telefono: '5534347193' },
    { cliente_id: 39, cobrador_id: 18, cuenta: '97769954341686', direccion: 'Calle Ficticia 39, Ciudad Imaginaria', empresa_id: 3, nombre: 'Dr. Tomás Contreras', sucursal_id: 49, telefono: '5528049727' },
    { cliente_id: 40, cobrador_id: 10, cuenta: '94905908205551', direccion: 'Calle Ficticia 40, Ciudad Imaginaria', empresa_id: 1, nombre: 'Sr(a). Pamela Otero', sucursal_id: 31, telefono: '5583347233' },
    { cliente_id: 41, cobrador_id: 8, cuenta: '04716656299236', direccion: 'Calle Ficticia 41, Ciudad Imaginaria', empresa_id: 2, nombre: 'Estela Zepeda', sucursal_id: 37, telefono: '5560208582' },
    { cliente_id: 42, cobrador_id: 18, cuenta: '87804692489348', direccion: 'Calle Ficticia 42, Ciudad Imaginaria', empresa_id: 3, nombre: 'Lic. Esperanza Raya', sucursal_id: 31, telefono: '5566454312' },
    { cliente_id: 43, cobrador_id: 10, cuenta: '53082870209961', direccion: 'Calle Ficticia 43, Ciudad Imaginaria', empresa_id: 1, nombre: 'Gabriela Vallejo', sucursal_id: 75, telefono: '5560673383' },
    { cliente_id: 44, cobrador_id: 2, cuenta: '51566085245812', direccion: 'Calle Ficticia 44, Ciudad Imaginaria', empresa_id: 2, nombre: 'Mariano Briseño Valdés', sucursal_id: 29, telefono: '5569500291' },
    { cliente_id: 45, cobrador_id: 18, cuenta: '55882525143052', direccion: 'Calle Ficticia 45, Ciudad Imaginaria', empresa_id: 3, nombre: 'Carolina Madera', sucursal_id: 46, telefono: '5555870339' },
    { cliente_id: 46, cobrador_id: 16, cuenta: '07064888336947', direccion: 'Calle Ficticia 46, Ciudad Imaginaria', empresa_id: 1, nombre: 'Indira Espinosa', sucursal_id: 68, telefono: '5575672754' },
    { cliente_id: 47, cobrador_id: 5, cuenta: '48398214864259', direccion: 'Calle Ficticia 47, Ciudad Imaginaria', empresa_id: 2, nombre: 'Gabriela María Elena Avilés Amaya', sucursal_id: 68, telefono: '5525473103' },
    { cliente_id: 48, cobrador_id: 15, cuenta: '94488253894481', direccion: 'Calle Ficticia 48, Ciudad Imaginaria', empresa_id: 3, nombre: 'Virginia Guillermo Echeverría Viera', sucursal_id: 30, telefono: '5558359777' },
    { cliente_id: 49, cobrador_id: 1, cuenta: '24282550043508', direccion: 'Calle Ficticia 49, Ciudad Imaginaria', empresa_id: 1, nombre: 'Bernardo Alfonso Escamilla Quezada', sucursal_id: 73, telefono: '5576903251' },
    { cliente_id: 50, cobrador_id: 17, cuenta: '88094920835195', direccion: 'Calle Ficticia 50, Ciudad Imaginaria', empresa_id: 2, nombre: 'Julio Ballesteros Mata', sucursal_id: 44, telefono: '5549283885' },
    { cliente_id: 51, cobrador_id: 12, cuenta: '53579765833139', direccion: 'Calle Ficticia 51, Ciudad Imaginaria', empresa_id: 3, nombre: 'Antonia Gaitán', sucursal_id: 25, telefono: '5531906322' },
    { cliente_id: 52, cobrador_id: 4, cuenta: '88272977701671', direccion: 'Calle Ficticia 52, Ciudad Imaginaria', empresa_id: 1, nombre: 'Citlali Villareal Valladares', sucursal_id: 14, telefono: '5554185787' },
    { cliente_id: 53, cobrador_id: 17, cuenta: '49428490735445', direccion: 'Calle Ficticia 53, Ciudad Imaginaria', empresa_id: 2, nombre: 'Ing. Salvador Nieto', sucursal_id: 96, telefono: '5598927612' },
    { cliente_id: 54, cobrador_id: 6, cuenta: '01557261671482', direccion: 'Calle Ficticia 54, Ciudad Imaginaria', empresa_id: 3, nombre: 'Laura Arturo Pelayo', sucursal_id: 36, telefono: '5591456348' },
    { cliente_id: 55, cobrador_id: 10, cuenta: '38329729784984', direccion: 'Calle Ficticia 55, Ciudad Imaginaria', empresa_id: 1, nombre: 'Rubén Orellana', sucursal_id: 34, telefono: '5574608568' },
    { cliente_id: 56, cobrador_id: 14, cuenta: '88116448012554', direccion: 'Calle Ficticia 56, Ciudad Imaginaria', empresa_id: 2, nombre: 'Dolores Yeni Aparicio Cazares', sucursal_id: 43, telefono: '5515445167' },
    { cliente_id: 57, cobrador_id: 6, cuenta: '80260747063038', direccion: 'Calle Ficticia 57, Ciudad Imaginaria', empresa_id: 3, nombre: 'Hermelinda Gutiérrez Montaño', sucursal_id: 77, telefono: '5534867644' },
    { cliente_id: 58, cobrador_id: 4, cuenta: '68104869618787', direccion: 'Calle Ficticia 58, Ciudad Imaginaria', empresa_id: 1, nombre: 'Gabriela Puente', sucursal_id: 10, telefono: '5564303851' },
    { cliente_id: 59, cobrador_id: 11, cuenta: '57522110749531', direccion: 'Calle Ficticia 59, Ciudad Imaginaria', empresa_id: 2, nombre: 'Dr. Sara Montalvo', sucursal_id: 32, telefono: '5518650051' },
    { cliente_id: 60, cobrador_id: 12, cuenta: '83844152428856', direccion: 'Calle Ficticia 60, Ciudad Imaginaria', empresa_id: 3, nombre: 'Isaac Alejandro Malave Collazo', sucursal_id: 56, telefono: '5521292705' },
    { cliente_id: 61, cobrador_id: 4, cuenta: '93107914372534', direccion: 'Calle Ficticia 61, Ciudad Imaginaria', empresa_id: 1, nombre: 'Fidel Luevano Bonilla', sucursal_id: 96, telefono: '5518098462' },
    { cliente_id: 62, cobrador_id: 2, cuenta: '19922118568807', direccion: 'Calle Ficticia 62, Ciudad Imaginaria', empresa_id: 2, nombre: 'Sr(a). Pilar Márquez', sucursal_id: 70, telefono: '5554569880' },
    { cliente_id: 63, cobrador_id: 12, cuenta: '76457289751336', direccion: 'Calle Ficticia 63, Ciudad Imaginaria', empresa_id: 3, nombre: 'Paulina Meléndez', sucursal_id: 28, telefono: '5596920265' },
    { cliente_id: 64, cobrador_id: 19, cuenta: '51718935646315', direccion: 'Calle Ficticia 64, Ciudad Imaginaria', empresa_id: 1, nombre: 'Dr. Leonel de Jesús', sucursal_id: 79, telefono: '5592075292' },
    { cliente_id: 65, cobrador_id: 20, cuenta: '51980138521642', direccion: 'Calle Ficticia 65, Ciudad Imaginaria', empresa_id: 2, nombre: 'Jacinto Isabel Villalobos Escobar', sucursal_id: 79, telefono: '5584278459' },
    { cliente_id: 66, cobrador_id: 9, cuenta: '41155022968257', direccion: 'Calle Ficticia 66, Ciudad Imaginaria', empresa_id: 3, nombre: 'Ariadna Eugenia de la Garza', sucursal_id: 22, telefono: '5571059573' },
    { cliente_id: 67, cobrador_id: 19, cuenta: '76600275695933', direccion: 'Calle Ficticia 67, Ciudad Imaginaria', empresa_id: 1, nombre: 'Lic. Enrique Márquez', sucursal_id: 14, telefono: '5592550345' },
    { cliente_id: 68, cobrador_id: 17, cuenta: '44835665460708', direccion: 'Calle Ficticia 68, Ciudad Imaginaria', empresa_id: 2, nombre: 'Carmen Mascareñas Verdugo', sucursal_id: 40, telefono: '5520585694' },
    { cliente_id: 69, cobrador_id: 15, cuenta: '23752528320120', direccion: 'Calle Ficticia 69, Ciudad Imaginaria', empresa_id: 3, nombre: 'Antonia Julio César Alfaro Blanco', sucursal_id: 19, telefono: '5539765498' },
    { cliente_id: 70, cobrador_id: 4, cuenta: '98394608510604', direccion: 'Calle Ficticia 70, Ciudad Imaginaria', empresa_id: 1, nombre: 'Lic. Noelia Ávalos', sucursal_id: 22, telefono: '5572458520' },
    { cliente_id: 71, cobrador_id: 14, cuenta: '25403501503415', direccion: 'Calle Ficticia 71, Ciudad Imaginaria', empresa_id: 2, nombre: 'María Jonás Orozco', sucursal_id: 45, telefono: '5553177359' },
    { cliente_id: 72, cobrador_id: 9, cuenta: '11937002640491', direccion: 'Calle Ficticia 72, Ciudad Imaginaria', empresa_id: 3, nombre: 'Ing. Marcos Salcedo', sucursal_id: 22, telefono: '5556972268' },
    { cliente_id: 73, cobrador_id: 4, cuenta: '84934339449986', direccion: 'Calle Ficticia 73, Ciudad Imaginaria', empresa_id: 1, nombre: 'Tania Marco Antonio Chávez Ponce', sucursal_id: 11, telefono: '5524716084' },
    { cliente_id: 74, cobrador_id: 20, cuenta: '24406548351864', direccion: 'Calle Ficticia 74, Ciudad Imaginaria', empresa_id: 2, nombre: 'Roberto de la Crúz', sucursal_id: 83, telefono: '5546778200' },
    { cliente_id: 75, cobrador_id: 3, cuenta: '46107021323092', direccion: 'Calle Ficticia 75, Ciudad Imaginaria', empresa_id: 3, nombre: 'Ing. Benito Reyes', sucursal_id: 89, telefono: '5568327912' },
    { cliente_id: 76, cobrador_id: 1, cuenta: '24330139022578', direccion: 'Calle Ficticia 76, Ciudad Imaginaria', empresa_id: 1, nombre: 'Norma Dávila', sucursal_id: 55, telefono: '5560661480' },
    { cliente_id: 77, cobrador_id: 17, cuenta: '89684726426024', direccion: 'Calle Ficticia 77, Ciudad Imaginaria', empresa_id: 2, nombre: 'Bruno Esparta Garica Adame', sucursal_id: 49, telefono: '5515371059' },
    { cliente_id: 78, cobrador_id: 18, cuenta: '12236776862749', direccion: 'Calle Ficticia 78, Ciudad Imaginaria', empresa_id: 3, nombre: 'Dr. Gerardo Morales', sucursal_id: 25, telefono: '5532211783' },
    { cliente_id: 79, cobrador_id: 16, cuenta: '43470520889259', direccion: 'Calle Ficticia 79, Ciudad Imaginaria', empresa_id: 1, nombre: 'Dr. Emiliano Rosado', sucursal_id: 11, telefono: '5526277552' }
  ];


  const notas_pendientes = [
    { cliente_id: 1, empresa_id: 1, fecha: '2022-09-17', fecha_vence: '2022-12-16', fecha_venta: '2022-09-17', importe_nota: 305.15, monto_pagado: 0, nro_nota: 1, saldo_pendiente: 305.15, sucursal_id: 47 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2023-06-21', fecha_vence: '2023-09-19', fecha_venta: '2023-06-21', importe_nota: 513.96, monto_pagado: 141.83, nro_nota: 2, saldo_pendiente: 372.13, sucursal_id: 88 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2024-01-22', fecha_vence: '2024-04-21', fecha_venta: '2024-01-22', importe_nota: 463.4, monto_pagado: 0, nro_nota: 3, saldo_pendiente: 463.4, sucursal_id: 38 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2023-05-12', fecha_vence: '2023-08-10', fecha_venta: '2023-05-12', importe_nota: 305.8, monto_pagado: 0, nro_nota: 4, saldo_pendiente: 305.8, sucursal_id: 59 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2024-01-21', fecha_vence: '2024-04-20', fecha_venta: '2024-01-21', importe_nota: 606.83, monto_pagado: 552.87, nro_nota: 5, saldo_pendiente: 53.96, sucursal_id: 36 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2022-06-16', fecha_vence: '2022-09-14', fecha_venta: '2022-06-16', importe_nota: 503.63, monto_pagado: 0, nro_nota: 6, saldo_pendiente: 503.63, sucursal_id: 51 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2023-02-12', fecha_vence: '2023-05-13', fecha_venta: '2023-02-12', importe_nota: 539.85, monto_pagado: 0, nro_nota: 7, saldo_pendiente: 539.85, sucursal_id: 68 }
    ,{ cliente_id: 1, empresa_id: 1, fecha: '2023-12-23', fecha_vence: '2024-03-22', fecha_venta: '2023-12-23', importe_nota: 585.59, monto_pagado: 0, nro_nota: 8, saldo_pendiente: 585.59, sucursal_id: 70 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2022-06-22', fecha_vence: '2022-09-20', fecha_venta: '2022-06-22', importe_nota: 339.14, monto_pagado: 0, nro_nota: 9, saldo_pendiente: 339.14, sucursal_id: 40 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2023-12-13', fecha_vence: '2024-03-12', fecha_venta: '2023-12-13', importe_nota: 731.02, monto_pagado: 0, nro_nota: 10, saldo_pendiente: 731.02, sucursal_id: 76 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2023-09-24', fecha_vence: '2023-12-23', fecha_venta: '2023-09-24', importe_nota: 796.06, monto_pagado: 66.31, nro_nota: 11, saldo_pendiente: 729.75, sucursal_id: 28 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2022-07-30', fecha_vence: '2022-10-28', fecha_venta: '2022-07-30', importe_nota: 505.04, monto_pagado: 179.24, nro_nota: 12, saldo_pendiente: 325.8, sucursal_id: 93 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2023-06-21', fecha_vence: '2023-09-19', fecha_venta: '2023-06-21', importe_nota: 771.58, monto_pagado: 0, nro_nota: 13, saldo_pendiente: 771.58, sucursal_id: 50 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2023-12-22', fecha_vence: '2024-03-21', fecha_venta: '2023-12-22', importe_nota: 239.59, monto_pagado: 202.4, nro_nota: 14, saldo_pendiente: 37.19, sucursal_id: 76 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2022-12-11', fecha_vence: '2023-03-11', fecha_venta: '2022-12-11', importe_nota: 259.32, monto_pagado: 0, nro_nota: 15, saldo_pendiente: 259.32, sucursal_id: 49 }
    ,{ cliente_id: 4, empresa_id: 1, fecha: '2022-03-13', fecha_vence: '2022-06-11', fecha_venta: '2022-03-13', importe_nota: 771.09, monto_pagado: 0, nro_nota: 16, saldo_pendiente: 771.09, sucursal_id: 92 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2022-08-18', fecha_vence: '2022-11-16', fecha_venta: '2022-08-18', importe_nota: 177.35, monto_pagado: 0, nro_nota: 17, saldo_pendiente: 177.35, sucursal_id: 64 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2023-07-11', fecha_vence: '2023-10-09', fecha_venta: '2023-07-11', importe_nota: 219.81, monto_pagado: 0, nro_nota: 18, saldo_pendiente: 219.81, sucursal_id: 27 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2022-05-29', fecha_vence: '2022-08-27', fecha_venta: '2022-05-29', importe_nota: 245.08, monto_pagado: 0, nro_nota: 19, saldo_pendiente: 245.08, sucursal_id: 66 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2023-11-17', fecha_vence: '2024-02-15', fecha_venta: '2023-11-17', importe_nota: 510.91, monto_pagado: 485.53, nro_nota: 20, saldo_pendiente: 25.38, sucursal_id: 36 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2023-12-05', fecha_vence: '2024-03-04', fecha_venta: '2023-12-05', importe_nota: 552.65, monto_pagado: 0, nro_nota: 21, saldo_pendiente: 552.65, sucursal_id: 48 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2024-03-02', fecha_vence: '2024-05-31', fecha_venta: '2024-03-02', importe_nota: 557.38, monto_pagado: 0, nro_nota: 22, saldo_pendiente: 557.38, sucursal_id: 40 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2022-08-29', fecha_vence: '2022-11-27', fecha_venta: '2022-08-29', importe_nota: 636.47, monto_pagado: 0, nro_nota: 23, saldo_pendiente: 636.47, sucursal_id: 20 }
    ,{ cliente_id: 7, empresa_id: 1, fecha: '2022-05-19', fecha_vence: '2022-08-17', fecha_venta: '2022-05-19', importe_nota: 636.32, monto_pagado: 0, nro_nota: 24, saldo_pendiente: 636.32, sucursal_id: 96 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2023-08-01', fecha_vence: '2023-10-30', fecha_venta: '2023-08-01', importe_nota: 510.38, monto_pagado: 0, nro_nota: 25, saldo_pendiente: 510.38, sucursal_id: 54 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2023-11-30', fecha_vence: '2024-02-28', fecha_venta: '2023-11-30', importe_nota: 460.63, monto_pagado: 0, nro_nota: 26, saldo_pendiente: 460.63, sucursal_id: 12 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2022-03-14', fecha_vence: '2022-06-12', fecha_venta: '2022-03-14', importe_nota: 359.35, monto_pagado: 0, nro_nota: 27, saldo_pendiente: 359.35, sucursal_id: 78 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2023-10-05', fecha_vence: '2024-01-03', fecha_venta: '2023-10-05', importe_nota: 257.45, monto_pagado: 0, nro_nota: 28, saldo_pendiente: 257.45, sucursal_id: 24 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2022-03-29', fecha_vence: '2022-06-27', fecha_venta: '2022-03-29', importe_nota: 270.77, monto_pagado: 0, nro_nota: 29, saldo_pendiente: 270.77, sucursal_id: 73 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2023-06-30', fecha_vence: '2023-09-28', fecha_venta: '2023-06-30', importe_nota: 653.31, monto_pagado: 0, nro_nota: 30, saldo_pendiente: 653.31, sucursal_id: 66 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2022-06-14', fecha_vence: '2022-09-12', fecha_venta: '2022-06-14', importe_nota: 694.38, monto_pagado: 0, nro_nota: 31, saldo_pendiente: 694.38, sucursal_id: 74 }
    ,{ cliente_id: 10, empresa_id: 1, fecha: '2023-10-19', fecha_vence: '2024-01-17', fecha_venta: '2023-10-19', importe_nota: 366.36, monto_pagado: 0, nro_nota: 32, saldo_pendiente: 366.36, sucursal_id: 20 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2023-08-10', fecha_vence: '2023-11-08', fecha_venta: '2023-08-10', importe_nota: 181.4, monto_pagado: 0, nro_nota: 33, saldo_pendiente: 181.4, sucursal_id: 28 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2024-02-19', fecha_vence: '2024-05-19', fecha_venta: '2024-02-19', importe_nota: 185.54, monto_pagado: 0, nro_nota: 34, saldo_pendiente: 185.54, sucursal_id: 72 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2023-06-09', fecha_vence: '2023-09-07', fecha_venta: '2023-06-09', importe_nota: 741.84, monto_pagado: 0, nro_nota: 35, saldo_pendiente: 741.84, sucursal_id: 51 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2023-09-24', fecha_vence: '2023-12-23', fecha_venta: '2023-09-24', importe_nota: 345.35, monto_pagado: 0, nro_nota: 36, saldo_pendiente: 345.35, sucursal_id: 81 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2022-12-27', fecha_vence: '2023-03-27', fecha_venta: '2022-12-27', importe_nota: 616.36, monto_pagado: 408.45, nro_nota: 37, saldo_pendiente: 207.91, sucursal_id: 93 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2022-03-27', fecha_vence: '2022-06-25', fecha_venta: '2022-03-27', importe_nota: 530.94, monto_pagado: 0, nro_nota: 38, saldo_pendiente: 530.94, sucursal_id: 34 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2023-01-09', fecha_vence: '2023-04-09', fecha_venta: '2023-01-09', importe_nota: 394.35, monto_pagado: 11.16, nro_nota: 39, saldo_pendiente: 383.19, sucursal_id: 96 }
    ,{ cliente_id: 13, empresa_id: 1, fecha: '2022-05-03', fecha_vence: '2022-08-01', fecha_venta: '2022-05-03', importe_nota: 153.33, monto_pagado: 0, nro_nota: 40, saldo_pendiente: 153.33, sucursal_id: 83 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2022-03-31', fecha_vence: '2022-06-29', fecha_venta: '2022-03-31', importe_nota: 431.91, monto_pagado: 0, nro_nota: 41, saldo_pendiente: 431.91, sucursal_id: 26 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2023-08-08', fecha_vence: '2023-11-06', fecha_venta: '2023-08-08', importe_nota: 226.26, monto_pagado: 0, nro_nota: 42, saldo_pendiente: 226.26, sucursal_id: 14 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2022-08-22', fecha_vence: '2022-11-20', fecha_venta: '2022-08-22', importe_nota: 631.98, monto_pagado: 0, nro_nota: 43, saldo_pendiente: 631.98, sucursal_id: 76 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2023-12-08', fecha_vence: '2024-03-07', fecha_venta: '2023-12-08', importe_nota: 175.31, monto_pagado: 0, nro_nota: 44, saldo_pendiente: 175.31, sucursal_id: 92 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2023-03-03', fecha_vence: '2023-06-01', fecha_venta: '2023-03-03', importe_nota: 291.66, monto_pagado: 0, nro_nota: 45, saldo_pendiente: 291.66, sucursal_id: 55 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2022-11-17', fecha_vence: '2023-02-15', fecha_venta: '2022-11-17', importe_nota: 171.59, monto_pagado: 97.11, nro_nota: 46, saldo_pendiente: 74.48, sucursal_id: 42 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2022-04-01', fecha_vence: '2022-06-30', fecha_venta: '2022-04-01', importe_nota: 362.25, monto_pagado: 0, nro_nota: 47, saldo_pendiente: 362.25, sucursal_id: 28 }
    ,{ cliente_id: 16, empresa_id: 1, fecha: '2022-11-09', fecha_vence: '2023-02-07', fecha_venta: '2022-11-09', importe_nota: 174.31, monto_pagado: 0, nro_nota: 48, saldo_pendiente: 174.31, sucursal_id: 79 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2023-12-11', fecha_vence: '2024-03-10', fecha_venta: '2023-12-11', importe_nota: 309.62, monto_pagado: 0, nro_nota: 49, saldo_pendiente: 309.62, sucursal_id: 21 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2023-01-19', fecha_vence: '2023-04-19', fecha_venta: '2023-01-19', importe_nota: 326.77, monto_pagado: 249.12, nro_nota: 50, saldo_pendiente: 77.65, sucursal_id: 45 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2022-12-13', fecha_vence: '2023-03-13', fecha_venta: '2022-12-13', importe_nota: 275.2, monto_pagado: 0, nro_nota: 51, saldo_pendiente: 275.2, sucursal_id: 63 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2022-05-23', fecha_vence: '2022-08-21', fecha_venta: '2022-05-23', importe_nota: 316.4, monto_pagado: 267.33, nro_nota: 52, saldo_pendiente: 49.07, sucursal_id: 62 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2022-09-12', fecha_vence: '2022-12-11', fecha_venta: '2022-09-12', importe_nota: 285.15, monto_pagado: 0, nro_nota: 53, saldo_pendiente: 285.15, sucursal_id: 56 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2022-08-09', fecha_vence: '2022-11-07', fecha_venta: '2022-08-09', importe_nota: 220.33, monto_pagado: 0, nro_nota: 54, saldo_pendiente: 220.33, sucursal_id: 91 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2023-02-14', fecha_vence: '2023-05-15', fecha_venta: '2023-02-14', importe_nota: 629.36, monto_pagado: 0, nro_nota: 55, saldo_pendiente: 629.36, sucursal_id: 89 }
    ,{ cliente_id: 19, empresa_id: 1, fecha: '2023-04-28', fecha_vence: '2023-07-27', fecha_venta: '2023-04-28', importe_nota: 618.28, monto_pagado: 276.27, nro_nota: 56, saldo_pendiente: 342.01, sucursal_id: 41 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-01-11', fecha_vence: '2023-04-11', fecha_venta: '2023-01-11', importe_nota: 416.25, monto_pagado: 97.17, nro_nota: 57, saldo_pendiente: 319.08, sucursal_id: 93 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2022-03-28', fecha_vence: '2022-06-26', fecha_venta: '2022-03-28', importe_nota: 577.8, monto_pagado: 0, nro_nota: 58, saldo_pendiente: 577.8, sucursal_id: 93 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-02-27', fecha_vence: '2023-05-28', fecha_venta: '2023-02-27', importe_nota: 404.36, monto_pagado: 307.61, nro_nota: 59, saldo_pendiente: 96.75, sucursal_id: 44 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2022-06-07', fecha_vence: '2022-09-05', fecha_venta: '2022-06-07', importe_nota: 689.43, monto_pagado: 0, nro_nota: 60, saldo_pendiente: 689.43, sucursal_id: 64 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-09-15', fecha_vence: '2023-12-14', fecha_venta: '2023-09-15', importe_nota: 490.42, monto_pagado: 0, nro_nota: 61, saldo_pendiente: 490.42, sucursal_id: 73 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-09-21', fecha_vence: '2023-12-20', fecha_venta: '2023-09-21', importe_nota: 427.54, monto_pagado: 0, nro_nota: 62, saldo_pendiente: 427.54, sucursal_id: 89 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-07-08', fecha_vence: '2023-10-06', fecha_venta: '2023-07-08', importe_nota: 688.18, monto_pagado: 0, nro_nota: 63, saldo_pendiente: 688.18, sucursal_id: 75 }
    ,{ cliente_id: 22, empresa_id: 1, fecha: '2023-07-29', fecha_vence: '2023-10-27', fecha_venta: '2023-07-29', importe_nota: 452.27, monto_pagado: 0, nro_nota: 64, saldo_pendiente: 452.27, sucursal_id: 66 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2022-09-27', fecha_vence: '2022-12-26', fecha_venta: '2022-09-27', importe_nota: 609.79, monto_pagado: 0, nro_nota: 65, saldo_pendiente: 609.79, sucursal_id: 48 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2022-09-22', fecha_vence: '2022-12-21', fecha_venta: '2022-09-22', importe_nota: 563.96, monto_pagado: 0, nro_nota: 66, saldo_pendiente: 563.96, sucursal_id: 47 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2024-02-15', fecha_vence: '2024-05-15', fecha_venta: '2024-02-15', importe_nota: 703.25, monto_pagado: 0, nro_nota: 67, saldo_pendiente: 703.25, sucursal_id: 99 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2023-10-23', fecha_vence: '2024-01-21', fecha_venta: '2023-10-23', importe_nota: 401.67, monto_pagado: 0, nro_nota: 68, saldo_pendiente: 401.67, sucursal_id: 89 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2023-06-26', fecha_vence: '2023-09-24', fecha_venta: '2023-06-26', importe_nota: 432.04, monto_pagado: 154.0, nro_nota: 69, saldo_pendiente: 278.04, sucursal_id: 60 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2023-02-11', fecha_vence: '2023-05-12', fecha_venta: '2023-02-11', importe_nota: 269.13, monto_pagado: 0, nro_nota: 70, saldo_pendiente: 269.13, sucursal_id: 96 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2022-03-20', fecha_vence: '2022-06-18', fecha_venta: '2022-03-20', importe_nota: 709.48, monto_pagado: 0, nro_nota: 71, saldo_pendiente: 709.48, sucursal_id: 32 }
    ,{ cliente_id: 25, empresa_id: 1, fecha: '2023-01-15', fecha_vence: '2023-04-15', fecha_venta: '2023-01-15', importe_nota: 296.27, monto_pagado: 0, nro_nota: 72, saldo_pendiente: 296.27, sucursal_id: 33 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-01-02', fecha_vence: '2023-04-02', fecha_venta: '2023-01-02', importe_nota: 426.87, monto_pagado: 291.97, nro_nota: 73, saldo_pendiente: 134.9, sucursal_id: 73 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-06-12', fecha_vence: '2023-09-10', fecha_venta: '2023-06-12', importe_nota: 533.34, monto_pagado: 333.45, nro_nota: 74, saldo_pendiente: 199.89, sucursal_id: 12 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-11-20', fecha_vence: '2024-02-18', fecha_venta: '2023-11-20', importe_nota: 364.59, monto_pagado: 0, nro_nota: 75, saldo_pendiente: 364.59, sucursal_id: 51 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2024-02-05', fecha_vence: '2024-05-05', fecha_venta: '2024-02-05', importe_nota: 359.57, monto_pagado: 0, nro_nota: 76, saldo_pendiente: 359.57, sucursal_id: 84 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-04-25', fecha_vence: '2023-07-24', fecha_venta: '2023-04-25', importe_nota: 721.92, monto_pagado: 0, nro_nota: 77, saldo_pendiente: 721.92, sucursal_id: 32 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-05-23', fecha_vence: '2023-08-21', fecha_venta: '2023-05-23', importe_nota: 153.55, monto_pagado: 0, nro_nota: 78, saldo_pendiente: 153.55, sucursal_id: 71 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2022-06-05', fecha_vence: '2022-09-03', fecha_venta: '2022-06-05', importe_nota: 297.67, monto_pagado: 87.95, nro_nota: 79, saldo_pendiente: 209.72, sucursal_id: 58 }
    ,{ cliente_id: 28, empresa_id: 1, fecha: '2023-12-21', fecha_vence: '2024-03-20', fecha_venta: '2023-12-21', importe_nota: 306.44, monto_pagado: 0, nro_nota: 80, saldo_pendiente: 306.44, sucursal_id: 81 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2022-04-28', fecha_vence: '2022-07-27', fecha_venta: '2022-04-28', importe_nota: 501.15, monto_pagado: 0, nro_nota: 81, saldo_pendiente: 501.15, sucursal_id: 78 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2022-07-18', fecha_vence: '2022-10-16', fecha_venta: '2022-07-18', importe_nota: 245.74, monto_pagado: 0, nro_nota: 82, saldo_pendiente: 245.74, sucursal_id: 12 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2023-06-07', fecha_vence: '2023-09-05', fecha_venta: '2023-06-07', importe_nota: 258.89, monto_pagado: 0, nro_nota: 83, saldo_pendiente: 258.89, sucursal_id: 65 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2023-06-24', fecha_vence: '2023-09-22', fecha_venta: '2023-06-24', importe_nota: 252.78, monto_pagado: 0, nro_nota: 84, saldo_pendiente: 252.78, sucursal_id: 66 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2023-05-11', fecha_vence: '2023-08-09', fecha_venta: '2023-05-11', importe_nota: 598.42, monto_pagado: 0, nro_nota: 85, saldo_pendiente: 598.42, sucursal_id: 24 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2022-07-31', fecha_vence: '2022-10-29', fecha_venta: '2022-07-31', importe_nota: 755.18, monto_pagado: 0, nro_nota: 86, saldo_pendiente: 755.18, sucursal_id: 89 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2023-07-13', fecha_vence: '2023-10-11', fecha_venta: '2023-07-13', importe_nota: 698.29, monto_pagado: 0, nro_nota: 87, saldo_pendiente: 698.29, sucursal_id: 98 }
    ,{ cliente_id: 31, empresa_id: 1, fecha: '2023-06-08', fecha_vence: '2023-09-06', fecha_venta: '2023-06-08', importe_nota: 195.74, monto_pagado: 0, nro_nota: 88, saldo_pendiente: 195.74, sucursal_id: 76 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2023-06-09', fecha_vence: '2023-09-07', fecha_venta: '2023-06-09', importe_nota: 696.24, monto_pagado: 0, nro_nota: 89, saldo_pendiente: 696.24, sucursal_id: 86 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2023-07-23', fecha_vence: '2023-10-21', fecha_venta: '2023-07-23', importe_nota: 761.02, monto_pagado: 0, nro_nota: 90, saldo_pendiente: 761.02, sucursal_id: 28 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2023-10-03', fecha_vence: '2024-01-01', fecha_venta: '2023-10-03', importe_nota: 619.2, monto_pagado: 0, nro_nota: 91, saldo_pendiente: 619.2, sucursal_id: 32 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2022-11-06', fecha_vence: '2023-02-04', fecha_venta: '2022-11-06', importe_nota: 300.17, monto_pagado: 0, nro_nota: 92, saldo_pendiente: 300.17, sucursal_id: 54 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2024-01-12', fecha_vence: '2024-04-11', fecha_venta: '2024-01-12', importe_nota: 790.0, monto_pagado: 0, nro_nota: 93, saldo_pendiente: 790.0, sucursal_id: 53 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2023-04-06', fecha_vence: '2023-07-05', fecha_venta: '2023-04-06', importe_nota: 196.62, monto_pagado: 0, nro_nota: 94, saldo_pendiente: 196.62, sucursal_id: 67 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2023-01-16', fecha_vence: '2023-04-16', fecha_venta: '2023-01-16', importe_nota: 451.91, monto_pagado: 0, nro_nota: 95, saldo_pendiente: 451.91, sucursal_id: 11 }
    ,{ cliente_id: 34, empresa_id: 1, fecha: '2022-09-07', fecha_vence: '2022-12-06', fecha_venta: '2022-09-07', importe_nota: 430.61, monto_pagado: 98.57, nro_nota: 96, saldo_pendiente: 332.04, sucursal_id: 68 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2023-08-30', fecha_vence: '2023-11-28', fecha_venta: '2023-08-30', importe_nota: 512.85, monto_pagado: 0, nro_nota: 97, saldo_pendiente: 512.85, sucursal_id: 53 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2022-06-14', fecha_vence: '2022-09-12', fecha_venta: '2022-06-14', importe_nota: 749.64, monto_pagado: 0, nro_nota: 98, saldo_pendiente: 749.64, sucursal_id: 69 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2022-09-19', fecha_vence: '2022-12-18', fecha_venta: '2022-09-19', importe_nota: 394.02, monto_pagado: 0, nro_nota: 99, saldo_pendiente: 394.02, sucursal_id: 14 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2023-02-27', fecha_vence: '2023-05-28', fecha_venta: '2023-02-27', importe_nota: 219.08, monto_pagado: 0, nro_nota: 100, saldo_pendiente: 219.08, sucursal_id: 22 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2022-11-15', fecha_vence: '2023-02-13', fecha_venta: '2022-11-15', importe_nota: 556.12, monto_pagado: 0, nro_nota: 101, saldo_pendiente: 556.12, sucursal_id: 38 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2024-02-12', fecha_vence: '2024-05-12', fecha_venta: '2024-02-12', importe_nota: 627.73, monto_pagado: 0, nro_nota: 102, saldo_pendiente: 627.73, sucursal_id: 31 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2022-11-13', fecha_vence: '2023-02-11', fecha_venta: '2022-11-13', importe_nota: 668.83, monto_pagado: 0, nro_nota: 103, saldo_pendiente: 668.83, sucursal_id: 54 }
    ,{ cliente_id: 37, empresa_id: 1, fecha: '2022-07-04', fecha_vence: '2022-10-02', fecha_venta: '2022-07-04', importe_nota: 252.61, monto_pagado: 0, nro_nota: 104, saldo_pendiente: 252.61, sucursal_id: 11 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2023-01-04', fecha_vence: '2023-04-04', fecha_venta: '2023-01-04', importe_nota: 779.72, monto_pagado: 0, nro_nota: 105, saldo_pendiente: 779.72, sucursal_id: 69 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2023-07-06', fecha_vence: '2023-10-04', fecha_venta: '2023-07-06', importe_nota: 344.0, monto_pagado: 0, nro_nota: 106, saldo_pendiente: 344.0, sucursal_id: 79 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2023-01-14', fecha_vence: '2023-04-14', fecha_venta: '2023-01-14', importe_nota: 194.32, monto_pagado: 0, nro_nota: 107, saldo_pendiente: 194.32, sucursal_id: 85 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2023-01-27', fecha_vence: '2023-04-27', fecha_venta: '2023-01-27', importe_nota: 337.45, monto_pagado: 185.09, nro_nota: 108, saldo_pendiente: 152.36, sucursal_id: 87 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2022-07-12', fecha_vence: '2022-10-10', fecha_venta: '2022-07-12', importe_nota: 175.57, monto_pagado: 0, nro_nota: 109, saldo_pendiente: 175.57, sucursal_id: 18 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2022-06-21', fecha_vence: '2022-09-19', fecha_venta: '2022-06-21', importe_nota: 697.86, monto_pagado: 0, nro_nota: 110, saldo_pendiente: 697.86, sucursal_id: 93 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2022-08-07', fecha_vence: '2022-11-05', fecha_venta: '2022-08-07', importe_nota: 318.14, monto_pagado: 0, nro_nota: 111, saldo_pendiente: 318.14, sucursal_id: 59 }
    ,{ cliente_id: 40, empresa_id: 1, fecha: '2023-01-16', fecha_vence: '2023-04-16', fecha_venta: '2023-01-16', importe_nota: 727.13, monto_pagado: 0, nro_nota: 112, saldo_pendiente: 727.13, sucursal_id: 97 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-05-03', fecha_vence: '2022-08-01', fecha_venta: '2022-05-03', importe_nota: 553.58, monto_pagado: 0, nro_nota: 113, saldo_pendiente: 553.58, sucursal_id: 36 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2023-03-06', fecha_vence: '2023-06-04', fecha_venta: '2023-03-06', importe_nota: 402.72, monto_pagado: 139.32, nro_nota: 114, saldo_pendiente: 263.4, sucursal_id: 92 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-05-15', fecha_vence: '2022-08-13', fecha_venta: '2022-05-15', importe_nota: 497.52, monto_pagado: 192.9, nro_nota: 115, saldo_pendiente: 304.62, sucursal_id: 22 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-06-22', fecha_vence: '2022-09-20', fecha_venta: '2022-06-22', importe_nota: 170.25, monto_pagado: 0, nro_nota: 116, saldo_pendiente: 170.25, sucursal_id: 31 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-06-18', fecha_vence: '2022-09-16', fecha_venta: '2022-06-18', importe_nota: 332.36, monto_pagado: 74.56, nro_nota: 117, saldo_pendiente: 257.8, sucursal_id: 56 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-03-11', fecha_vence: '2022-06-09', fecha_venta: '2022-03-11', importe_nota: 230.65, monto_pagado: 16.08, nro_nota: 118, saldo_pendiente: 214.57, sucursal_id: 87 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2023-08-23', fecha_vence: '2023-11-21', fecha_venta: '2023-08-23', importe_nota: 393.23, monto_pagado: 0, nro_nota: 119, saldo_pendiente: 393.23, sucursal_id: 25 }
    ,{ cliente_id: 43, empresa_id: 1, fecha: '2022-04-17', fecha_vence: '2022-07-16', fecha_venta: '2022-04-17', importe_nota: 259.95, monto_pagado: 0, nro_nota: 120, saldo_pendiente: 259.95, sucursal_id: 97 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2022-06-17', fecha_vence: '2022-09-15', fecha_venta: '2022-06-17', importe_nota: 653.71, monto_pagado: 0, nro_nota: 121, saldo_pendiente: 653.71, sucursal_id: 30 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2023-10-04', fecha_vence: '2024-01-02', fecha_venta: '2023-10-04', importe_nota: 272.05, monto_pagado: 0, nro_nota: 122, saldo_pendiente: 272.05, sucursal_id: 33 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2022-10-13', fecha_vence: '2023-01-11', fecha_venta: '2022-10-13', importe_nota: 459.73, monto_pagado: 0, nro_nota: 123, saldo_pendiente: 459.73, sucursal_id: 82 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2023-02-17', fecha_vence: '2023-05-18', fecha_venta: '2023-02-17', importe_nota: 561.38, monto_pagado: 0, nro_nota: 124, saldo_pendiente: 561.38, sucursal_id: 41 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2022-06-28', fecha_vence: '2022-09-26', fecha_venta: '2022-06-28', importe_nota: 450.5, monto_pagado: 200.91, nro_nota: 125, saldo_pendiente: 249.59, sucursal_id: 96 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2023-05-19', fecha_vence: '2023-08-17', fecha_venta: '2023-05-19', importe_nota: 602.84, monto_pagado: 0, nro_nota: 126, saldo_pendiente: 602.84, sucursal_id: 50 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2022-12-21', fecha_vence: '2023-03-21', fecha_venta: '2022-12-21', importe_nota: 795.39, monto_pagado: 510.39, nro_nota: 127, saldo_pendiente: 285.0, sucursal_id: 92 }
    ,{ cliente_id: 46, empresa_id: 1, fecha: '2022-11-23', fecha_vence: '2023-02-21', fecha_venta: '2022-11-23', importe_nota: 440.96, monto_pagado: 0, nro_nota: 128, saldo_pendiente: 440.96, sucursal_id: 99 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2024-03-04', fecha_vence: '2024-06-02', fecha_venta: '2024-03-04', importe_nota: 247.75, monto_pagado: 0, nro_nota: 129, saldo_pendiente: 247.75, sucursal_id: 92 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2023-02-27', fecha_vence: '2023-05-28', fecha_venta: '2023-02-27', importe_nota: 403.0, monto_pagado: 0, nro_nota: 130, saldo_pendiente: 403.0, sucursal_id: 92 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2023-07-29', fecha_vence: '2023-10-27', fecha_venta: '2023-07-29', importe_nota: 718.84, monto_pagado: 0, nro_nota: 131, saldo_pendiente: 718.84, sucursal_id: 16 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2022-12-16', fecha_vence: '2023-03-16', fecha_venta: '2022-12-16', importe_nota: 456.94, monto_pagado: 0, nro_nota: 132, saldo_pendiente: 456.94, sucursal_id: 39 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2023-01-28', fecha_vence: '2023-04-28', fecha_venta: '2023-01-28', importe_nota: 398.47, monto_pagado: 0, nro_nota: 133, saldo_pendiente: 398.47, sucursal_id: 98 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2022-11-30', fecha_vence: '2023-02-28', fecha_venta: '2022-11-30', importe_nota: 486.59, monto_pagado: 0, nro_nota: 134, saldo_pendiente: 486.59, sucursal_id: 80 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2023-06-05', fecha_vence: '2023-09-03', fecha_venta: '2023-06-05', importe_nota: 455.85, monto_pagado: 16.55, nro_nota: 135, saldo_pendiente: 439.3, sucursal_id: 44 }
    ,{ cliente_id: 49, empresa_id: 1, fecha: '2022-03-11', fecha_vence: '2022-06-09', fecha_venta: '2022-03-11', importe_nota: 735.31, monto_pagado: 0, nro_nota: 136, saldo_pendiente: 735.31, sucursal_id: 37 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-07-06', fecha_vence: '2023-10-04', fecha_venta: '2023-07-06', importe_nota: 633.6, monto_pagado: 0, nro_nota: 137, saldo_pendiente: 633.6, sucursal_id: 48 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-11-03', fecha_vence: '2024-02-01', fecha_venta: '2023-11-03', importe_nota: 398.42, monto_pagado: 0, nro_nota: 138, saldo_pendiente: 398.42, sucursal_id: 45 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-11-23', fecha_vence: '2024-02-21', fecha_venta: '2023-11-23', importe_nota: 491.37, monto_pagado: 0, nro_nota: 139, saldo_pendiente: 491.37, sucursal_id: 86 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-02-11', fecha_vence: '2023-05-12', fecha_venta: '2023-02-11', importe_nota: 702.0, monto_pagado: 37.67, nro_nota: 140, saldo_pendiente: 664.33, sucursal_id: 47 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2022-11-01', fecha_vence: '2023-01-30', fecha_venta: '2022-11-01', importe_nota: 174.19, monto_pagado: 0, nro_nota: 141, saldo_pendiente: 174.19, sucursal_id: 81 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-03-09', fecha_vence: '2023-06-07', fecha_venta: '2023-03-09', importe_nota: 341.47, monto_pagado: 0, nro_nota: 142, saldo_pendiente: 341.47, sucursal_id: 15 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2022-04-12', fecha_vence: '2022-07-11', fecha_venta: '2022-04-12', importe_nota: 722.33, monto_pagado: 0, nro_nota: 143, saldo_pendiente: 722.33, sucursal_id: 50 }
    ,{ cliente_id: 52, empresa_id: 1, fecha: '2023-09-19', fecha_vence: '2023-12-18', fecha_venta: '2023-09-19', importe_nota: 218.91, monto_pagado: 0, nro_nota: 144, saldo_pendiente: 218.91, sucursal_id: 90 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2023-07-07', fecha_vence: '2023-10-05', fecha_venta: '2023-07-07', importe_nota: 359.78, monto_pagado: 0, nro_nota: 145, saldo_pendiente: 359.78, sucursal_id: 95 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2022-08-27', fecha_vence: '2022-11-25', fecha_venta: '2022-08-27', importe_nota: 176.22, monto_pagado: 0, nro_nota: 146, saldo_pendiente: 176.22, sucursal_id: 81 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2023-12-05', fecha_vence: '2024-03-04', fecha_venta: '2023-12-05', importe_nota: 299.04, monto_pagado: 0, nro_nota: 147, saldo_pendiente: 299.04, sucursal_id: 73 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2023-12-21', fecha_vence: '2024-03-20', fecha_venta: '2023-12-21', importe_nota: 182.86, monto_pagado: 0, nro_nota: 148, saldo_pendiente: 182.86, sucursal_id: 41 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2023-03-12', fecha_vence: '2023-06-10', fecha_venta: '2023-03-12', importe_nota: 158.78, monto_pagado: 74.62, nro_nota: 149, saldo_pendiente: 84.16, sucursal_id: 98 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2022-05-07', fecha_vence: '2022-08-05', fecha_venta: '2022-05-07', importe_nota: 586.99, monto_pagado: 0, nro_nota: 150, saldo_pendiente: 586.99, sucursal_id: 86 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2022-08-11', fecha_vence: '2022-11-09', fecha_venta: '2022-08-11', importe_nota: 447.25, monto_pagado: 0, nro_nota: 151, saldo_pendiente: 447.25, sucursal_id: 23 }
    ,{ cliente_id: 55, empresa_id: 1, fecha: '2023-07-02', fecha_vence: '2023-09-30', fecha_venta: '2023-07-02', importe_nota: 182.29, monto_pagado: 0, nro_nota: 152, saldo_pendiente: 182.29, sucursal_id: 97 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-01-13', fecha_vence: '2023-04-13', fecha_venta: '2023-01-13', importe_nota: 666.17, monto_pagado: 0, nro_nota: 153, saldo_pendiente: 666.17, sucursal_id: 75 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-10-20', fecha_vence: '2024-01-18', fecha_venta: '2023-10-20', importe_nota: 694.56, monto_pagado: 0, nro_nota: 154, saldo_pendiente: 694.56, sucursal_id: 99 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-02-27', fecha_vence: '2023-05-28', fecha_venta: '2023-02-27', importe_nota: 173.03, monto_pagado: 0, nro_nota: 155, saldo_pendiente: 173.03, sucursal_id: 24 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2022-09-07', fecha_vence: '2022-12-06', fecha_venta: '2022-09-07', importe_nota: 653.62, monto_pagado: 184.51, nro_nota: 156, saldo_pendiente: 469.11, sucursal_id: 13 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-04-28', fecha_vence: '2023-07-27', fecha_venta: '2023-04-28', importe_nota: 333.12, monto_pagado: 0, nro_nota: 157, saldo_pendiente: 333.12, sucursal_id: 38 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2022-08-05', fecha_vence: '2022-11-03', fecha_venta: '2022-08-05', importe_nota: 760.92, monto_pagado: 0, nro_nota: 158, saldo_pendiente: 760.92, sucursal_id: 79 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-03-04', fecha_vence: '2023-06-02', fecha_venta: '2023-03-04', importe_nota: 275.9, monto_pagado: 0, nro_nota: 159, saldo_pendiente: 275.9, sucursal_id: 20 }
    ,{ cliente_id: 58, empresa_id: 1, fecha: '2023-01-13', fecha_vence: '2023-04-13', fecha_venta: '2023-01-13', importe_nota: 592.88, monto_pagado: 0, nro_nota: 160, saldo_pendiente: 592.88, sucursal_id: 79 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2022-08-18', fecha_vence: '2022-11-16', fecha_venta: '2022-08-18', importe_nota: 236.11, monto_pagado: 0, nro_nota: 161, saldo_pendiente: 236.11, sucursal_id: 39 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2023-11-14', fecha_vence: '2024-02-12', fecha_venta: '2023-11-14', importe_nota: 771.36, monto_pagado: 0, nro_nota: 162, saldo_pendiente: 771.36, sucursal_id: 28 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2024-01-01', fecha_vence: '2024-03-31', fecha_venta: '2024-01-01', importe_nota: 388.92, monto_pagado: 0, nro_nota: 163, saldo_pendiente: 388.92, sucursal_id: 74 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2023-06-04', fecha_vence: '2023-09-02', fecha_venta: '2023-06-04', importe_nota: 321.28, monto_pagado: 0, nro_nota: 164, saldo_pendiente: 321.28, sucursal_id: 98 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2022-10-22', fecha_vence: '2023-01-20', fecha_venta: '2022-10-22', importe_nota: 250.02, monto_pagado: 0, nro_nota: 165, saldo_pendiente: 250.02, sucursal_id: 40 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2023-01-18', fecha_vence: '2023-04-18', fecha_venta: '2023-01-18', importe_nota: 363.85, monto_pagado: 0, nro_nota: 166, saldo_pendiente: 363.85, sucursal_id: 28 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2023-06-17', fecha_vence: '2023-09-15', fecha_venta: '2023-06-17', importe_nota: 208.38, monto_pagado: 0, nro_nota: 167, saldo_pendiente: 208.38, sucursal_id: 24 }
    ,{ cliente_id: 61, empresa_id: 1, fecha: '2022-07-22', fecha_vence: '2022-10-20', fecha_venta: '2022-07-22', importe_nota: 548.92, monto_pagado: 315.82, nro_nota: 168, saldo_pendiente: 233.1, sucursal_id: 63 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2024-02-24', fecha_vence: '2024-05-24', fecha_venta: '2024-02-24', importe_nota: 636.85, monto_pagado: 393.63, nro_nota: 169, saldo_pendiente: 243.22, sucursal_id: 84 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2022-04-24', fecha_vence: '2022-07-23', fecha_venta: '2022-04-24', importe_nota: 231.54, monto_pagado: 0, nro_nota: 170, saldo_pendiente: 231.54, sucursal_id: 64 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2023-10-20', fecha_vence: '2024-01-18', fecha_venta: '2023-10-20', importe_nota: 412.42, monto_pagado: 0, nro_nota: 171, saldo_pendiente: 412.42, sucursal_id: 62 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2024-01-05', fecha_vence: '2024-04-04', fecha_venta: '2024-01-05', importe_nota: 493.09, monto_pagado: 129.27, nro_nota: 172, saldo_pendiente: 363.82, sucursal_id: 80 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2022-04-12', fecha_vence: '2022-07-11', fecha_venta: '2022-04-12', importe_nota: 158.73, monto_pagado: 0, nro_nota: 173, saldo_pendiente: 158.73, sucursal_id: 10 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2022-09-10', fecha_vence: '2022-12-09', fecha_venta: '2022-09-10', importe_nota: 558.93, monto_pagado: 0, nro_nota: 174, saldo_pendiente: 558.93, sucursal_id: 43 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2022-12-21', fecha_vence: '2023-03-21', fecha_venta: '2022-12-21', importe_nota: 264.94, monto_pagado: 0, nro_nota: 175, saldo_pendiente: 264.94, sucursal_id: 67 }
    ,{ cliente_id: 64, empresa_id: 1, fecha: '2022-12-27', fecha_vence: '2023-03-27', fecha_venta: '2022-12-27', importe_nota: 152.23, monto_pagado: 0, nro_nota: 176, saldo_pendiente: 152.23, sucursal_id: 43 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2024-02-09', fecha_vence: '2024-05-09', fecha_venta: '2024-02-09', importe_nota: 571.77, monto_pagado: 0, nro_nota: 177, saldo_pendiente: 571.77, sucursal_id: 83 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2022-09-19', fecha_vence: '2022-12-18', fecha_venta: '2022-09-19', importe_nota: 626.51, monto_pagado: 0, nro_nota: 178, saldo_pendiente: 626.51, sucursal_id: 44 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2022-05-10', fecha_vence: '2022-08-08', fecha_venta: '2022-05-10', importe_nota: 313.57, monto_pagado: 0, nro_nota: 179, saldo_pendiente: 313.57, sucursal_id: 33 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2022-09-03', fecha_vence: '2022-12-02', fecha_venta: '2022-09-03', importe_nota: 155.0, monto_pagado: 0, nro_nota: 180, saldo_pendiente: 155.0, sucursal_id: 51 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2023-04-27', fecha_vence: '2023-07-26', fecha_venta: '2023-04-27', importe_nota: 759.09, monto_pagado: 523.48, nro_nota: 181, saldo_pendiente: 235.61, sucursal_id: 97 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2023-06-25', fecha_vence: '2023-09-23', fecha_venta: '2023-06-25', importe_nota: 252.31, monto_pagado: 0, nro_nota: 182, saldo_pendiente: 252.31, sucursal_id: 53 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2023-10-22', fecha_vence: '2024-01-20', fecha_venta: '2023-10-22', importe_nota: 332.93, monto_pagado: 0, nro_nota: 183, saldo_pendiente: 332.93, sucursal_id: 53 }
    ,{ cliente_id: 67, empresa_id: 1, fecha: '2023-09-30', fecha_vence: '2023-12-29', fecha_venta: '2023-09-30', importe_nota: 795.79, monto_pagado: 0, nro_nota: 184, saldo_pendiente: 795.79, sucursal_id: 84 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2023-04-24', fecha_vence: '2023-07-23', fecha_venta: '2023-04-24', importe_nota: 612.81, monto_pagado: 0, nro_nota: 185, saldo_pendiente: 612.81, sucursal_id: 47 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2022-11-22', fecha_vence: '2023-02-20', fecha_venta: '2022-11-22', importe_nota: 438.07, monto_pagado: 30.15, nro_nota: 186, saldo_pendiente: 407.92, sucursal_id: 61 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2022-04-11', fecha_vence: '2022-07-10', fecha_venta: '2022-04-11', importe_nota: 614.76, monto_pagado: 0, nro_nota: 187, saldo_pendiente: 614.76, sucursal_id: 79 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2023-11-12', fecha_vence: '2024-02-10', fecha_venta: '2023-11-12', importe_nota: 542.96, monto_pagado: 100.87, nro_nota: 188, saldo_pendiente: 442.09, sucursal_id: 66 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2023-02-25', fecha_vence: '2023-05-26', fecha_venta: '2023-02-25', importe_nota: 242.63, monto_pagado: 0, nro_nota: 189, saldo_pendiente: 242.63, sucursal_id: 27 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2022-10-04', fecha_vence: '2023-01-02', fecha_venta: '2022-10-04', importe_nota: 364.31, monto_pagado: 0, nro_nota: 190, saldo_pendiente: 364.31, sucursal_id: 15 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2023-01-07', fecha_vence: '2023-04-07', fecha_venta: '2023-01-07', importe_nota: 494.05, monto_pagado: 0, nro_nota: 191, saldo_pendiente: 494.05, sucursal_id: 34 }
    ,{ cliente_id: 70, empresa_id: 1, fecha: '2023-11-26', fecha_vence: '2024-02-24', fecha_venta: '2023-11-26', importe_nota: 228.17, monto_pagado: 0, nro_nota: 192, saldo_pendiente: 228.17, sucursal_id: 29 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2023-03-22', fecha_vence: '2023-06-20', fecha_venta: '2023-03-22', importe_nota: 627.73, monto_pagado: 0, nro_nota: 193, saldo_pendiente: 627.73, sucursal_id: 82 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2022-06-10', fecha_vence: '2022-09-08', fecha_venta: '2022-06-10', importe_nota: 380.24, monto_pagado: 0, nro_nota: 194, saldo_pendiente: 380.24, sucursal_id: 85 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2024-01-13', fecha_vence: '2024-04-12', fecha_venta: '2024-01-13', importe_nota: 647.01, monto_pagado: 0, nro_nota: 195, saldo_pendiente: 647.01, sucursal_id: 90 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2022-09-06', fecha_vence: '2022-12-05', fecha_venta: '2022-09-06', importe_nota: 603.33, monto_pagado: 0, nro_nota: 196, saldo_pendiente: 603.33, sucursal_id: 71 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2023-12-14', fecha_vence: '2024-03-13', fecha_venta: '2023-12-14', importe_nota: 641.33, monto_pagado: 0, nro_nota: 197, saldo_pendiente: 641.33, sucursal_id: 69 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2022-04-28', fecha_vence: '2022-07-27', fecha_venta: '2022-04-28', importe_nota: 174.95, monto_pagado: 0, nro_nota: 198, saldo_pendiente: 174.95, sucursal_id: 61 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2023-07-27', fecha_vence: '2023-10-25', fecha_venta: '2023-07-27', importe_nota: 659.73, monto_pagado: 0, nro_nota: 199, saldo_pendiente: 659.73, sucursal_id: 25 }
    ,{ cliente_id: 73, empresa_id: 1, fecha: '2023-01-25', fecha_vence: '2023-04-25', fecha_venta: '2023-01-25', importe_nota: 544.11, monto_pagado: 0, nro_nota: 200, saldo_pendiente: 544.11, sucursal_id: 59 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2023-03-06', fecha_vence: '2023-06-04', fecha_venta: '2023-03-06', importe_nota: 617.46, monto_pagado: 0, nro_nota: 201, saldo_pendiente: 617.46, sucursal_id: 52 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2023-08-24', fecha_vence: '2023-11-22', fecha_venta: '2023-08-24', importe_nota: 426.93, monto_pagado: 0, nro_nota: 202, saldo_pendiente: 426.93, sucursal_id: 32 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2022-06-11', fecha_vence: '2022-09-09', fecha_venta: '2022-06-11', importe_nota: 182.51, monto_pagado: 0, nro_nota: 203, saldo_pendiente: 182.51, sucursal_id: 57 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2022-12-04', fecha_vence: '2023-03-04', fecha_venta: '2022-12-04', importe_nota: 604.45, monto_pagado: 0, nro_nota: 204, saldo_pendiente: 604.45, sucursal_id: 61 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2023-04-06', fecha_vence: '2023-07-05', fecha_venta: '2023-04-06', importe_nota: 279.72, monto_pagado: 0, nro_nota: 205, saldo_pendiente: 279.72, sucursal_id: 90 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2023-10-26', fecha_vence: '2024-01-24', fecha_venta: '2023-10-26', importe_nota: 310.91, monto_pagado: 27.46, nro_nota: 206, saldo_pendiente: 283.45, sucursal_id: 82 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2022-12-07', fecha_vence: '2023-03-07', fecha_venta: '2022-12-07', importe_nota: 282.68, monto_pagado: 0, nro_nota: 207, saldo_pendiente: 282.68, sucursal_id: 79 }
    ,{ cliente_id: 76, empresa_id: 1, fecha: '2022-05-28', fecha_vence: '2022-08-26', fecha_venta: '2022-05-28', importe_nota: 513.83, monto_pagado: 292.8, nro_nota: 208, saldo_pendiente: 221.03, sucursal_id: 66 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2022-10-04', fecha_vence: '2023-01-02', fecha_venta: '2022-10-04', importe_nota: 542.81, monto_pagado: 250.52, nro_nota: 209, saldo_pendiente: 292.29, sucursal_id: 91 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2023-05-23', fecha_vence: '2023-08-21', fecha_venta: '2023-05-23', importe_nota: 276.0, monto_pagado: 0, nro_nota: 210, saldo_pendiente: 276.0, sucursal_id: 70 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2022-04-16', fecha_vence: '2022-07-15', fecha_venta: '2022-04-16', importe_nota: 632.49, monto_pagado: 0, nro_nota: 211, saldo_pendiente: 632.49, sucursal_id: 53 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2022-05-04', fecha_vence: '2022-08-02', fecha_venta: '2022-05-04', importe_nota: 419.0, monto_pagado: 0, nro_nota: 212, saldo_pendiente: 419.0, sucursal_id: 15 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2023-05-16', fecha_vence: '2023-08-14', fecha_venta: '2023-05-16', importe_nota: 544.16, monto_pagado: 0, nro_nota: 213, saldo_pendiente: 544.16, sucursal_id: 13 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2023-05-27', fecha_vence: '2023-08-25', fecha_venta: '2023-05-27', importe_nota: 214.9, monto_pagado: 0, nro_nota: 214, saldo_pendiente: 214.9, sucursal_id: 19 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2022-07-14', fecha_vence: '2022-10-12', fecha_venta: '2022-07-14', importe_nota: 290.48, monto_pagado: 0, nro_nota: 215, saldo_pendiente: 290.48, sucursal_id: 23 }
    ,{ cliente_id: 79, empresa_id: 1, fecha: '2022-09-21', fecha_vence: '2022-12-20', fecha_venta: '2022-09-21', importe_nota: 746.03, monto_pagado: 0, nro_nota: 216, saldo_pendiente: 746.03, sucursal_id: 27 }
    ];


// DEP816491, 10000000000001, 1, '2022-06-26', '2022-06-22', Transferencia, USD, 503.73, 360, 'Pago realizado satisfactoriamente.', 360, REF57259, 1
// DEP188795, 10000000000001, 1, '2022-04-08', '2022-05-07', Transferencia, USD, 793.21, 990, 'Pago realizado satisfactoriamente.', 990, REF45359, 1
// DEP459746, 10000000000002, 1, '2023-12-09', '2022-03-14', Cheque, USD, 131.26, 232, 'Pago realizado satisfactoriamente.', 232, REF77661, 2
// DEP243228, 10000000000002, 1, '2023-12-05', '2022-06-01', Transferencia, USD, 212.8, 905, 'Pago realizado satisfactoriamente.', 905, REF53503, 2
// DEP646888, 10000000000003, 1, '2022-07-25', '2023-10-12', Efectivo, USD, 331.55, 402, 'Pago realizado satisfactoriamente.', 402, REF50457, 3
// DEP713072, 10000000000003, 1, '2023-03-16', '2022-12-29', Cheque, USD, 304.93, 537, 'Pago realizado satisfactoriamente.', 537, REF66364, 3
// DEP558831, 10000000000004, 1, '2022-08-03', '2023-10-05', Transferencia, USD, 761.42, 218, 'Pago realizado satisfactoriamente.', 218, REF97580, 4
// DEP252880, 10000000000004, 1, '2022-06-10', '2022-11-25', Transferencia, USD, 472.23, 973, 'Pago realizado satisfactoriamente.', 973, REF68349, 4
// DEP187169, 10000000000005, 1, '2022-04-06', '2023-05-05', Efectivo, USD, 412.46, 231, 'Pago realizado satisfactoriamente.', 231, REF24925, 5
// DEP176924, 10000000000005, 1, '2022-08-07', '2024-01-03', Transferencia, USD, 211.86, 750, 'Pago realizado satisfactoriamente.', 750, REF13390, 5
// DEP523264, 10000000000006, 1, '2024-03-04', '2022-10-17', Transferencia, USD, 667.1, 797, 'Pago realizado satisfactoriamente.', 797, REF45318, 6
// DEP381256, 10000000000006, 1, '2023-12-07', '2022-11-11', Transferencia, USD, 528.24, 680, 'Pago realizado satisfactoriamente.', 680, REF90817, 6
// DEP442449, 10000000000007, 1, '2023-11-22', '2022-04-24', Cheque, USD, 353.9, 472, 'Pago realizado satisfactoriamente.', 472, REF89874, 7
// DEP167527, 10000000000007, 1, '2023-06-19', '2023-02-04', Cheque, USD, 424.89, 62, 'Pago realizado satisfactoriamente.', 62, REF37670, 7
// DEP613126, 10000000000008, 1, '2023-10-30', '2022-05-07', Transferencia, USD, 412.91, 543, 'Pago realizado satisfactoriamente.', 543, REF41838, 8
// DEP834225, 10000000000008, 1, '2023-11-04', '2023-10-26', Cheque, USD, 743.88, 184, 'Pago realizado satisfactoriamente.', 184, REF46821, 8
// DEP487935, 10000000000009, 1, '2023-09-15', '2023-12-09', Cheque, USD, 564.59, 521, 'Pago realizado satisfactoriamente.', 521, REF30405, 9
// DEP471471, 10000000000009, 1, '2022-05-06', '2022-06-06', Cheque, USD, 316.48, 301, 'Pago realizado satisfactoriamente.', 301, REF40295, 9
// DEP485946, 100000000000010, 1, '2022-06-14', '2023-07-03', Cheque, USD, 629.22, 195, 'Pago realizado satisfactoriamente.', 195, REF52030, 10
// DEP208171, 100000000000010, 1, '2023-10-02', '2023-02-26', Cheque, USD, 141.08, 105, 'Pago realizado satisfactoriamente.', 105, REF34412, 10
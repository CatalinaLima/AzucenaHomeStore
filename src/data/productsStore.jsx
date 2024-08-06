// const products = [
//   {
//     id: 1,
//     title: "Espejo Decorativo Ovalado",
//     price: 49.99,
//     description:
//       "Espejo ovalado con marco dorado, perfecto para dar un toque elegante a cualquier habitación.",
//     category: "mirrors",
//     stock: 20,
//     image: "/assets/imagen1.jpg",
//     discount: 0,
//   },
//   {
//     id: 2,
//     title: "Macetas de Cerámica Modernas",
//     price: 29.99,
//     description:
//       "Conjunto de tres macetas de cerámica en colores modernos, ideales para plantas pequeñas.",
//     category: "plantaccessories",
//     stock: 15,
//     image: "/assets/imagen2.jpg",
//     discount: 10,
//   },
//   {
//     id: 3,
//     title: "Sofá Modular Gris",
//     price: 599.99,
//     description:
//       "Sofá modular con tela gris y diseño contemporáneo para una sala de estar cómoda y elegante.",
//     category: "furniture",
//     stock: 5,
//     image: "/assets/imagen3.jpg",
//     discount: 15,
//   },
//   {
//     id: 4,
//     title: "Jarrón de Cerámica Azul",
//     price: 34.99,
//     description:
//       "Jarrón de cerámica en tono azul claro, perfecto para resaltar flores frescas o secas.",
//     category: "homedecor",
//     stock: 12,
//     image: "/assets/imagen4.jpg",
//     discount: 0,
//   },
//   {
//     id: 5,
//     title: "Lámpara de Techo Industrial",
//     price: 79.99,
//     description:
//       "Lámpara de techo con diseño industrial y acabado metálico, ideal para iluminar cualquier espacio con estilo.",
//     category: "lighting",
//     stock: 8,
//     image: "/assets/imagen5.jpg",
//     discount: 0,
//   },
//   {
//     id: 6,
//     title: "Set de Utensilios de Cocina de Acero Inoxidable",
//     price: 49.99,
//     description:
//       "Set completo de utensilios de cocina de acero inoxidable, duraderos y fáciles de limpiar.",
//     category: "kitchenware",
//     stock: 10,
//     image: "/assets/imagen6.jpg",
//     discount: 5,
//   },
//   {
//     id: 7,
//     title: "Espejo de Pared con Marco de Madera",
//     price: 59.99,
//     description:
//       "Espejo rectangular con marco de madera natural, perfecto para un ambiente rústico.",
//     category: "mirrors",
//     stock: 18,
//     image: "/assets/imagen7.jpg",
//     discount: 0,
//   },
//   {
//     id: 8,
//     title: "Cojines Decorativos Geométricos",
//     price: 19.99,
//     description:
//       "Set de dos cojines decorativos con patrones geométricos, ideales para dar un toque moderno al sofá.",
//     category: "homedecor",
//     stock: 25,
//     image: "/assets/imagen8.jpg",
//     discount: 10,
//   },
//   {
//     id: 9,
//     title: "Mesa de Centro de Vidrio y Metal",
//     price: 129.99,
//     description:
//       "Mesa de centro con superficie de vidrio y base metálica, elegante y funcional para la sala de estar.",
//     category: "furniture",
//     stock: 7,
//     image: "/assets/imagen9.jpg",
//     discount: 0,
//   },
//   {
//     id: 10,
//     title: "Lámpara de Mesa Vintage",
//     price: 39.99,
//     description:
//       "Lámpara de mesa con diseño vintage y pantalla de tela, perfecta para crear un ambiente acogedor.",
//     category: "lighting",
//     stock: 14,
//     image: "/assets/imagen10.jpg",
//     discount: 0,
//   },
//   {
//     id: 11,
//     title: "Espejo de Pared con Diseño Floral",
//     price: 69.99,
//     description:
//       "Espejo circular con diseño floral en relieve, ideal para añadir un toque romántico a cualquier habitación.",
//     category: "mirrors",
//     stock: 15,
//     image: "/assets/imagen11.jpg",
//     discount: 0,
//   },
//   {
//     id: 12,
//     title: "Macetas de Cerámica Modernas",
//     price: 45.99,
//     description:
//       "Conjunto de tres macetas tejidas a mano en tonos cálidos, perfectas para añadir calidez a tu sala de estar.",
//     category: "homedecor",
//     stock: 20,
//     image: "/assets/imagen12.jpg",
//     discount: 8,
//   },
//   {
//     id: 13,
//     title: "Silla de Comedor Moderna",
//     price: 89.99,
//     description:
//       "Silla de comedor con diseño moderno y asiento acolchado para mayor comodidad durante las comidas.",
//     category: "furniture",
//     stock: 10,
//     image: "/assets/imagen13.jpg",
//     discount: 12,
//   },
//   {
//     id: 14,
//     title: "Portavelas de Cristal Tallado",
//     price: 24.99,
//     description:
//       "Portavelas de cristal tallado con patrón geométrico, perfecto para crear ambientes íntimos y acogedores.",
//     category: "homedecor",
//     stock: 18,
//     image: "/assets/imagen14.jpg",
//     discount: 0,
//   },
//   {
//     id: 15,
//     title: "Lámpara de Pie con Trípode",
//     price: 129.99,
//     description:
//       "Lámpara de pie con trípode de madera y pantalla de tela, ideal para iluminar rincones especiales.",
//     category: "lighting",
//     stock: 8,
//     image: "/assets/imagen15.jpg",
//     discount: 0,
//   },
//   {
//     id: 16,
//     title: "Juego de Tazas de Cerámica",
//     price: 19.99,
//     description:
//       "Juego de tazas de cerámica con patrones artísticos, perfecto para disfrutar de tu bebida favorita.",
//     category: "kitchenware",
//     stock: 25,
//     image: "/assets/imagen16.jpg",
//     discount: 5,
//   },
//   {
//     id: 17,
//     title: "Cuadro Decorativo de Paisaje",
//     price: 59.99,
//     description:
//       "Cuadro decorativo con impresión de paisaje natural, ideal para dar vida a tus paredes.",
//     category: "homedecor",
//     stock: 12,
//     image: "/assets/imagen17.jpg",
//     discount: 0,
//   },
//   {
//     id: 18,
//     title: "Mesa Auxiliar de Mármol",
//     price: 149.99,
//     description:
//       "Mesa auxiliar con superficie de mármol y base metálica, elegante y funcional para cualquier espacio.",
//     category: "furniture",
//     stock: 7,
//     image: "/assets/imagen18.jpg",
//     discount: 0,
//   },
//   {
//     id: 19,
//     title: "Aplique de Pared Vintage",
//     price: 34.99,
//     description:
//       "Aplique de pared con diseño vintage y acabado en bronce, perfecto para iluminar pasillos o rincones.",
//     category: "lighting",
//     stock: 14,
//     image: "/assets/imagen19.jpg",
//     discount: 0,
//   },
//   {
//     id: 20,
//     title: "Candelabro de Metal",
//     price: 54.99,
//     description:
//       "Candelabro de metal con brazos decorativos, ideal para crear un ambiente elegante en cenas especiales.",
//     category: "homedecor",
//     stock: 15,
//     image: "/assets/imagen20.jpg",
//     discount: 0,
//   },
//   {
//     id: 21,
//     title: "Espejo de Pared con Marco de Bambú",
//     price: 79.99,
//     description:
//       "Espejo rectangular con marco de bambú natural, perfecto para un ambiente fresco y relajado.",
//     category: "mirrors",
//     stock: 12,
//     image: "/assets/imagen21.jpg",
//     discount: 0,
//   },
//   {
//     id: 22,
//     title: "Cojines de Exterior Impermeables",
//     price: 39.99,
//     description:
//       "Set de cojines de exterior con tejido impermeable, ideales para muebles de patio o terraza.",
//     category: "homedecor",
//     stock: 20,
//     image: "/assets/imagen22.jpg",
//     discount: 0,
//   },
//   {
//     id: 23,
//     title: "Sillón Reclinable con Reposapiés",
//     price: 249.99,
//     description:
//       "Sillón reclinable con reposapiés, tapizado en tela suave para una experiencia de descanso completa.",
//     category: "furniture",
//     stock: 8,
//     image: "/assets/imagen23.jpg",
//     discount: 10,
//   },
//   {
//     id: 24,
//     title: "Reloj de Pared Vintage",
//     price: 29.99,
//     description:
//       "Reloj de pared con diseño vintage y números romanos, perfecto para dar un toque retro a tu hogar.",
//     category: "homedecor",
//     stock: 15,
//     image: "/assets/imagen24.jpg",
//     discount: 0,
//   },
//   {
//     id: 25,
//     title: "Lámpara de Techo con Pantalla de Mimbre",
//     price: 89.99,
//     description:
//       "Lámpara de techo con pantalla de mimbre, ideal para crear una iluminación cálida y acogedora.",
//     category: "lighting",
//     stock: 10,
//     image: "/assets/imagen25.jpg",
//     discount: 0,
//   },
//   {
//     id: 26,
//     title: "Set de Cuchillos de Cocina de Acero Inoxidable",
//     price: 59.99,
//     description:
//       "Set completo de cuchillos de cocina de acero inoxidable con mango ergonómico.",
//     category: "kitchenware",
//     stock: 18,
//     image: "/assets/imagen26.jpg",
//     discount: 15,
//   },
//   {
//     id: 27,
//     title: "Tapiz de Pared Bohemio",
//     price: 49.99,
//     description:
//       "Tapiz de pared con diseño bohemio y colores vibrantes, perfecto para añadir carácter a cualquier habitación.",
//     category: "homedecor",
//     stock: 14,
//     image: "/assets/imagen27.jpg",
//     discount: 0,
//   },
//   {
//     id: 28,
//     title: "Mesa de Comedor de Madera Maciza",
//     price: 349.99,
//     description:
//       "Mesa de comedor rectangular de madera maciza, robusta y elegante para cenas familiares.",
//     category: "furniture",
//     stock: 6,
//     image: "/assets/imagen28.jpg",
//     discount: 0,
//   },
//   {
//     id: 29,
//     title: "Aplique de Pared Moderno",
//     price: 39.99,
//     description:
//       "Aplique de pared con diseño moderno y ajustable, perfecto para iluminar de manera focalizada.",
//     category: "lighting",
//     stock: 16,
//     image: "/assets/imagen29.jpg",
//     discount: 0,
//   },
//   {
//     id: 30,
//     title: "Centro de Mesa de Cristal",
//     price: 69.99,
//     description:
//       "Centro de mesa de cristal con detalles grabados, ideal para resaltar la decoración de tu mesa.",
//     category: "homedecor",
//     stock: 10,
//     image: "/assets/imagen30.jpg",
//     discount: 0,
//   },
// ];

const products = [
  {
    id: 1,
    title: "Retro Candle Holder",
    price: 354,
    description:
      "Portavelas estilo retro con diseño creativo, ideal para decoración romántica en la mesa o en el hogar.",
    category: "homedecor",
    stock: 15,
    image: "/assets/29.jpg",
    discount: 0,
  },
  {
    id: 2,
    title: "Decoración de Nudo de Madera",
    price: 365,
    description:
      "Adorno de madera hecho a mano, ideal para estantes y mesas en decoración de estilo rústico y moderno.",
    category: "homedecor",
    stock: 10,
    image: "/assets/30.jpg",
    discount: 0,
  },
  {
    id: 3,
    title: "Jarrón Blanco de Espiral de Plástico",
    price: 100,
    description:
      "Jarrón blanco de plástico con diseño en espiral, perfecto para arreglos florales y decoración del hogar.",
    category: "homedecor",
    stock: 25,
    image: "/assets/1.jpg",
    discount: 0,
  },
  {
    id: 4,
    title: "Tapiz de Macramé",
    price: 419,
    description:
      "Arte de pared en macramé con temática verde natural, ideal para decoración de sala de estar o oficina.",
    category: "homedecor",
    stock: 12,
    image: "/assets/2.jpg",
    discount: 0,
  },
  {
    id: 5,
    title: "Jarrón Moderno con Forma de Donut",
    price: 169,
    description:
      "Jarrón decorativo con forma de donut, hecho de plástico al estilo nórdico, ideal para decoración del hogar y sala de estar.",
    category: "homedecor",
    stock: 18,
    image: "/assets/3.jpg",
    discount: 0,
  },
  {
    id: 6,
    title: "Figura de Pareja de Corazones Abstractos",
    price: 271,
    description:
      "Artesanía en resina con detalle dorado, ideal para decoración de sala de estar y regalo para ocasiones especiales.",
    category: "homedecor",
    stock: 8,
    image: "/assets/4.jpg",
    discount: 0,
  },
  {
    id: 7,
    title: "Jarrón Vintage con Diseño Geométrico",
    price: 139,
    description:
      "Jarrón decorativo de estilo nórdico con diseño geométrico de ondas de agua, perfecto para un toque chic en tu escritorio.",
    category: "homedecor",
    stock: 20,
    image: "/assets/5.jpg",
    discount: 0,
  },
  {
    id: 8,
    title: "Bandeja de Cerámica en Forma de Nube",
    price: 421,
    description:
      "Bandeja de cerámica en forma de nube, ideal para almacenamiento de joyas, perfumes o llaves, también puede servir como adorno para la decoración del hogar.",
    category: "homedecor",
    stock: 30,
    image: "/assets/6.jpg",
    discount: 0,
  },
  {
    id: 9,
    title: "Jarrón de Plástico Nórdico",
    price: 83,
    description:
      "Jarrón de plástico nórdico, decorativo y resistente a caídas, perfecto para el salón con un diseño creativo y sencillo.",
    category: "homedecor",
    stock: 22,
    image: "/assets/7.jpg",
    discount: 0,
  },
  {
    id: 10,
    title: "Posavasos Tejido a Mano de Ratán",
    price: 64,
    description:
      "Posavasos de ratán tejido a mano, ideal para tazas y tazones, con un diseño rústico que añade un toque especial a tu mesa de comedor.",
    category: "homedecor",
    stock: 40,
    image: "/assets/8.jpg",
    discount: 0,
  },
  {
    id: 11,
    title: "Espejo Decorativo de Pared",
    price: 168,
    category: "mirrors",
    image: "/assets/9.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9991f94ed474da1e52a10d621b1795c6.jpg",
    link: "https://www.temu.com/uy/1pc-moderno-simple-irregular-plastico-decorativo-espejo-pegatinas-de-pared-adecuado-para-habitacion-escritorio-sala-de-estar-bano-decorativo-pegatinas-de-pared-g-601099516148704.html",
  },
  {
    id: 12,
    title: "Bandeja Decorativa Vintage",
    price: 345,
    category: "homedecor",
    image: "/assets/11.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/open/2024-05-14/1715705358870-1e1beecb83df4580b1a3e12fd8857cd3-goods.jpeg",
    link: "https://www.temu.com/uy/bandeja-decorativa-de-estilo-vintage-con-material-de-tronco-organizador-rustico-de-madera-para-bano-cocina-cosmeticos-almacenamiento-versatil-para-jabon-botellas-plantas-decoracion-del-hogar-ideal-para-navidad-accion-de-gracias-fiestas-g-601099577996232.html",
  },
  {
    id: 13,
    title: "Soporte de Incienso Colgante",
    price: 208,
    category: "homedecor",
    image: "/assets/10.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/fancy/342a6c09-9553-48df-89f0-ce24a87a1e1b.jpg",
    link: "https://www.temu.com/uy/soporte-de-incienso-colgante-de-metal-adornos-de-decoracion-para-el-hogar-zen-quemador-de-incienso-colgante-quemador-de-incienso-de-linea-creativa-regalo-de-idea-para-quemador-de-incienso-g-601099542470049.html",
  },
  {
    id: 14,
    title: "Guirnalda de Cuentas de Madera",
    price: 64,
    category: "homedecor",
    image: "/assets/12.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/0deff60d1dfad9168b44a17f6ac03d27.jpg",
    link: "https://www.temu.com/uy/1-guirnalda-de-cuentas-de-madera-con-borlas-decoracion-rustica-del-pais-cuentas-bohemias-de-oracion-decoracion--para-colgar-en-la-pared-decoracion-de-la-habitacion-del-hogar-oficina-sala-de-estar-navidad-accion-de-gracias-ano-nuevo-g-601099528624736.html",
  },
  {
    id: 15,
    title: "Portavelas de Cerámica",
    price: 662,
    category: "homedecor",
    image: "/assets/13.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/fancy/3a6080f7-3aea-4cff-b5f3-25b21d2eb0f0.jpg",
    link: "https://www.temu.com/uy/juego-de-2-portavelas-de-ceramica-diseno-minimalista-de-cuerda-blanca-para-decoracion-elegante-de-mesa-perfecto-para-cenas-y-celebraciones-festivas-g-601099575799886.html",
  },
  {
    id: 16,
    title: "Tapiz Colgante de Pared de Macramé",
    price: 370,
    category: "homedecor",
    image: "/assets/14.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/fancy/28c23505-4725-4416-8f98-a85ea3b75869.jpg",
    link: "https://www.temu.com/uy/tapiz-colgante-de-pared-de-macrame-decoracion-de-pared-bohemia-tapiz-de-pared-tejido-hecho-a-mano-para-dormitorio-sala-de-estar-decoracion-del-hogar-1-ud-g-601099517815881.html",
  },
  {
    id: 17,
    title: "Alfombra Blanca con Forma Ondulada",
    price: 589,
    category: "furniture",
    image: "/assets/31.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/fancy/5d334716-53e2-46c3-ab57-9d9a1934b72f.jpg",
    link: "https://www.temu.com/uy/1-alfombra-blanca-con-forma-ondulada-y-esponjosa-suave-y-comoda-con-pelo-de-conejo-que-no-se-cae-adecuada-para-sala-de-estar-dormitorio-sala-de-te-vestidor-y-sala-de-juegos-g-601099599181486.html",
  },
  {
    id: 18,
    title: "Alfombra de Imitación de Cachemira",
    price: 458,
    category: "furniture",
    image: "/assets/32.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/open/2024-03-08/1709869631259-9f432fb1265949c4961f13093ec276a4-goods.jpeg",
    link: "https://www.temu.com/uy/una-alfombra-de-imitacion-de-cachemira-en-crema-de-lujo-ligero-y-premium-para-la-sala-de-estar-el-dormitorio-la-mesa-de-cafe-y-el-sofa-con-forma-irregular-es-una-manta-gruesa-y-esponjosa-para-el-suelo-y-la-cama-g-601099550842342.html",
  },
  {
    id: 19,
    title: "Vasos de Vidrio Acanalado",
    price: 1101,
    category: "kitchenware",
    image: "/assets/33.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/open/2024-04-12/1712892786224-42fa4e3b55894ba0bf8b959e31cab6c0-goods.jpeg",
    link: "https://www.temu.com/uy/conjunto-de-4-vasos-de-vidrio-acanalado-tazas-de-agua-con-rayas-verticales-vasos-para-cafe-helado-vasos-para-jugo-leche-te-y-mas-cristaleria-para-verano-e-invierno-g-601099563413767.html",
  },
  {
    id: 20,
    title: "Vasos para Whisky Creativos",
    price: 299,
    category: "kitchenware",
    image: "/assets/34.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3be52bb4900bd695b2fa14c48295463.jpg",
    link: "https://www.temu.com/uy/-creative-whisky-glass-cup-para-whisky-escoces-bourbon-conac-vodka-licor-regalo-del-dia-de-san-valentin-g-601099525651122.html",
  },
  {
    id: 21,
    title: "Tazas de Vidrio con Pajitas",
    price: 491,
    category: "kitchenware",
    image: "/assets/35.jpg",
    imageUrl:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/80d460c9704ceb7bb35adbc5b6db4ff7.jpg",
    link: "https://www.temu.com/uy/2-tazas-de-vidrio-con-pajitas-vaso-de-agua-transparente-para-el-hogar-y-la-oficina-g-601099522224975.html",
  },
  {
    id: 22,
    title: "1 Pieza Tela de Burbuja de Lana Redonda",
    price: 470,
    description:
      "Tela de burbuja de lana redonda de color sólido, suave y esponjosa, fácil de limpiar. Alfombra decorativa para interiores, adecuada para dormitorio, sala de estar, vestidor, sala de maquillaje y otras áreas.",
    category: "Alfombras",
    stock: "En stock",
    image: "/assets/15.jpg",
    discount: null,
  },
  {
    id: 23,
    title: "Lámpara de Hongos Regulable",
    price: 1390,
    description:
      "Lámpara de mesa de vidrio estilo retro Murano con rayas. Pequeña lámpara decorativa de hongos nocturnos para ambiente, niños, dormitorio, sala de estar, regalo para niñas.",
    category: "Lámparas",
    stock: "En stock",
    image: "/assets/41.jpg",
    discount: null,
  },
  {
    id: 24,
    title: "Organizador de Mesa Minimalista",
    price: 370,
    description:
      "Organizador minimalista de diseño trenzado en un solo color. Multifuncional para ordenar herramientas de maquillaje, etc.",
    category: "Organizadores",
    stock: "En stock",
    image: "/assets/16.jpg",
    discount: null,
  },
  {
    id: 25,
    title: "Lámpara de Mesa de Hongo Creativa LED",
    price: 548,
    description:
      "Lámpara de escritorio de madera, luz de noche LED regulable. Decorativa para el hogar, regalo cálido y único.",
    category: "Lámparas",
    stock: "En stock",
    image: "/assets/17.jpg",
    discount: null,
  },
  {
    id: 26,
    title: "Lámpara de Mesita de Noche de Hongo",
    price: 1427,
    description:
      "Lámpara de noche LED de vidrio con patrón en la superficie de un planeta. Pequeña para decoración del hogar, estudio, sala de estar, dormitorio, regalo.",
    category: "Lámparas",
    stock: "En stock",
    image: "/assets/18.jpg",
    discount: null,
  },
  {
    id: 27,
    title: "Bolsas Reutilizables para Comestibles",
    price: 169,
    description:
      "Bolsa de compras portátil y de gran capacidad, plegable para comestibles. Ideal para compras y viajes, organizadores y almacenamiento de cocina.",
    category: "Bolsas",
    stock: "En stock",
    image: "/assets/42.jpg",
    discount: null,
  },
  {
    id: 28,
    title: "Juego de 4 Contenedores Premium para Almacenamiento de Alimentos",
    price: 518,
    description:
      "Contenedores a prueba de fugas, libre de BPA, diseño hermético de 2 capas para preparación de comidas. Reutilizables y apilables, ideales para frutas, verduras, carne y granos.",
    category: "Contenedores",
    stock: "En stock",
    image: "/assets/20.jpg",
    discount: null,
  },
  {
    id: 29,
    title: "3 Piezas de Póster de Lienzo - Hoja de Palma Tropical",
    price: 199,
    description:
      "Pintura de hojas de palma tropical y monstera. Juego de arte de pared de lienzo impreso, minimalista y neutral para decoración del hogar y dormitorio.",
    category: "Arte de Pared",
    stock: "En stock",
    image: "/assets/21.jpg",
    discount: null,
  },
  {
    id: 30,
    title: "Conjunto de 6 Pósteres de Lienzo - Arte Moderno",
    price: 178,
    description:
      "Arte moderno y pósteres de mercado de flores para dormitorio, sala de estar, pasillo. Decoración de pared para invierno y habitación.",
    category: "Arte de Pared",
    stock: "En stock",
    image: "/assets/21.jpg",
    discount: null,
  },
  {
    id: 31,
    title: "2 Piezas de Pinturas en Lienzo - Bohemian Bauhaus",
    price: 272,
    description:
      "Pintura moderna medieval sobre lienzo. Arte de pared vintage para baño, dormitorio, oficina, sala de estar, decoración de galería de pared.",
    category: "Arte de Pared",
    stock: "En stock",
    image: "/assets/23.jpg",
    discount: null,
  },
  {
    id: 32,
    title: "3 Piezas de Póster de Lienzo - Arte Geométrico Abstracto",
    price: 255,
    description:
      "Arte moderno, geométrico y abstracto. Ideal para dormitorio, sala de estar, pasillo, decoración de pared y decoración de invierno.",
    category: "Arte de Pared",
    stock: "En stock",
    image: "/assets/24.jpg",
    discount: null,
  },
  {
    id: 33,
    title: "Mesa de noche minimalista moderna",
    description:
      "Ahorra espacio, estante de almacenamiento portátil para dormitorio y sala de estar, mueble de cómoda para dormitorio",
    price: 1412,
    image: "/assets/25.jpg",
    link: "https://www.temu.com/uy/mesa-de-noche-minimalista-moderna-ahorra-espacio-estante-de-almacenamiento-portatil-para-dormitorio-y-sala-de-estar-mueble-de-comoda-para-dormitorio-g-601099607909564.html",
  },
  {
    id: 34,
    title: "Pinzas para el cabello con patrón de cuadros coloridos",
    description:
      "Pinzas para el cabello antideslizantes para mujeres, accesorio para el cabello de sujeción fuerte para cabello grueso y otros tipos",
    price: 85,
    image: "/assets/26.jpg",
    link: "https://www.temu.com/uy/pinzas-para-el-cabello-con-patron-de-cuadros-coloridos-pinzas-para-el-cabello-antideslizantes-para-mujeres-accesorio-para-el-cabello-de-sujecion-fuerte-para-cabello-grueso--y-otros-tipos-g-601099535635397.html",
  },
  {
    id: 35,
    title: "Pinza para el cabello con patrón de tablero de ajedrez",
    description:
      "Pinza para el cabello impresa y hueca moderna, sujetador de cola de caballo antideslizante para mujeres y niñas",
    price: 55,
    image: "/assets/27.jpg",
    link: "https://www.temu.com/uy/pinza-para-el-cabello-con-patron-de-tablero-de-ajedrez-impreso-y-hueco-moderno-sujetador-de-cola-de-caballo-antideslizante-para-mujeres-y-ninas-g-601099537899589.html",
  },
  {
    id: 36,
    title: "4 uds pinzas para el cabello de colores mezclados",
    description:
      "Pinzas para el cabello de colores mezclados simples, flequillo lateral sin rastro, clips de pico de pato, accesorios elegantes para el cabello para mujer",
    price: 81,
    image: "/assets/28.jpg",
    link: "https://www.temu.com/uy/4-uds-pinzas-para-el-cabello-de-colores-mezclados-simples-flequillo-lateral-sin-rastro-clips-de-pico-de-pato-accesorios-elegantes-para-el-cabello-para-mujer-g-601099519957886.html",
  },
  {
    id: 37,
    title: "2 piezas de tazas de café de vidrio estilo INS",
    description:
      "Tazas de café de vidrio estilo INS para bebidas frías, vasos de agua de té de frutas de alta estética para uso doméstico, taza de leche de verano, material de vidrio de primera calidad",
    price: 480,
    image: "/assets/35.jpg",
    link: "https://www.temu.com/uy/2-piezas-de-tazas-de-cafe-de-vidrio-estilo-ins-para-bebidas-frias-vasos-de-agua-de-te-de-frutas-de-alta-estetica-para-uso-domestico-taza-de-leche-de-verano-material-de-vidrio-de-primera-calidad-g-601099568716494.html",
  },
  {
    id: 38,
    title: "2 tazas de vidrio con pajitas",
    description:
      "Taza de café de vidrio, taza de agua transparente para el hogar y la oficina",
    price: 624,
    image: "/assets/36.jpg",
    link: "https://www.temu.com/uy/2-tazas-de-vidrio-con-pajitas-taza-de-cafe-de-vidrio-taza-de-agua-transparente-para-el-hogar-y-la-oficina-g-601099553176913.html",
  },
  {
    id: 39,
    title: "Taza de agua irregular",
    description:
      "Taza de oruga creativa, taza de vidrio en espiral, linda taza de café para beber, utensilios de bebida de verano e invierno, regalo de Navidad, Halloween y Acción de Gracias",
    price: 319,
    image: "/assets/38.jpg",
    link: "https://www.temu.com/uy/taza-de-agua-irregular--taza-de-oruga-creativa-taza-de-vidrio-en-espiral-linda-taza-de-cafe-para-beber-utensilios-de-bebida-de-verano-e-invierno-regalo-de-navidad-halloween-y-accion-de-gracias-g-601099549204482.html",
  },
  {
    id: 40,
    title: "Vaso de vidrio reutilizable con rayas",
    description:
      "Vaso de vidrio reutilizable con rayas, 16.91 oz, solo lavado a mano, apto para café helado, té y jugo, aislado, sin patrón",
    price: 336,
    image: "/assets/39.jpg",
    link: "https://www.temu.com/uy/vaso-de-vidrio-reutilizable-con-rayas-16-91-oz-solo-lavado-a-mano-apto-para-cafe-helado-te-y-jugo-aislado-sin-patron-g-601099612356461.html",
  },
  {
    id: 41,
    title: "Bolso de Hombro Monocromático de Moda",
    price: 169,
    image: "/assets/43.jpg",
    description:
      "Bolso de hombro monocromático de moda con amplio bolsillo y cordón. Perfecto para compras, viajes y fitness.",
    url: "https://www.temu.com/uy/bolso-de-hombro-monocromatico-de-moda-amplio-bolsillo-con-cordon-bolso-de-compras-de-supermercado-bolso-de-viaje-plegable-y-portatil-bolso-de-fitness-con-cordon-g-601099516447148.html?_oak_mp_inf=EKyTnJmm1ogBGh1nb29kc18xdWlpcDNfc29sZF9vdXRfc2ltaWxhciDBgeDCkjI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F51634860c0a1496516f3cb35a7f062a0.jpg&spec_gallery_id=25013132&refer_page_sn=10032&refer_source=10016&freesia_scene=25&_oak_freesia_scene=25&_oak_rec_ext_1=MTY5MDA&_oak_gallery_order=1739453672%2C1784203094%2C1260613113%2C866986810%2C911239635&refer_page_el_sn=200970&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail&refer_page_name=goods&refer_page_id=10032_1722958741202_hrasfu0wyg",
  },
  {
    id: 42,
    title: "Lámpara de Escritorio Moderna",
    price: 436,
    image: "/assets/44.jpg",
    description:
      "Lámpara de escritorio de estilo nórdico con base de madera y pantalla texturizada. Alimentación por USB y control de teclas.",
    url: "https://www.temu.com/uy/lampara-de-escritorio-moderna-de-estilo-nordico-con-base-de-madera-y-pantalla-texturizada-alimentacion-por-usb-control-de-teclas-iluminacion-led-adecuada-para-uso-domestico-y-al-aire-libre-g-601099605201208.html?_oak_mp_inf=ELiixcOm1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIKXQtKCSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbccb739b-9fd0-4d5a-84ab-ae28f2bd6de0.jpg&spec_gallery_id=2247942857&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NDM2MDA&_oak_gallery_order=482112869%2C565496159%2C1949209177%2C416507795%2C1338973944&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 43,
    title: "Molde de Silicona en Forma de U para Velas DIY",
    price: 120,
    image: "/assets/45.jpg",
    description:
      "Molde de silicona en forma de U para velas DIY con diseño de arco a rayas. Perfecto para manualidades de yeso y resina.",
    url: "https://www.temu.com/uy/molde-de-silicona-en-forma-de-u-para-velas-diy-con-diseno-de-arco-a-rayas-manualidades-de-yeso-y-resina-molde-de-cera-para-decoracion-del-hogar-g-601099559476511.html?_oak_mp_inf=EJ%2B63q2m1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIKbQtKCSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F5795ab8d-ea93-45c8-9c89-c7fe43280c80.jpg&spec_gallery_id=2104666878&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=MTIwMDA&_oak_gallery_order=787763601%2C1571329375%2C1405094826%2C645952380%2C1178095484&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 44,
    title: "Molde de Resina para Velas Geométricas",
    price: 102,
    image: "/assets/46.jpg",
    description:
      "Molde de silicona con líneas de zig-zag para velas de pilar en espiral. Ideal para hacer velas aromáticas y manualidades de arcilla.",
    url: "https://www.temu.com/uy/molde-de-resina-para-velas-geometricas-de-1-pieza-molde-de-silicona-con-lineas-de-zig-zag-molde-de-silicona-para-velas-de-pilar-en-espiral-con-aroma-molde-para-decorar-el-hogar-hacer-velas-aromaticas-y-manualidades-de-arcilla-en-forma-de-s-en-3d-g-601099542206267.html?_oak_mp_inf=ELuuwKWm1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIPrC4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F903b65cc-408a-4877-a510-d3ad52a267bc.jpg&spec_gallery_id=2083486961&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=MTAyMDA&_oak_gallery_order=1874315926%2C57255090%2C1322400165%2C1413775008%2C1395360864&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 45,
    title: "Bolso de Lona de Gran Capacidad",
    price: 412,
    image: "/assets/47.jpg",
    description:
      "Bolso de lona con múltiples bolsillos, ideal para la escuela, el trabajo, los viajes y las compras.",
    url: "https://www.temu.com/uy/bolso-de-lona-de-gran-capacidad-bolso-de-hombro-con-multiples-bolsillos-bolso-de-mano-portatil-adecuado-para-la-escuela-el-trabajo-los-viajes-las-compras-g-601099547950207.html?_oak_mp_inf=EP%2F4nqim1ogBGh1nb29kc19taDBpbGpfc29sZF9vdXRfc2ltaWxhciCt0%2BLCkjI%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fbeb2c020-15da-4eeb-a21d-9a4f83f4d87e.jpg&spec_gallery_id=2101402089&refer_page_sn=10032&refer_source=10016&freesia_scene=25&_oak_freesia_scene=25&_oak_rec_ext_1=NDEyMDA&_oak_gallery_order=731427956%2C2013589692%2C121245689%2C1993030713%2C289362596&refer_page_el_sn=200970&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 46,
    title: "Bolso de Hombro Tejido a Cuadros",
    price: 615,
    image: "/assets/48.jpg",
    description:
      "Bolso tote de gran capacidad, ligero para la escuela, viajes, compras y la playa en verano.",
    url: "https://www.temu.com/uy/bolso-de-hombro-tejido-a-cuadros-bolso-tote-de-gran-capacidad-bolso-ligero-para-la-escuela-viajes-compras-y-la-playa-en-verano-g-601099547285067.html?_oak_mp_inf=EMus9qem1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIPvC4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F12b92ee8-7306-4920-867a-fb58cd56339e.jpg&spec_gallery_id=2093154351&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NjE1MDA&_oak_gallery_order=336089505%2C229371055%2C777782345%2C496009421%2C1939473900&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 47,
    title: "Juego de Condimentos de Cerámica Japonés Vintage",
    price: 585,
    image: "/assets/49.jpg",
    description:
      "Salero, azucarero y especiero con tapas para almacenamiento en la cocina y esenciales para barbacoa.",
    url: "https://www.temu.com/uy/juego-de-condimentos-de-ceramica-japones-vintage-saleros-azucareros-y-especieros-con-tapas-para-almacenamiento-en-la-cocina-y-esenciales-para-barbacoa-g-601099583868099.html?_oak_mp_inf=EMOZr7mm1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIP3C4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2F38c1b1f3-4f94-493c-884f-0650ff3c083d.jpg&spec_gallery_id=2183676133&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NTg1MDA&_oak_gallery_order=959888857%2C2083946469%2C1245566525%2C1822082231%2C659903864&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 48,
    title: "Bolso de Cubo con Patrón de Corazón",
    price: 403,
    image: "/assets/53.jpg",
    description: "Bolso cruzado con cordón, dulce y elegante para mujeres.",
    url: "https://www.temu.com/uy/bolso-de-cubo-con-patron-de-corazon-lindo-bolso-cruzado-con-cordon-dulce-bolso-de-mano-elegante-para-mujeres-g-601099547301287.html?_oak_mp_inf=EKer96em1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIP3C4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Ffancy%2Fea3bd43a-51b4-4063-8b23-e61761c0d698.jpg&spec_gallery_id=2093114875&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=NDAzMDA&_oak_gallery_order=268493070%2C433602645%2C414047585%2C1291584721%2C1666166568&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 49,
    title: "Alfombra Irregular de Tierra de Diatomeas",
    price: 371,
    image: "/assets/51.jpg",
    description:
      "Alfombra decorativa para el hogar, antideslizante y absorbente. Blanco y negro, 40x60cm.",
    url: "https://www.temu.com/uy/1pc-alfombra-irregular-de-tierra-de-diatomeas-alfombra-decorativa-para-el-hogar-antideslizante-y-absorbente-blanco-y-negro-40x60cm-alfombra-para-el-suelo-de-la-sala-de-estar-y-el-dormitorio-g-601099556966967.html?_oak_mp_inf=ELekxaym1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIP3C4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2Fopen%2F2024-03-26%2F1711418418084-1e8955b838e346518a279528c5c92e4f-goods.jpeg&spec_gallery_id=2162228166&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=MzcxMDA&_oak_gallery_order=334127487%2C1863081939%2C1636608246%2C124193145%2C192032629&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
  {
    id: 50,
    title: "Botella de Bomba de Plástico PET",
    price: 154,
    image: "/assets/52.jpg",
    description:
      "Botella de diseño de rayas para gel de ducha, loción, champú. Disponible en 1 o 2 piezas, 500ml.",
    url: "https://www.temu.com/uy/1-2pcs-500ml-botella-de-bomba-de-plastico-pet-diseno-de-rayas-botella-vacia-de-gel-de-ducha-locion-champu-decoracion-de-bano-g-601099539748653.html?_oak_mp_inf=EK2uqqSm1ogBGhZnb29kc19pNnlzbXNfcmVjb21tZW5kIP7C4cKSMg%3D%3D&top_gallery_url=https%3A%2F%2Fimg.kwcdn.com%2Fproduct%2FFancyalgo%2FVirtualModelMatting%2F565374c91bc9edb13cc1fbe578bae885.jpg&spec_gallery_id=2075460348&refer_page_sn=10032&refer_source=10016&freesia_scene=11&_oak_freesia_scene=11&_oak_rec_ext_1=MTU0MDA&_oak_gallery_order=159474896%2C1167997058%2C462840279%2C1011755665%2C1453499182&refer_page_el_sn=200444&refer_page_name=goods&refer_page_id=10032_1722886727721_l2y41uhvgp&_x_sessn_id=j81qeewkn1&_x_enter_scene_type=cate_tab&_x_msgid=37-20240510-04-B-730876868349968384-427-hop8ngXQ&_x_src=mail",
  },
];

const productsUpperCase = products.map((product) => ({
  ...product,
  title: product.title.toUpperCase(),
}));

export default productsUpperCase;

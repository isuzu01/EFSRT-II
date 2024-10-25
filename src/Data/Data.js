const data = {
  categorias: [
    {
      id_cat: 1,
      categoria: "Meditación",
      clase: "meditacion",
      imagen_categoria: require("../img/meditacion.png"),
      nombre_ejercicios: [
        {
          id: " AM1",
          nombre: "Vipassana",
          instructor: "María Rossich",
          imagen_instructor: require("../img/maria-rossich-ini.png"),
          nivel: "Basico",
          imagen_ejercicio: "maria.png",
          video:
            "https://media.istockphoto.com/id/1941709866/es/v%C3%ADdeo/madre-y-su-peque%C3%B1a-hija-practicando-yoga-en-el-sal%C3%B3n-de-su-casa.mp4?s=mp4-640x640-is&k=20&c=adjwKUXHjnpDUuCOJ_N3S9k8Ps2xlLw45SoAOwGiucQ=",
          descripcion:
            " se aplica este tipo de meditación que enfatiza en la conciencia de la respiración, haciendo que el aire salga y entre por la nariz. Cada vez que se cuelen pensamientos o emociones, identifícalos y déjalos ir sin juzgar. Esta técnica de concentración y meditación se basa en la introspección. Debes intentar ser consciente de todo lo que ocurre en tu interior para luego poder controlarlo.",
        },
        {
          id: "AM2",
          nombre: "Kundalini",
          instructor: "María Rossich",
          imagen_instructor: require("../img/maria-rossich-ini.png"),
          nivel: "Basico",
          imagen_ejercicio: "maria.png",
          video:
            "https://www.shutterstock.com/shutterstock/videos/3466214933/preview/stock-footage-fitness-zen-meditating-yoga-practicing-balance-kundalini-energy-meditation-mindfulness-asana-yoga.webm",
          descripcion:
            "La energía Kundalini se encuentra en la base de la columna vertebral (el chakra raíz), y esta meditación nos sirve para despertar esa energía, moverla a través del cuerpo y liberarla. Su propósito es crear un sistema de comunicación entre tu mente y tu cuerpo para aliviar los problemas mentales, físicos y espirituales, gracias a lograr adquirir una mayor conciencia e intención en tu vida diaria.",
        },
        {
          id: "AM3",
          nombre: "Meditación Chakra",
          instructor: "María Rossich",
          imagen_instructor: require("../img/maria-rossich-ini.png"),
          nivel: "Basico",
          imagen_ejercicio: "maria.png",
          video:
            "https://www.shutterstock.com/shutterstock/videos/3428939821/preview/stock-footage-man-with-headphones-practice-guided-meditation-yoga-self-care-at-home.webm",
          descripcion: 
            "se utiliza el sonido, las manos se colocan en lugares específicos y se utilizan técnicas de visualización para conectar con los chakras que están bloqueados o desalineados. Los chakras activados ayudan a sentir equilibrio emocional y gozar de mayor seguridad de pensamientos y sentimientos, y a sentirse físicamente bien",
        },
      ],
    },
    {
      id_cat: 2,
      categoria: "Cardio",
      clase: "cardio",
      imagen_categoria: require("../img/cardio.png"),
      nombre_ejercicios: [
        {
          id: "BC1",
          nombre: "Saltos de tijera",
          instructor: "Sergio Peinado",
          imagen_instructor: require("../img/sergio-peinado-ini.png"),
          nivel: "Intermedio",
          imagen_ejercicio: "maria.png",
          video:
            "https://www.shutterstock.com/shutterstock/videos/1030846283/preview/stock-footage-sport-fitness-and-healthy-lifestyle-concept-indian-man-doing-jumping-jack-exercise-at-home.webm",
          descripcion: "Ponte en pie con los pies separados a la anchura de la cadera y los brazos a los lados. Dobla las rodillas e impúlsate con los pies para saltar. Cuando saltes, abre las piernas a los lados hasta que la distancia entre ellas supere un poco la anchura de los hombros, y luego vuelve a saltar hacia el centro.",
        },
      ],
    },
    {
      id_cat: 3,
      categoria: "Fuerza",
      clase: "fuerza",
      imagen_categoria: require("../img/fuerza.png"),
      nombre_ejercicios: [
        {
          id: "DF3",
          nombre: "Sit-ups",
          instructor: "María Rossich",
          imagen_instructor: require("../img/maria-rossich-ini.png"),
          nivel: "Avanzado",
          imagen_ejercicio: require("../img/maria-banner.png"),
          video:
            "https://www.shutterstock.com/shutterstock/videos/1026488681/preview/stock-footage-athletic-man-working-out-in-a-loft-style-gym.webm",
          descripcion: "Son flexiones que se hacen desde el suelo. Trabajan la fuerza y la resistencia y se enfocan en los músculos abdominales, la cadera y los oblicuos internos. Este ejercicio se considera para personas con nivel intermedio o avanzado, pero para los principiantes se recomienda una versión light como pueden ser los crunch.",
        },
      ],
    },
    {
      id_cat: 4,
      categoria: "Baile",
      clase: "baile",
      imagen_categoria: require("../img/baile.png"),
      nombre_ejercicios: [
        {
          id: "FB4",
          nombre: "Zumba",
          instructor: "Sergio Peinado",
          imagen_instructor: require("../img/sergio-peinado-ini.png"),
          nivel: "Basico",
          imagen_ejercicio: "https://www.youtube.com/watch?v=uVG4JOlxTN8",
          video:
            "https://www.shutterstock.com/shutterstock/videos/1075995434/preview/stock-footage-dance-trainer-choreography-practicing-aerobics-workout-female-active-hobby-home-gym-cheerful.webm",
          descripcion: "combina movimientos de baile y rutinas aeróbicas variadas que se ejecutan al ritmo de música energética con una coreografía que incorpora movimientos de hip-hop, samba, samba, salsa, merengue y mambo.",
        },
      ],
    },
    {
      id_cat: 5,
      categoria: "Yoga",
      clase: "yoga",
      imagen_categoria: require("../img/yoga.png"),
      nombre_ejercicios: [
        {
          id: "GY5",
          nombre: "Bidalasana",
          instructor: "Magali Dalix",
          imagen_instructor: require("../img/magali-dalix-ini.png"),
          nivel: "Basico",
          imagen_ejercicio: "maria.png",
          video:
            "https://media.istockphoto.com/id/1065599886/es/v%C3%ADdeo/forma-hermosa-chica-atl%C3%A9tica-en-ropa-de-entrenamiento-es-haciendo-ejercicios-de-burpee-de.mp4?s=mp4-640x640-is&k=20&c=WekYscV4YQjLbFIpbNBrxesSGVazTO1uDSowM2-xSIE=",
          descripcion: "Ambas posturas parten de la posición “a gatas”, con las piernas abiertas el ancho de las caderas y las rodillas alineadas con ésta. Colocamos los hombros, codos y muñecas formando una línea perpendicular al suelo. Al inhalar nuestra espalda se curva hacia el suelo (Marjaryasana) y al exhalar arqueamos la espalda dirigiéndola hacia el techo (Bidalasana)",
        },
      ],
    },
    {
      id_cat: 6,
      categoria: "Pilates",
      clase: "pilates",
      imagen_categoria: require("../img/pilates.png"),
      nombre_ejercicios: [
        {
          id: "HP6",
          nombre: "Torsión",
          instructor: "Miguel Peinado",
          imagen_instructor: require("../img/miguel-peinado-ini.png"),
          nivel: "Intermedio",
          imagen_ejercicio: "maria.png",
          video:
            "https://media.istockphoto.com/id/2158756795/es/v%C3%ADdeo/mujeres-atl%C3%A9ticas-haciendo-abdominales-con-anillos-de-goma-en-el-gimnasio.mp4?s=mp4-640x640-is&k=20&c=O85bnkirzNG7FV-8CsdbmUHJ0QfH-7-uTQBtF0nmTGM=",
          descripcion: "En este ejercicio vamos a trabajar la rotación de la columna. Para ello es importante que pongas tu foco en alargar tu espalda, sintiendo que creces. Y desde ahí, nace la rotación.",
        },
      ],
    },
  ],
};

export default data;

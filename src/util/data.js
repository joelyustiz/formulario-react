const language = {
  home_title: "Hi, I'm Joel Yustiz, developer",
};

const form1 = [
  {
    key: 1,
    id: "nombre",
    label: "Nombre",
    type_components: 1
  },
  {
    key: 3,
    id: "apellido",
    label: "Apellido",
    type_components: 1
  },
  {
    key: 2,
    id: "cve_sexo",
    label: "Sexo",
    type_components: 2,
    data: [
      {
        cve: 1,
        value: "M"
      },
      {
        cve: 2,
        value: "F"
      }
    ]
  },
  {
    key: 4,
    id: "comentario",
    label: "Comentario",
    type_components: 1
  }
]

const form2 = [
  {
    key: 5,
    id: "cantidad",
    label: "Cantidad",
    type_components: 1
  }
]

const form3 = [
  {
    key: 6,
    id: "cve_direccion",
    label: "Dirección",
    type_components: 1
  },
  {
    key: 7,
    id: "cve_codigo",
    label: "Código postal",
    type_components: 1
  },
  {
    key: 8,
    id: "cve_pais",
    label: "País",
    type_components: 2,
    data: [
      {
        cve: 1,
        value: "México"
      },
      {
        cve: 2,
        value: "Venezuela"
      },
      {
        cve: 3,
        value: "Estados Unidos"
      }

    ]
  }

]

export {
  language,
  form1,
  form2,
  form3
};

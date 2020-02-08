const typeDamageCapotamento: any = require('@assets/images/typeDamage_capotamento.jpg')
const typeDamageColisao: any = require('@assets/images/typeDamage_colisao.jpg')
const typeDamageIncendio: any = require('@assets/images/typeDamage_incendio.jpg')
const typeDamageEnchente: any = require('@assets/images/typeDamage_enchente.jpg')

export const categoriesMock = {
    Id: 0,
    Company: {
      Id: 1,
      Name: "Allianz"
    },
    Categories: [
      {
        Id: 1,
        Label: "Capotamento",
        Imagem: typeDamageCapotamento,
        Point: 4
      },
      {
        Id: 2,
        Label: "Incêndio",
        Imagem: typeDamageIncendio,
        Point: 4
      },
      {
        Id: 3,
        Label: "Enchente",
        Imagem: typeDamageEnchente,
        Point: 4
      },
      {
        Id: 4,
        Label: "Incêndio",
        Imagem: typeDamageIncendio,
        Point: 4
      }
    ]
}

export const questionsMock = [
  {
    id: 1,
    questions: [
      {
        "Id": 1,
        "Label": "Danos Laterais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      },
      {
        "Id": 1,
        "Label": "Danos Frontais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      }
    ]
  },
  {
    id: 2,
    questions: [
      {
        "Id": 1,
        "Label": "Danos Laterais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      },
      {
        "Id": 1,
        "Label": "Danos Frontais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      }
    ]
  },
  {
    id: 3,
    questions: [
      {
        "Id": 1,
        "Label": "Danos Laterais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      },
      {
        "Id": 1,
        "Label": "Danos Frontais",
        "Type": 0,
        "Peso" : 4,
        "Answer" : false
      }
    ]
  }
]
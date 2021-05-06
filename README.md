# Formularios Dinámicos

## Instalación 
### `npm i`

## Realizar build del proyecto para desarrollo
### `npm run build:dev`

## Realizar build del proyecto para productivo
### `npm run build:dll`
### `npm run build:prod`


## Notas:

El proyecto se basa en al creación de formularios de manera dinámicas a través de json, para su configuración es necesario entrar al archivo data.js y ahi colocar los componentes.
Se puede agregar o quitar tantos componentes sean necesarios. Con la finalidad de poder controlar los campos desde un API.

|Propiedad| Significado | 
|:---:| :---: | 
|Key| identificador|
|id| clave única que será usada en el json de salida|
|label| Texto a mostrar|
|type_components| Tipo de compomente, se soporta Input(1) y select (2)|
|data| En caso de ser select aquí se pondrá el catálogo del select|

## Ejemplo

```javascript
[
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
```

# jsPOO-Middle

## Métodos estáticos del prototipo Object

```js
const juan = {
  name: "jaunito",
  age: 18,
  approvedCourses: ["curso 1"],
  addCourse(newCourse) {
    console.log("this será:", this);
    console.log("this.approvedCourses será:", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
}
```

- **Object.keys(juan):** Recibe como argumento el objeto del cual va a listar un Arrays de String (Las llaves) sin importar si son atributos o métodos.
 ```js
console.log("keys:",Object.keys(juan))
```

- **Object.getOwnPropertyNames(juan):** Recibe como argumento el objeto del cual va a listar un Arrays de String (Las llaves) sin importar si son atributos o métodos.
```js
console.log("getOwnPropertyNames",Object.getOwnPropertyNames(juan))
```

- **Object.entries(juan):** Recibe como argumento el objeto del cual va retornar un Arrays de Arrays (Llave - valor).
```js
console.log("entries:",Object.entries(juan))
```

- **Object.getOwnPropertyDescriptors(juan):**  Recibe como argumento el objeto del cual va retornar un Objetos de Objetos (Llave - valor) 
```js
console.log("getOwnPropertyDescriptor:",Object.getOwnPropertyDescriptors(juan))
```

- **Object.defineProperty(objeto a examinar, nombre del nuevo atributo a crear, la lista de atributo):** Con esta propiedad se pueden definir nuevas propiedades a nuestro objeto. Así mismo, se puede configurar ciertas características de la propiedad tales como:
  - Configurable: Esta indica si la propiedad puede ser borrada o eliminada
  - Enumerable: Indica si la propiedad puede ser mostrada en la enumeración de las mismas. Existen ciertos métodos que toman como referencia este valor para mostrar la propiedad
  - Writable: Esta indica si la propiedad puede ser modificada con el operador de asignación (=)

```js
console.log("defineProperty:",Object.defineProperty(juan, "pruebaNasa", {
  writable: false, // Permite borrar pero no modificar el valor
  enumerable: false, // Flase hace que no aparesca cuando se enlistan los nombre con: Object.keys()
  configurable: false, // Impode que podamos borar propiedades de nuestros objetos, pero si editarlas
}))
```

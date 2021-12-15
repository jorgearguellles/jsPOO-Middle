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
## Cómo funciona la memoria en JS

Las variables son referencias a un espacio en memoria.
Los navegadores web usan dos tipos de memorias: Stack y Heap.
  - La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
  - La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).

Entender cómo funciona la memoria en JavaScript no solo será útil para aprender POO, sino también para programación funcional.

## Shallow copy en JavaScript

Shallow Copy se refiere a la forma de crear un nuevo objeto a partir de las propiedades de otro. Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.

Métodos estatidos de:
- Object.assing();
- Object.crate();

## Qué es JSON.stringify & JSON.parse

- **JSON.stringify** es un método estático del prototopo JSON que nos permite convertir objetos en un string. **{} -> ""**
- **JSON.parse** es un método estático del prototopo JSON que nos permite convertir string en objetos. **"" -> {}**
- JSON.stringify & JSON.parse: No saben trbajr con métodos al interior de los Objetos.

## La recursividad

**Es cuando una función se llama así misma** y esta funciñon que se llamo así misma cre una nueva ejecución de nuestra ajecución hasta coincidir con el **caso base** que detendra las llamados así misma, y retornara un resultado final.



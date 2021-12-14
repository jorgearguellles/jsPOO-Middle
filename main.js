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

console.log("keys:",Object.keys(juan))
console.log("getOwnPropertyNames",Object.getOwnPropertyNames(juan))
console.log("entries:",Object.entries(juan))
console.log("getOwnPropertyDescriptor:",Object.getOwnPropertyDescriptors(juan))
console.log("defineProperty:",Object.defineProperty(juan, "pruebaNasa", {
  writable: false,
  enumerable: false,
  configurable: false,
}))
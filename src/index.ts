import { Product } from "./entities/Product.ts";
import { Student } from "./entities/Student.ts";
import { ProductFactory } from "./factories/ProductFactory.ts";
import { StudentFactory } from "./factories/StudentFactory.ts";

const studentService = StudentFactory.getInstance();
const productService = ProductFactory.getInstance();

const maique = new Student({ id: 1, name: "Maique Rosa" });
const ingrid = new Student({ id: 2, name: "Ingrid Azevedo" });

const laptop = new Product({ id: 1, title: "Laptop da Xuxa", price: 999.99 });

studentService.create(maique);
studentService.create(ingrid);

studentService.update(maique.id, new Student({ id: maique.id, name: "Maique da Silva Rosa" }));
studentService.delete(ingrid.id);

console.log("Students");
console.log("--------------------");
for (const stu of studentService.read()) {
  console.log(`ID: ${stu.id}, Name: ${stu.name}`);
}
console.log("....................\n\n");

productService.create(laptop);

console.log("Products");
console.log("--------------------");
for (const prod of productService.read()) {
  console.log(`ID: ${prod.id}, Title: ${prod.title}, Price: ${prod.price}`);
}
console.log("....................\n\n\n\n");

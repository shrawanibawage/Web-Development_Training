import { greeting,Product,greet } from "./file1";
console.log(greeting);
greet();
var prod = new Product('Laptop',45000);
prod.getinfo();

import * as trial from "./file1";
console.log(trial.greeting);
trial.greet();
var prod = new trial.Product('Laptop',42000);
prod.getinfo();
# Json Generator
A simple library to generate json mocks.

[![License][license-image]][license-url] [![NPM Version][npm-image]][npm-url]  [![Dependencies][dependencies-image]][dependencies-url] [![DependenciesDev][dependencies-dev-image]][dependencies-dev-url] [![Releases][releases-image]][releases-url]  [![Contributors][contributors-image]][contributors-url] [![Issues][issues-image]][issues-url] [![NPM Downloads][npm-downloads-image]][npm-downloads-url] 

## Installing  
Use the npm command to install this library into your project:  
```shell 
npm i json-generator --save  
```

### Usage Example
```js 
const { generateJson }  = require('json-generator');
console.log(generateJson({
  id: "id;objectId",
  children: [
    5,
    {
      name: "fullName",
      age: "int;0;10"
    }
  ],
  currentJob: {
    title: "Developer",
    salary: "mask;"
  },
  jobs: [
    2,
    {
      title: 'random;["developer", "medic", "teacher", "CEO"]',
      salary: "money"
    }
  ],
  maxRunDistance: "float;1;20;1",
  cpf: "cpf",
  cnpj: "cnpj",
  pretendSalary: "money",
  age: "int;20;80",
  gender: "gender",
  firstName: "firstName",
  lastName: "lastName",
  phone: "maskInt;+55 (83) 9####-####",
  address: "address",
  hairColor: "color"
}));
  
/**  
 * Result:  
{
  id: "603d61c3a948d65e896a9675",
  children: [
    { name: "Riley Kline", age: 6 },
    { name: "Duffy Reed", age: 8 },
    { name: "Chance Alexander", age: 4 },
    { name: "Leslie Ellison", age: 6 },
    { name: "Shiloh Tran", age: 7 }
  ],
  currentJob: { title: "Developer", salary: "R$ 1.4577,25" },
  jobs: [
    { title: "medic", salary: "R$ 3.3749,05" },
    { title: "developer", salary: "R$ 2.1712,49" }
  ],
  maxRunDistance: 6.7,
  cpf: "263.918.428-84",
  cnpj: "87.371.227/0001-21",
  pretendSalary: "R$ 9.5336,56",
  age: 30,
  gender: "male",
  firstName: "Donovan",
  lastName: "Bright",
  phone: "+55 (83) 91770-4875",
  address: "799 Applegate Court - Verdi, Pennsylvania, Niue.",
  hairColor: "black"
};

 */  
```  

You can use the functions separately, to generate resources:

```js 
const {
    getId,
    getFullName,
    getInt,
    getMaskInt,
    getFloat,
    getCpf,
    getCnpj,
    getRandom,
    getMoney,
    getGender,
    getFirstName,
    getLastName,
    getAddress,
    getColor
} = require('json-generator');

console.log({
    id: getId('objectId'),
    children: Array.from(Array(5), function () {
        return {
            name: getFullName(),
            age: getInt(0, 10)
        };
    }),
    currentJob: {
        title: "Developer",
        salary: getMoney()
    },
    jobs: Array.from(Array(2), function () {
        return {
            title: getRandom(["developer", "medic", "teacher", "CEO"]),
            salary: getMoney()
        };
    }),
    maxRunDistance: getFloat(1, 20, 1),
    cpf: getCpf(),
    cnpj: getCnpj(),
    pretendSalary: getMoney(),
    age: getInt(20, 80),
    gender: getGender(),
    firstName: getFirstName(),
    lastName: getLastName(),
    phone: getMaskInt('+55 (83) 9####-####'),
    address: getAddress(),
    hairColor: getColor()
});

/**  
 * Result:  
{
  id: "603d61c3a948d65e896a9675",
  children: [
    { name: "Riley Kline", age: 6 },
    { name: "Duffy Reed", age: 8 },
    { name: "Chance Alexander", age: 4 },
    { name: "Leslie Ellison", age: 6 },
    { name: "Shiloh Tran", age: 7 }
  ],
  currentJob: { title: "Developer", salary: "R$ 1.4577,25" },
  jobs: [
    { title: "medic", salary: "R$ 3.3749,05" },
    { title: "developer", salary: "R$ 2.1712,49" }
  ],
  maxRunDistance: 6.7,
  cpf: "263.918.428-84",
  cnpj: "87.371.227/0001-21",
  pretendSalary: "R$ 9.5336,56",
  age: 30,
  gender: "male",
  firstName: "Donovan",
  lastName: "Bright",
  phone: "+55 (83) 91770-4875",
  address: "799 Applegate Court - Verdi, Pennsylvania, Niue.",
  hairColor: "black"
};

 */  
```  

More details in the [wiki](https://github.com/lucasrochagit/json-generator/wiki) page as soon as possible.

### Future Features  
- ¹A detailed wiki for library usage

## License

Distributed under the APACHE License. See `LICENSE` for more information.

<!-- CONTACT -->

## Authors

- **Lucas Rocha** - _Initial Work_. </br></br>
  [![Twitter](https://img.shields.io/static/v1?label=twitter&message=@lucasrochacc&color=16A4FB)](https://twitter.com/lucasrochacc)
  [![Facebook](https://img.shields.io/static/v1?label=facebook&message=@lucasrochacc&color=0F8EF2)](https://www.facebook.com/lucasrochacc)
  [![LinkedIn](https://img.shields.io/static/v1?label=linkedin&message=@lucasrochacc&color=0A66C2)](https://www.linkedin.com/in/lucasrochacc/)
  [![Github](https://img.shields.io/static/v1?label=github&message=@lucasrochagit&color=black)](https://github.com/lucasrochagit/)
  [![Instagram](https://img.shields.io/static/v1?label=instagram&message=@lucasrochacc&color=BF2A6D)](https://www.instagram.com/lucasrochacc/) </br></br>
  

[//]: # (These are reference links used in the body of this note.)
[node.js]: <https://nodejs.org>  
[npm.js]: <https://www.npmjs.com/>  
[license-image]: https://img.shields.io/badge/license-Apache%202-blue.svg
[license-url]: https://github.com/lucasrochagit/json-generator/blob/main/LICENSE
[npm-image]: https://img.shields.io/npm/v/json-generator.svg?color=red&logo=npm
[npm-url]: https://npmjs.org/package/json-generator
[npm-downloads-image]: https://img.shields.io/npm/dm/json-generator.svg
[npm-downloads-url]: https://npmjs.org/package/json-generator
[dependencies-image]: https://shields.io/badge/dependencies-0-green
[dependencies-url]: https://shields.io/badge/dependencies-0-green
[dependencies-dev-image]: https://shields.io/badge/devDependencies-0-green
[dependencies-dev-url]: https://shields.io/badge/devDependencies-1-green
[releases-image]: https://img.shields.io/github/release-date/lucasrochagit/json-generator.svg
[releases-url]: https://github.com/lucasrochagit/json-generator/releases
[contributors-image]: https://img.shields.io/github/contributors/lucasrochagit/json-generator.svg?color=green
[contributors-url]: https://github.com/lucasrochagit/json-generator/graphs/contributors
[issues-image]: https://img.shields.io/github/issues/lucasrochagit/json-generator.svg
[issues-url]: https://github.com/lucasrochagit/json-generator/issues

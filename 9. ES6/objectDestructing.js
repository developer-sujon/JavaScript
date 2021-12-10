/**
 *  Object Destructing JavaScript
 */

let person = {
    firstName: 'Mohammad',
    lastName: 'Sujon',
    dob: '16 - 11 - 2000',
    skills: {
        design: 'React',
        development: 'Node Js'
    }
}

// let { firstName: fName, lastName, dob } = person;
// console.log(fName, lastName, dob);

// function displayPerson({firstName: fName, lastName, dob}) {
//     console.log(fName);
// }
// displayPerson(person)

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);
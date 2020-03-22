/*jshint esversion: 6 */
const companies=[
    {name: "Companie One", category: "Finance", start: 1983, end: 2003},
    {name: "Companie Two", category: "Retail", start: 1992, end: 2008},
    {name: "Companie Four", category: "Auto", start: 1999, end: 2007},
    {name: "Companie Five", category: "Retail", start: 1989, end: 2010},
    {name: "Companie Six", category: "Technology", start: 2009, end: 2014},
    {name: "Companie Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Companie Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Companie Nine", category: "Retail", start: 1981, end: 1989}
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
        //Get 21 and older:
// //for each
    //eerst traditionnele for next loop:
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
    // nu de moderne ES6 forEach method:
// companies.forEach(function(company){
//     console.log(company);
// })
//filter
    //eerst met een for next loop:
// let canDrink = [];
// for(let i = 0; i < ages.length;i++){
//     if(ages[i] >=21) {
//         canDrink.push(ages[i]);
//     }
// }
    //nu met de filter method:
// const canDrink=ages.filter(function(age) {
//     if(age >=21) {
//         return true;
//     }
// });
    //nu met ES6 arrow function: (alles in 1 regel!!!!)
//const canDrink=ages.filter(age => age >=21);

//console.log(canDrink);
        //filter company cagtegory
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

    //nu met ES6 arrow function: (alles in 1 regel!!!!)
//const retailCompanies=companies.filter(company => company.category === 'Retail');
    // companies started between 1980 and 1990
//const eightyCompanies=companies.filter(company => company.start >= 1980 && company.start < 1990);
        //companies older than 10 years
// const tenYearCompanies=companies.filter(company => (company.end - company.start >= 10));
// console.log(tenYearCompanies);
//map
    //create array of company names
// companyNames= companies.map(function(company) {
//     return company.name;
// });

// const testMap= companies.map(function(company) {
//     return 'ernst';
// });

// console.log(testMap);
    //eerst met function:
// const companyDetails= companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

    //nu de korte arrow functie:
// const companyDetails=companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyDetails);

// const agesSquare=ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const agesTimesTwo=ages.map(age => age*2);
// console.log(agesTimesTwo);

// const ageMap = ages
//     .map(age => age*2)
//     .map(age => Math.sqrt(age));

// console.log(ageMap);

//sort
    //lange methode met een function:
// const sortedCompanies=companies.sort(function(c1,c2){
//     if(c1.start >c2.start) {
//         return 1;
//     } else {
//         return-1;
//     }
// });
    //en de korte methode met arrow functie
// const sortedCompanies=companies.sort((a,b) => (a.start > b.start) ? 1:-1);
// console.log(sortedCompanies);
// Combine Methods
//Sort ages
//const sortAges = ages.sort((a, b) => a - b);
const combined = companies
  .map(company => company.name)
  .sort()

console.log(combined);

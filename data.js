function vaxTrail(infoContainer) {
    let A = [];
    let B = [];
    let C = [];
    let D = [];

    for (let i = 0; i < infoContainer.length; i++) {

        let info = infoContainer[i]

        if (info.age >= 20 && info.age <= 30 && info.temperature < 100) {
            A.push(info);
        } else if (info.age >= 31 && info.age <= 40 && info.temperature < 100) {
            B.push(info);
        } else if (info.age >= 41 && info.age <= 50 && info.temperature < 100) {
            C.push(info);
        } else {
            D.push(info);

        }
    }
    const sortByEvenAges = (a, b) => a.age % 2 === 0 ? (a.age - b.age) : -1;
    A.sort(sortByEvenAges);
    B.sort(sortByEvenAges);
    C.sort(sortByEvenAges);
    D.sort(sortByEvenAges);

    return { A, B, C, D };
}


console.log(vaxTrail([
    { name: "jayed", age: 25, temperature: 99 },
    { name: "abdullah", age: 35, temperature: 97 },
    { name: "abdurrahman", age: 45, temperature: 107 },
    { name: "abdulkhalek", age: 32, temperature: 90 },
    { name: "jayed", age: 23, temperature: 99 },
    { name: "abdullah", age: 47, temperature: 97 },
    { name: "abdurrahman", age: 45, temperature: 95 },
    { name: "abubakar", age: 15, temperature: 105 },
    { name: "abdurrahman", age: 31, temperature: 95 },
    { name: "abubakar", age: 27, temperature: 109 },
    { name: "abubakar", age: 22, temperature: 99 },
    { name: "abdurrahman", age: 46, temperature: 95 },
    { name: "abubakar", age: 18, temperature: 105 },
    { name: "abdurrahman", age: 33, temperature: 95 },
    { name: "abubakar", age: 47, temperature: 100 },
    { name: "abubakar", age: 25, temperature: 99 }
]));
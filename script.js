Jlet a = 5;
console.log(a);     // 5
console.log(a++);   // 6

a += 1;
a = a + 1;
a++; // инкремент
a--; // декремент


//       0  1  2  3  4   5   длина массива 6
let b = [1, 2, 3, 4, 8, 19];

let index = 4
console.log(b[index]); // 1
console.log(b[5]); // 19


for (let index = 0; index < b.length; index++) {
    console.log(b[index]);
}

// for-in 
for (let element in b) {
    console.log(element);
}

// object
let videoItem = {
    title: "Title1",
    description: "Description1",
    url: "url",

    // новый обьек user
    user: {
        name: "Username",
        subscribers: 1000,
    },
}

console.log(videoItem);
console.log(videoItem.title);
console.log(videoItem["title"]);

// user
console.log(videoItem.user); // { name: "Username", subscribers: 1000 }
console.log(videoItem.user.name); // Username


let sostav = [
    // vagon 1 - object
    {
        number: 0,
        weight: 100,
        tovar: {
            name: "kartoshka",
            weight: 500,
        }
    },

    // vagon 2 - object
    {
        number: 1,
        weight: 200,
        tovar: {
            name: "ogurtsi",
            weight: 200,
        }

    },

    // vagon 3 - object
    {
        number: 2,
        weight: 100,
        tovar: {
            name: "yabloki",
            weight: 100,
        }
    },
];

let weighVagon1 = sostav[0].weight; // 100
let tovarVagon1 = sostav[0].tovar.name; // kartoshka

// for-each
sostav.forEach(function(vagon) {
    console.log(vagon.tovar.name);
})
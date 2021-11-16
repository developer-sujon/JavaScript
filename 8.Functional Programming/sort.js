console.clear();

const array = [
    {
        name: "Mohammad",
        id: 19
    },
    {
        name: "Sujon",
        id: 43
    }
    ,
    {
        name: "Ara",
        id: 15
    },
    {
        name: "Sohid",
        id: 12
    }
]
/**
 * Sort Function by Callback Function 
 */

array.sort((a, b) => {
    if (a.id > b.id) {
        return 1;
    }if (a.id< b.id) {
        return -1;
    } else {
        return 0
    }
})

console.log(array);

const arr = ["1.Banana", "5.Orange", "8.Apple", "2.Mango"]

arr.sort();

console.log(arr);
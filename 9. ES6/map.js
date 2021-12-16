/**
 * Map in Javascript.
 */
console.clear();

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.set('d', 40)
map.set({ name: 'Mohammad Sujon' }, 45)

map.delete('c')

console.log(map.size)
console.log(map)
console.log(map.get('b'))
console.log(map.values())
console.log(map.keys())
console.log(map.entries())

for (let [k, v] of map) {
    console.log(v, k)
}

map.forEach((v, k) => {
    console.log(k, v)
})
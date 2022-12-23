import { fruits } from './fruits';

console.log('---Case 1---');

console.log('1. Buah apa saja yang dimiliki Andi? (fruitName)');
console.log(fruits.map((v) => v.fruitName));

console.log(
    `2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?`,
);
let fruitTypeCount: { [key: string]: string[] } = {};
fruits.forEach((element, index) => {
    if (!fruitTypeCount[element.fruitType]) {
        fruitTypeCount[element.fruitType] = [];
    }
    fruitTypeCount[element.fruitType].push(element.fruitName);
});
console.log(`Jumlah wadah: ${Object.keys(fruitTypeCount).length}`);
console.log(fruitTypeCount);

console.log(`3. Berapa total stock buah yang ada di masing-masing wadah?`);
Object.entries(fruitTypeCount).forEach(([v, x]) =>
    console.log(`Wadah ${v} memiliki ${x.length} buah`),
);

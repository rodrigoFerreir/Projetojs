const arr1 = [1,2,3]
const arr2 = [1,2,3]

const compare = (arr1, arr2) =>{
    return arr1.legth === arr2.legth &&
    arr1.every((item, index) => item === arr2[index])
}
//comparando dois arrays 
console.log(compare(arr1, arr2))



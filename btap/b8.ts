type arr1 = {
    name:string,
}
type arr2 = {
    id:number,
}
type arr = arr1&arr2;
let arr: C={
    name:"a",
    id:5,
}
console.log(arr);

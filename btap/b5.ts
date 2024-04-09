//
let age: number | string;
age = 25; // Hợp lệ
age = "twenty-five"; // Hợp lệ
// Biến age có thể là number hoặc string

type a = {
    name:string,
}
type b = {
    id:number,
}
type C = a&b;
let c: C={
    name:"a",
    id:5,
}
console.log(c);
//kết hợp 2 kiểu dữ liệu của 2 obj khác nhahu thành một obj mới chứ 2 kiểu dữ liệu đó
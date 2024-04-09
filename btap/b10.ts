interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
}

type PersonOrEmployee = Person & Employee;

const employee: PersonOrEmployee = {
    name: 'a',
    age: 30,
    employeeId: 1
};

console.log(employee);

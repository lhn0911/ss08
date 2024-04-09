interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(person: any): boolean {
    if (
        typeof person === 'object' &&
        person !== null &&
        'name' in person &&
        typeof person.name === 'string' &&
        'age' in person &&
        typeof person.age === 'number' &&
        'address' in person &&
        typeof person.address === 'object'
    ) {
        return true;
    } else {
        return false;
    }
}
const person1: Person = {
    name: 'John',
    age: 30,
    address: { street: '123 Main St', city: 'City' }
};

const person2: Person = {
    name: 'Jane',
    age: '25',
    address: { street: '456 Elm St', city: 'Town' }
};

console.log(validatePerson(person1));
console.log(validatePerson(person2));

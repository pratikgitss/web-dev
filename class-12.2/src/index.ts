interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}

const result = sumOfAge({
    name: "pratik",
    age : 33
},{
    name: "wasu",
    age: 34
});

console.log(result);
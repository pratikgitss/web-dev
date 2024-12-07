// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     password: number;
// }

// function sumOfAge(user1: User, user2: User): number {
//     return user1.age + user2.age;
// }

// const result = sumOfAge({
//     name: "pratik",
//     age : 33
// },{
//     name: "wasu",
//     age: 34
// });

// console.log(result);


// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     password: number;
// }

// type UpdateProps = Pick<User, 'name' | 'email' | 'password'>;
// type UpdatePropsOptional = Partial<UpdateProps>;
 
// function updateUser(updatedProps: UpdateProps) {
//     // body
// }


// type User = {
//     readonly name: string;
//     readonly age: number;
// }

// type User = {
//     name: string;
//     age: number;
// }

// const user: Readonly<User> = {
//     name: "pratik",
//     age: 33
// } 
// user.age = 34 //gives error here as it is readonly



// Record
interface User {
    name: string;
    age: number;
}

// type Users = {[key: string] : User};

type Users = Record<string, User>;

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) {
    console.log(`Handling Event: ${event}`);
}

handleEvent('click');
// handleEvent('scroll'); //gives error



import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email
    } 
  })
  console.log(response); 
}

async function getTodos(userId: number, ) {
  const response = await prisma.todo.findMany({
    where: {
      userId: userId
    }
  })
  console.log(response);
}

async function getTodosAndUserDetails(userId: number, ) {
  const response = await prisma.todo.findMany({
    where: {
      userId: userId
    },
    select: {
      id: true,
      title: true,
      description: true,
      user: true
    }
  })
  console.log(response);

}

async function createTodo(userId: number, title: string, description: string) {
  const response = await prisma.todo.create({
    data:{
      userId,
      title,
      description
    }
  })
  console.log(response)
}

// insertUser("pratik2", "mypass2", "Praitk2", "Wasekar2", "p2@gmail.com");
//createTodo(1, "Learning Prisma2", "till completion 2")
getTodos(1)

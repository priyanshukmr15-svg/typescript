type admin = {
  role:"admin",
  name:string,
  age:number
}

type student = {
  role:"student",
  name:string,
  age:number
}

type faculty = {
    role:"teacher",
    name:string,
     age:number
}

type diffroles = admin | student | faculty

function printfunc(obj: diffroles): number | undefined{
    if(obj.role === "admin") return 12

     if(obj.role === "teacher") return 10
}

const S1: student = {
    role:"student",
    name:"Priyanshu",
    age:19
}

const t1:faculty = {
    role:"teacher",
    name:"P",
    age:18
}

console.log(printfunc(t1))
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printfunc(obj) {
    if (obj.role === "admin")
        return 12;
    if (obj.role === "teacher")
        return 10;
}
const S1 = {
    role: "student",
    name: "Priyanshu",
    age: 19
};
const t1 = {
    role: "teacher",
    name: "P",
    age: 18
};
console.log(printfunc(t1));
//# sourceMappingURL=index.js.map
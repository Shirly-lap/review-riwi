"use strict";
// interface Isuer{
//     firstName : string;
//     lastName: string;
//     age: number;
//     skills: string[];
//     gretting(): void
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user2 = {
    userId: 1,
    id: 23,
    title: "Hola gente",
    body: "Estoy aprendiendo typeScript y estoy en el tema de interfaces"
};
const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const data = yield response.json();
    console.log(data);
});
getPost();

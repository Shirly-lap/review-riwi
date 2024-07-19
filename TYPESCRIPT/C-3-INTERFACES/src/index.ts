// interface Isuer{
//     firstName : string;
//     lastName: string;
//     age: number;
//     skills: string[];
//     gretting(): void
// }

// const user1: Isuer ={
//     firstName : "Shirly",
//     lastName : "Mejia",
//     age : 21,
//     gretting(){
//         console.log("Hola mami");
        
//     }
// }

interface Ipost {
    userId: number;
    id: number;
    title: string;
    body : string;
}

const user2 :Ipost ={
    userId : 1,
    id : 23,
    title : "Hola gente",
    body : "Estoy aprendiendo typeScript y estoy en el tema de interfaces"
    
}


const getPost = async () =>{
    const response : Response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Ipost [] = await response.json();
    console.log(data);
    

}

getPost();
export interface User{
    username: string;
    age : number;
    email : string;
}
export function getUser(username : string,age:number,email:string):User{
    return{
        username,
        age,
        email
    };
}

import {User,getUser} from './user.js'

const userDetail :User = getUser("John",30,"John34@gmail.com");

console.log(`Username : ${userDetail.username} Age : ${userDetail.age} Email : ${userDetail.email}`);
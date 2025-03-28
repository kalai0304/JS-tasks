import { getUser } from './user.js';
const userDetail = getUser("John", 30, "John34@gmail.com");
console.log(`Username : ${userDetail.username} Age : ${userDetail.age} Email : ${userDetail.email}`);

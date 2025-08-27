
console.log(__dirname);
console.log(__filename);
globalThis.myVariable = 'Hello World';
console.log(globalThis.myVariable);
const hello = require('./hello.js');

hello.sayHello('John');
hello.sayHello('Peter');
hello.sayGoodbye('Eunice');
hello.sayGoodbye('Jane');

const os = require('os');
const systemUptime = os.uptime();
const userInfo = os.userInfo();
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);
const path= require('path');
const myPath = '/mnt/c/Desktop/NodeJSTut/app.js'
const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),

}
console.log(pathInfo);
const fs = require('fs');
fs.mkdir('./myFolder', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Folder created successfully');
    }
}); 
const data = "Hi this is a new file";
fs.writeFile('./myFolder/myFile.txt', data, (err) => {
    if (err){
        console.error(err);
        return;
    } else {
        console.log('File created successfully');
    }
    })
    
    fs.readFile('./myFolder/myFile.txt',{encoding:'utf-8'},(err, data) => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log('File read successfully');
            console.log(data);
        }
    })
    try{
        fs.writeFileSync('./myFolder/myFile.txt','Hello User');
    console.log('Write operation succesful');
    const fileData = fs.readFileSync('./myFolder/myFile.txt','utf-8');
    console.log('File read succesfully');
    console.log(fileData);
    } catch (err) {
        console.log('Error occured!')
        console.error(err);
    }
    fs.readdir('./myFolder', (err, files) => {
        if (err) {
            console.log (err);
            return;
        }
        console.log('Directory Read Succesfully!')
        console.log(files);
    })
 fs.rename('./myFolder/newFile.txt', './myFolder/newFileAsync.txt', (err) => 
    {
    if (err){
        console.log(err);
        return;
    }
    console.log('File has been renamed!')
 })
 
const EventEmitter =require('events');
const myEmitter = new EventEmitter();
const sayHello = () => {
    console.log('Hello User');
}
const sayHi = () => {
    console.log('Hi User');

}
const HappyBirthday = () => {
    console.log('Happy Birthday User');
}
myEmitter.on('userjoined', sayHello);
myEmitter.on('userjoined', sayHi);
myEmitter.on('userjoined', HappyBirthday);
myEmitter.emit('userjoined');
const greetBirthday = (name, age) => {
console.log(`Happy Birthday ${name}, you are now ${age} years old!`);
}
myEmitter.on('birthdayEvent', greetBirthday);
myEmitter.emit('birthdayEvent', 'John', 30);

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res,write('<h1>Welcome to the Home Page</h1>');
        res.end();
    } else if (req.url ==='/about') {
        res.writwHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the About Page</h1>');
        res.end();
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Contact Page</h1>');
        res.end();
    }
    else {
        res.writeHead(200, {'content-type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
})
server.listen(5002, () => {
    console.log('Server is running on port 5002');
})
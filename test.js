// const xyz = require('./people'); //this runs code on people.js file
// //import xyz from './people';

// //console.log(__dirname);
// //console.log(__filename);
// console.log(`xyz is ${xyz}`);
// const os = require('os');
// //console.log(os);
 const fs = require('fs');
// fs.readFile('./docs/blog.txt', (error, data) => {
//     if(error){
//         console.log(error);
//     }
//     //console.log(data.toString());
// });

// //streams
// const readStream = fs.createReadStream('./docs/blog.txt');
// // readStream.on('data', (chunk) => {
// //     fs.writeFile('./docs/readBlog.txt', `
// //         NEW CHUNK WRITTEN: ${chunk}`, () => {
// //             console.log('new chunk added');
// //         });
// // });

//  const writeStream = fs.createWriteStream('./docs/readBlog.txt');
// // readStream.on('data', (chunk) => {
// //     writeStream.write(`
// //     NEW CHUNK WRITTEN: ${chunk}`)
// //     console.log('new chunk added');
// // });

// //option: use of pipe to transfer data from readable stream to writeable stream

// readStream.pipe(writeStream);

const http = require('http');
const server = http.createServer((req, res) => {
    //console.log(req.url ,req.method);
    //set header
    res.setHeader('Content-Type','text/html');
//send html file
fs.readFile('./views/index.html', (err, data) =>{
    if(err){
              console.log(err);
              res.statusCode = 400;
              res.end();
      }
      else{
        //res.write(data);
        res.statusCode = 200;
        res.end(data);
        
      }

});
    

}); ///creates a server
server.listen('3000','localhost', () => {
    console.log('Listening on port 3000');
});
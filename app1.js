const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    console.log(req.url);
    requrl = spliturl(req.url)
    indexnumber = findindex(fs.readFileSync("./database/notes","utf-8"))
    content = contentprocess(requrl,fs.readFileSync("./database/notes","utf-8"))
    fs.writeFileSync("./database/notes",`${content} `,"utf-8")
})

server.listen(5000,()=>{
    console.log("server has started");
})

const spliturl = (url)=>{
    var requrl = url.split("/")
    return requrl
}

const contentprocess = (newcontent,oldcontent) => {
    oldcontent += `
${indexnumber})${newcontent[1]} : ${newcontent[2]}`
    return oldcontent
}

const findindex = (files) =>{
    let lines = files.split("\n")
    return lines.length
}
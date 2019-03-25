const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const client = net.Socket();

client.on("data",data=>{
    console.log(`Largest number is ${data}`);
    process.exit();
    // client.end();
})

client.connect(4002,'localhost', ()=>{
    rl.question('enter some number',(input)=>{
        client.write(input)
        client.end();
    }); 
}
)
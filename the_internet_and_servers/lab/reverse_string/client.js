const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const client = net.Socket();

client.on("data",data=>{
    console.log(`${data}`);
    process.exit();
    // client.end();
})

client.connect(4001,'localhost', ()=>{
    rl.question('enter something to reverse',(input)=>{
        client.write(input)
        client.end();
    }); 
}
)
const fs = require('fs');

const sourceFile = process.argv[2];
const targetFile = process.argv[3];


fs.readFile(sourceFile,(err,data) => {
    let fileContents = data.toString().split('\n')
    let desiredOutput = []
    for(let content of fileContents){
        const lastValue = content.split(',').pop()
        if(lastValue !== 'yes'){
            desiredOutput.push(content)
        }
    }
    fs.writeFile(targetFile,desiredOutput.join('\n'),function(err){
        if(err){
            return console.log(err)
        }
    })
});

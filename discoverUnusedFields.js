let yargs = require('yargs');
const colors = require('colors');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const fs = require('fs');

const apexScriptTemplate = 'discoverUnusedFields.apex';
const dir = './tmp';
const apexScript = 'tmp/obj.apex';

let sObjects =['Account','Contact','Opportunity'];
const argv = yargs.argv;

executeApex = async (org, obj) => {

        prepareApexScript(obj);
        const result = await exec(`sfdx force:apex:execute -u ${org} -f ${apexScript.replace('obj', obj)}`);
        prettify(result.stdout, obj);
        console.log(``);
        return result
      };
//colors.bold.bgRed.
prettify = (input, obj)=>{
    let lines = input.split(/\r\n|\n\r|\n|\r/);
    let filteredFieldLines = lines.filter(line=>line.includes("|DEBUG|unused field:"));
    let filteredCounterLines = lines.filter(line=>line.includes("|DEBUG|all fields counter:"));
    console.log(``);
    console.log(colors.bold.bgBlue(` ${obj} `));
    console.log(``);
    let c=0;

    filteredFieldLines.forEach(line=>{
        let lineSplit = line.split('|DEBUG|unused field:');
        if(lineSplit[1]){
            c++;
            console.log(colors.green('                           '+lineSplit[1]));
        }
    });

    if(c==0){
        console.log(colors.bold.red('                           all fields are used'));
    }
    else{
        console.log('');
        console.log(colors.bold.yellow(`                           unused fields in total: ${c}`));
        console.log(colors.bold.yellow(`                           fields in total: ${filteredCounterLines[0].split('|DEBUG|all fields counter:')[1]}`));
    }
}

prepareApexScript =  (obj) =>{

    let data;
    try {
      data = fs.readFileSync(apexScriptTemplate, 'utf8')
    } catch (err) {
      console.error(err)
    }
    data= data.replace('objApiNamePlaceHolder', obj);
    fs.writeFileSync(apexScript.replace('obj', obj), data);
}

//wrapper = async (org, obj) => {await executeApex(org, obj);}

sObjects = argv.sobjects ? sObjects = argv.sobjects.split(',') : sObjects;

//create tmp order
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


if(argv.org){
    console.log(``);
    console.log(colors.yellow(`Discovering unused fields... It might take some time.`));
    console.log(``);
    for(obj of sObjects){
        executeApex(argv.org, obj.trim());
    }
}
else{
    console.log('please provide destination org and sobjects params like: node discoverUnusedFields --org=crmUAT --sobjects="Account, Opportunity, Contact,AMS_Combi_Platform__c"');
}



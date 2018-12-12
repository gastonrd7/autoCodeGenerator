const fs = require('fs');
const { parameters } = require('./config.jsx');
const { templateField, templateOnCreationFill, templateConstructur } = require('./templates/index.jsx');
const { campaign, advertisement, company, post, insight } = require('./handlers/index.jsx');

var sumador = 0;
var arrayImport = [];
var arrayNews = [];

var imprimir = () => {
  sumador++;
  return console.log(`${sumador} hadlers creados`);
}

var createImport = (model, field) => {

  arrayImport.push(`import ${model}${field} from './handlers/${model}/${field}';`);
  arrayNews.push(`${model}${field}`);

  fs.writeFile(`./outputFiles/index.ts`,
        templateConstructur(arrayImport, arrayNews), 
        function (err) {
        if (err) throw err;
      });
}

if (parameters.processAll) {
  execute(true, 'advertisement', advertisement);
  execute(true, 'campaign', campaign);
  execute(true, 'company', company);
  execute(true, 'post', post);
  execute(true, 'insight', insight);
} else {
  if (parameters.advertisement.length > 0) execute(false, 'advertisement', advertisement, parameters.advertisement);
  if (parameters.campaign.length > 0) execute(false,'campaign', campaign, parameters.campaign);
  if (parameters.company.length > 0) execute(false, 'company', company, parameters.company);
  if (parameters.post.length > 0) execute(false,'post', post, parameters.post);
  if (parameters.insight.length > 0) execute(false, 'insight', insight, parameters.insight);
}

function execute(all, type, originalArray, filterArray = []) {
  if (!fs.existsSync(`./outputFiles/${type}`)){
    fs.mkdirSync(`./outputFiles/${type}`);
  }
  
  if (all) {
    originalArray.forEach(element => {
      if(element.type && element.type == 'onCreation') {
        fs.writeFile(`./outputFiles/${type}/_${element.type}_${element.field}.ts`,
        templateOnCreationFill(element.model, element.field, element.subscription), 
        function (err) {
        if (err) throw err;
        console.log(`New file ${element.type}_${element.field}.ts is either created or if exists then updated.`);
        imprimir();
        createImport(type, `_${element.type}_${element.field}`);
      });
      } else {
        fs.writeFile(`./outputFiles/${type}/${element.field}.ts`, 
        templateField(element.model, element.field, element.subscription, (element.templateCount ? element.templateCount : 'ninguno')), 
        function (err) {
        if (err) throw err;
        console.log(`New file ${element.field}.ts is either created or if exists then updated.`);
        imprimir();
        createImport(type, element.field);
      });
      }
    });
  } else {
    var advertisementMatch = findAndFillArray(originalArray, filterArray);
    advertisementMatch.forEach(element => {
      if(element.type && element.type == 'onCreation') {
        fs.writeFile(`./outputFiles/${type}/_${element.type}_${element.field}.ts`,
        templateOnCreationFill(element.model, element.field, element.subscription), 
        function (err) {
        if (err) throw err;
        console.log(`New file ${element.type}_${element.field}.ts is either created or if exists then updated.`);
        imprimir();
        createImport(type, `_${element.type}_${element.field}`);
      });
      } else {
        fs.writeFile(`./outputFiles/${type}/${element.field}.ts`, 
        templateField(element.model, element.field, element.subscription, (element.templateCount ? element.templateCount : 'ninguno')), 
        function (err) {
        if (err) throw err;
        console.log(`New file ${element.field}.ts is either created or if exists then updated.`);
        imprimir();
        createImport(type, element.field);
      });
      }
    });
  }

}

function findAndFillArray(originalArray, fieldsToExecute){
  let newArray = originalArray.reduce((result, entity) => {
    let item = fieldsToExecute.filter(item => item == entity.field);
    if (item.length == 1) {
      result.push(entity);
    }
    return result
  }, []);

  return newArray;
}
const fs = require('fs');
const inlineCss = require('inline-css');
const templatePath = 'src/templates/';
const inlineTemplatePath = 'src/inlineTemplates/';

function inlineTemplate(templateName) {
    const inputTemplate = templatePath + templateName +'.html';
    const outputInlineTemplate = inlineTemplatePath + templateName +'.html';
    const savedCallBack = function(error){
        if(error){
            console.log('Error while saving',outputInlineTemplate,error);
        }else{
            console.log('Saved:', outputInlineTemplate);
        }
    };
    const saveInlineTemplate = function (inlineHtml) {
        fs.writeFile(outputInlineTemplate, inlineHtml, savedCallBack);
    };
    const readTemplateCallback = function (error, html) {
        inlineCss(html, { url:  'file://'+__dirname + '/' + templatePath }).then(saveInlineTemplate);
    };
    fs.readFile(inputTemplate, 'utf8', readTemplateCallback);
}

inlineTemplate('subscription-activated');
inlineTemplate('subscription-activated_signalprofits');
inlineTemplate('subscription-canceled');






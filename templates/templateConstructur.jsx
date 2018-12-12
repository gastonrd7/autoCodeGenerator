function templateConstructur(arrayImport, arrayNews) {
    
    var imports = ``;
    var news = ``;

    arrayImport.forEach(element => {
            imports += `${element}
            `
        })
    
    arrayNews.forEach(element => {
            news += `${element},
            `
        })
    
    
    return `
    ${  
        imports
    }


    const handlerTypes = {
        ${
            news
        }
    }

    export default handlerTypes;
    `;
}

module.exports = { 
    templateConstructur
};
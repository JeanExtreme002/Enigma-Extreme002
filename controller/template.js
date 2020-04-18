const fs = require("fs");

class Template {

    /*
    Classe para retornar arquivos com uma template.
    */

    constructor (filename) {
        
        // Obtém conteúdo da template.
        this.template = fs.readFileSync(filename).toString(); 
    }

    inject (filename, at) {

        // Retorna o conteúdo de um arquivo com a template injetada.
        const content = fs.readFileSync(filename).toString();
        return content.replace(at, this.template);
    }
}

module.exports = Template;

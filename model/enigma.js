answers = {
    1: "orfeu", 
    2: "ambar",                        // Nome da cor
    3: "greenwich",
    4: "churrasco",                    // Resposta de anagrama
    5: "sol",        
    6: "alnitak",                      // Cálculo das posições das letras no alfabeto. Exemplo: C(3) * B(2) = F(6)
    7: "charlie",                      // Nome da imagem
    8: "tetrafobia",                   // Medo do número 4 existente no Japão, China e outros lugares da Ásia.
    9: "torta",                        // 14/03 -> 03/14 = 3.14 = pi = pie (pronúncia inglês) = torta
    10: "papoula",
    11: "albategnius",                 // Nome da cratera do lado oculto da lua que não está na imagem      
    12: "escolha",                     // Última palavra do verso do mapa de Gleason
    13: "ubenpvb",                     // Horacio (chave 13)
    14: "leao",                        // Constelação da imagem
    15: "atlas",                       // Palavra escrito em Braille
    16: "595",                         // ODA 595
    17: "louis",                       // "Lis" no nome "Flor-de-lis" é a contração de "Louis"
    18: "inconstitucionalissimamente", // Obtido com o valor RGB das cores convertido em octal e depois ASCII
    19: "esfenoide",                   // Obtido com o espectrograma da música. O esfenoide para uma borboleta
    20: "horus"                        // Olho de Hórus no "favicon.ico"
}

enigma = {

    isCorrect: function (fase, answer) {

        fase = parseInt(fase);
        return answers[fase] == answer;
    },

    getNewEnigma: function (fase, answer) {

        fase = parseInt(fase);
        
        if (!fase || this.isCorrect(fase, answer)) {
            if (fase == 20) {
                return "final";
            }
            return "enigma_" + (fase + 1);  
        }
    }
}

module.exports = enigma;
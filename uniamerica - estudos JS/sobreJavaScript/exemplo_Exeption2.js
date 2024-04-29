function processName(nome, callback){
    if(typeof nome !== 'string'){
        callback (new Error('O nome deve ser uma string'))
        return;
    }

    if(nome.length === 0 ){
        callback(new Error('O nome não pode estar vazio'))
        return;
    }

    callback(null,"Nome procesado com sucesso")

}

processName("Marcelo",(error,result) => {
    if(error){
        console.log("Ocorreu um problema:", error.massage)
    }else{
        console.log(result)
    }
});

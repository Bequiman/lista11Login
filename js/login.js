function validar(){
    nome = document.getElementById("nome").value;
    senha = document.getElementById("senha").value;
    if (nome == ""){ //!user.value
        alertWifi("Usuário em branco", false, 0, "img/toupeira.gif", 30);
        document.getElementById("nome").focus();
        //nome.focus();
    } else if (senha == ""){
        alertWifi("Senha em branco", false, 0, "img/toupeira.gif", 30);
        //document.getElementById("senha").focus();
        senha.focus();
    } else {
        //alertWifi("Login válido", false, 0, "../img/toupeira.gif", 30);
        readJSON(nome, senha); // nome.value
    }
}

function readJSON(nome, senha) { 
    //file = "json/users.json";  //../json/users.json 
    file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json';
    
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, nome, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, nome, senha){
    var achou = false;    
    for(i=0; i<content.usuarios.length; i++){
        if ((content.usuarios[i].user == nome) && (content.usuarios[i].pwd == senha)) {
            achou = true;
            break;            
        }
    } 
    if(achou){
        alertWifi("Usuário válido", false, 0, "img/toupeira.gif", 30);
    } else {
        alertWifi("Usuário inválido", false, 0, "img/toupeira.gif", 30);
    }    
    
}
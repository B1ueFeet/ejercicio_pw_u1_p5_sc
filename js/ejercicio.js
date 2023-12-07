const getRandomInt = () => {
        let numero = Math.floor(Math.random() * 100);
        console.log(numero)
        return numero;
};

const getResult = () => {
    let numero = 0;
    for (var i = 1; i <= 9; i++) {
        let valor = document.getElementById('btn_0'+i)
        console.log(valor.innerText)
        if (valor.innerText ===  null || valor.innerText === 'X' || valor.innerText === ""){
            valor =0;
        }else{
            valor = parseInt(valor.innerText);
        }
        numero += valor;
      }
    console.log(numero)
    return numero;
};


let randomNum = 0;
const showNumber = (id) =>{
    document.getElementById('btn_0'+id).innerText = getRandomInt()
    sumar();    
};
const showX = (id)=> {document.getElementById('btn_0'+id).innerText = "X"};
const sumar = () => {document.getElementById('lbl_result').innerText = getResult()};
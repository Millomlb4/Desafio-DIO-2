let saldo_de_rankeada = resultado(50, 10)




function resultado(vitorias, derrotas){
    let resultado_final = vitorias - derrotas
    return resultado_final

}

let nome_do_heroi = "tyronne"
let nivel_de_ferro = "Ferro"
let nivel_de_bronze  = "Bronze"
let nivel_de_prata = "Prata"
let nivel_de_ouro = "Ouro"
let nivel_de_diamante = "Diamante"
let nivel_de_lendario = "Lendário"
let nivel_de_imortal = "Imortal"

if(saldo_de_rankeada <= 10 ){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_ferro}`)
}
else if(saldo_de_rankeada <= 20){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_bronze}`)
}
else if(saldo_de_rankeada <= 50){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_prata}`)
}
else if(saldo_de_rankeada <= 80){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_ouro}`)
}
else if(saldo_de_rankeada <= 90){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_diamante}`)
}
else if(saldo_de_rankeada <= 100){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_lendario}`)
}
else if(saldo_de_rankeada >= 101){

    console.log(`O héroi ${nome_do_heroi}, com saldo de ${saldo_de_rankeada} vitórias, está no nível de ${nivel_de_imortal}`)
}
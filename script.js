function exe1(){
let a, b, c, d, aux
a = Number(prompt(`Informe A`))
b = Number(prompt(`Informe B`))
c = Number(prompt(`Informe C`))
d = Number(prompt(`Informe D`))
    
let contador = 1
while (contador <= 4){
    if (a > b) {aux = a, a = b, b = aux}
    if (b > c) {aux = b, b = c, c = aux}
    if (c > d) {aux = c, c = d, d = aux}
      contador++
    }
    
    alert(`Ordem crescente: a ${a} b ${b} c ${c} d ${d}`)
    alert(`Ordem decrescente: d ${d} c ${c} b ${b} a ${a}`)

}

function exe2() {
    let preco = 5.0;
    let qtde = 120;
    const desconto = 200;
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>";
  
    while (preco >= 1) {
      let lucro = (preco * qtde) - desconto;
      saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`;
      preco = preco - 0.50;
      qtde = qtde + 26;
    }
  
    saida += "</table>";
    document.getElementById("saida").innerHTML = saida;
  }  
  

function exe3(){
    let idade;
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let conta = 1 
    while (conta <=8) {
        idade = Number(prompt(`Informe a idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)){
            f1++ 
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++ 
    }

    alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
    alert(`% Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
}

function exe4(){
    let numero = Number(prompt(`Informe um número para que seja realizado a tabuada deste número`))
    let conta = 0
    let resultado
    let saida = ""
    while(conta <= 10){
        resultado = numero * conta
        // acumulador
        saida = saida + `\n ${numero} X ${conta} = ${resultado}`
        conta++
    }
    alert(saida)
}

function exe5(){
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}

function exe6(){
    let codigo
    let valor
    let conta = 1
    while (conta <= 5){
        codigo = prompt(`Informe P ou V`).toUpperCase()
        valor = Number(prompt(`Informe valor`))
        if (codigo == 'p'){
            totalPrazo += valor
        }
        else if (codigo == 'V'){
            totalVista += valor
        }
        else {
            alert('Código inválido, valor não será considerado')
            //conta--
            continue
        }
        conta++
    }   
    let total = totalVista + totalPrazo
    let valorParcela = totalPrazo / 3
    document.getElementById("result6").innerHTML = `Total a vista ${totalVista} Total a prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`
}

function exe7() {
    let pessoasMais50Anos = 0;
    let somaAlturas = 0;
    let pessoasEntre10e20Anos = 0;
    let pessoasPesoInferior40kg = 0;

    for (let i = 1; i <= 5; i++) {
      console.log(`Dados da pessoa ${i}`);

      const idade = Number(prompt("Idade:"));
      const altura = Number(prompt("Altura (em metros):"));
      const peso = Number(prompt("Peso (em kg):"));

      if (idade > 50) {
        pessoasMais50Anos++;
      }

      if (idade >= 10 && idade <= 20) {
        somaAlturas += altura;
        pessoasEntre10e20Anos++;
      }

      if (peso < 40) {
        pessoasPesoInferior40kg++;
      }
    }

    const mediaAlturas = somaAlturas / pessoasEntre10e20Anos;
    const porcentagemPesoInferior40kg = (pessoasPesoInferior40kg / 5) * 100;

    const resposta = "Quantidade de pessoas com idade superior a 50 anos: " + pessoasMais50Anos + "\n" +
                     "Média das alturas das pessoas entre 10 e 20 anos: " + mediaAlturas.toFixed(2) + " metros\n" +
                     "Porcentagem de pessoas com peso inferior a 40kg: " + porcentagemPesoInferior40kg.toFixed(2) + "%";

    alert(resposta);
  }

  function exe8(){
    let pessoasMais50AnosPesoInferior60kg = 0;
    let somaIdadesAlturaInferior150cm = 0;
    let pessoasAlturaInferior150cm = 0;
    let pessoasOlhosAzuis = 0;
    let pessoasRuivasSemOlhosAzuis = 0;
  
    for (let i = 1; i <= 6; i++) {
      console.log(`Dados da pessoa ${i}`);
  
      const idade = Number(prompt("Idade:"));
      const peso = Number(prompt("Peso (em kg):"));
      const altura = Number(prompt("Altura (em metros):"));
      const corOlhos = prompt("Cor dos olhos (a = azul; p = preto; v = verde; c = castanho):");
      const corCabelos = prompt("Cor dos cabelos (p = preto; c = castanho; L = louro; r = ruivo):");
  
      if (idade > 50 && peso < 60) {
        pessoasMais50AnosPesoInferior60kg++;
      }
  
      if (altura < 1.50) {
        somaIdadesAlturaInferior150cm += idade;
        pessoasAlturaInferior150cm++;
      }
  
      if (corOlhos === 'a') {
        pessoasOlhosAzuis++;
      }
  
      if (corCabelos === 'r' && corOlhos !== 'a') {
        pessoasRuivasSemOlhosAzuis++;
      }
    }
  
    const mediaIdadesAlturaInferior150cm = somaIdadesAlturaInferior150cm / pessoasAlturaInferior150cm;
    const porcentagemOlhosAzuis = (pessoasOlhosAzuis / 6) * 100;
  
    const resposta =
      "Quantidade de pessoas com idade superior a 50 anos e peso inferior a 60kg: " +
      pessoasMais50AnosPesoInferior60kg +
      "\n" +
      "Média das idades das pessoas com altura inferior a 1,50m: " +
      mediaIdadesAlturaInferior150cm.toFixed(2) +
      " anos" +
      "\n" +
      "Porcentagem de pessoas com olhos azuis: " +
      porcentagemOlhosAzuis.toFixed(2) +
      "%" +
      "\n" +
      "Quantidade de pessoas ruivas e sem olhos azuis: " +
      pessoasRuivasSemOlhosAzuis;
  
    alert(resposta);
  }
  
  analisarDados();

  function exe9(){
        let somaIdades = 0;
        let pessoasComPesoSuperior90kgAlturaInferior150cm = 0;
        let pessoasIdadeEntre10e30AnosAlturaSuperior190cm = 0;
        let totalPessoas = 10;
      
        for (let i = 1; i <= totalPessoas; i++) {
          console.log(`Dados da pessoa ${i}`);
      
          const idade = Number(prompt("Idade:"));
          const peso = Number(prompt("Peso (em kg):"));
          const altura = Number(prompt("Altura (em metros):"));
      
          somaIdades += idade;
      
          if (peso > 90 && altura < 1.5) {
            pessoasComPesoSuperior90kgAlturaInferior150cm++;
          }
      
          if (idade >= 10 && idade <= 30 && altura > 1.9) {
            pessoasIdadeEntre10e30AnosAlturaSuperior190cm++;
          }
        }
      
        const mediaIdades = somaIdades / totalPessoas;
        const porcentagemIdadeEntre10e30AnosAlturaSuperior190cm = (pessoasIdadeEntre10e30AnosAlturaSuperior190cm / totalPessoas) * 100;
      
        const resposta =
          "Média das idades das 10 pessoas: " +
          mediaIdades.toFixed(2) +
          " anos" +
          "\n" +
          "Quantidade de pessoas com peso superior a 90kg e altura inferior a 1,50m: " +
          pessoasComPesoSuperior90kgAlturaInferior150cm +
          "\n" +
          "Porcentagem de pessoas com idade entre 10 e 30 anos e altura superior a 1,90m: " +
          porcentagemIdadeEntre10e30AnosAlturaSuperior190cm.toFixed(2) +
          "%";
      
        alert(resposta);
      }
      
      calcularEstatisticas();


      function exe10() {
        let somaPares = 0;
        let somaPrimos = 0;
        let totalNumeros = 10;
      
        for (let i = 1; i <= totalNumeros; i++) {
          const numero = Number(prompt(`Digite o número ${i}:`));
      
          if (numero % 2 === 0) {
            somaPares += numero;
          }
      
          if (ehPrimo(numero)) {
            somaPrimos += numero;
          }
        }
      
        const resposta =
          "Soma dos números pares: " +
          somaPares +
          "\n" +
          "Soma dos números primos: " +
          somaPrimos;
      
        alert(resposta);
      }
      
      function ehPrimo(numero) {
        if (numero < 2) {
          return false;
        }
      
        for (let i = 2; i <= Math.sqrt(numero); i++) {
          if (numero % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      
      calcularSomas();
      

      function exe20(){
            let opcao;
          
            do {
              opcao = prompt("Menu de Opções:\n1. Média Aritmética\n2. Média Ponderada\n3. Sair\nDigite a opção desejada:");
          
              switch (opcao) {
                case "1":
                  calcularMediaAritmetica();
                  break;
                case "2":
                  calcularMediaPonderada();
                  break;
                case "3":
                  alert("Programa encerrado.");
                  break;
                default:
                  alert("Opção inválida. Tente novamente.");
              }
            } while (opcao !== "3");
          }
          
          function calcularMediaAritmetica() {
            const nota1 = Number(prompt("Digite a primeira nota:"));
            const nota2 = Number(prompt("Digite a segunda nota:"));
          
            const media = (nota1 + nota2) / 2;
          
            alert("Média Aritmética: " + media.toFixed(2));
          }
          
          function calcularMediaPonderada() {
            const nota1 = Number(prompt("Digite a primeira nota:"));
            const nota2 = Number(prompt("Digite a segunda nota:"));
            const nota3 = Number(prompt("Digite a terceira nota:"));
          
            const peso1 = Number(prompt("Digite o peso da primeira nota:"));
            const peso2 = Number(prompt("Digite o peso da segunda nota:"));
            const peso3 = Number(prompt("Digite o peso da terceira nota:"));
          
            const somaPesos = peso1 + peso2 + peso3;
            const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;
          
            alert("Média Ponderada: " + mediaPonderada.toFixed(2));
          }
          
          exibirMenu();

          function exe21(){
            let votosCandidatos = [0, 0, 0, 0];
            let votosNulos = 0;
            let votosEmBranco = 0;
            let totalVotos = 0;
          
            let voto = prompt("Informe o código do candidato (1, 2, 3, 4) ou digite 5 para voto nulo, 6 para voto em branco. Digite 0 para encerrar:");
          
            while (voto !== "0") {
              switch (voto) {
                case "1":
                case "2":
                case "3":
                case "4":
                  const candidato = parseInt(voto) - 1;
                  votosCandidatos[candidato]++;
                  totalVotos++;
                  break;
                case "5":
                  votosNulos++;
                  totalVotos++;
                  break;
                case "6":
                  votosEmBranco++;
                  totalVotos++;
                  break;
                default:
                  alert("Código de voto inválido. Tente novamente.");
              }
          
              voto = prompt("Informe o código do candidato (1, 2, 3, 4) ou digite 5 para voto nulo, 6 para voto em branco. Digite 0 para encerrar:");
            }
          
            const porcentagemVotosNulos = (votosNulos / totalVotos) * 100;
            const porcentagemVotosEmBranco = (votosEmBranco / totalVotos) * 100;
          
            const resposta =
              "Total de votos para o Candidato 1: " +
              votosCandidatos[0] +
              "\n" +
              "Total de votos para o Candidato 2: " +
              votosCandidatos[1] +
              "\n" +
              "Total de votos para o Candidato 3: " +
              votosCandidatos[2] +
              "\n" +
              "Total de votos para o Candidato 4: " +
              votosCandidatos[3] +
              "\n" +
              "Total de votos nulos: " +
              votosNulos +
              "\n" +
              "Total de votos em branco: " +
              votosEmBranco +
              "\n" +
              "Porcentagem de votos nulos sobre o total de votos: " +
              porcentagemVotosNulos.toFixed(2) +
              "%" +
              "\n" +
              "Porcentagem de votos em branco sobre o total de votos: " +
              porcentagemVotosEmBranco.toFixed(2) +
              "%";
          
            alert(resposta);
          }
          
          calcularEstatisticasVotos();
          
   function exe23() {
    let salario, novo, decimoTerceiro, ferias, meses;
    let opcao;

    do {
        opcao = Number(prompt(`Escolha uma opção: \n 1. Novo salário \n 2. Férias \n 3. Décimo terceiro. \n 4. Sair.`));

        switch (opcao) {
            case 1:
                salario = Number(prompt(`Informe o salário:`));
                if (salario >= 0 && salario < 210) {
                    novo = salario + salario * 15 / 100;
                } else if (salario > 600) {
                    novo = salario + salario * 5 / 100;
                } else {
                    alert(`Salário negativo`);
                }
                alert(`Novo salário: ${novo}`);
                break
                
                case 2: ferias = salario + (salario / 3)
                default: alert(`Opção inválida.`)

                case 3: salario = Number(prompt(`Informe salário`))
        }
    } while (opcao !== 4);
}


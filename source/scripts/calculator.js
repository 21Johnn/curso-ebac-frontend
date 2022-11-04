let inputDay = document.getElementById("dayTime");
let inputMonth = document.getElementById("dayMonth");
let inputSepnd = document.getElementById("spends");
let inputEquipament = document.getElementById("equipament");
let selectPercent = document.getElementById("percent");

let results = document.getElementById("resultado");


let spendsMonth = spends + (inputEquipament.value / 12);
let totalWorked = inputDay.value * inputMonth.value;


function total(event) { 
    event.preventDefault()

    if(inputDay.value == 0 || inputMonth.value == 0 || inputSepnd.value == 0 || inputEquipament.value == 0){

        document.querySelector("#error--alert").classList.remove("hidden--elements");

        setTimeout(function(){

            var a = document.getElementById("error--alert");
            
            a.classList.add("hidden--elements");
            
            
            }, 3000);

            console.log("funcionando")
        } else{    
    var equipamentPerMonth = (Number(inputEquipament.value) / 12);
    let allSpending = equipamentPerMonth + Number(inputSepnd.value);
    let hoursMonth = Number(inputDay.value) * Number(inputMonth.value);
    let percent = selectPercent.value / 100;

    const resultadoFinal = (allSpending / hoursMonth / (1 - percent));
    
    resultado.innerHTML =  `<p class="p-result">Horas trabalhadas no mês: ${hoursMonth} Hrs. </p>
    <p class="p-result"> Ganho mensal: R$ ${Math.round(resultadoFinal * hoursMonth)},00 </p>
    <p class="p-result"> Despesas: R$ ${Math.round(allSpending)},00 | Lucro: R$ ${Math.round((resultadoFinal * hoursMonth) - allSpending)},00 </p>
    <p class="p-result"> Esse é o valor que você deve cobrar por hora de trabalho: R$ ${Math.round(resultadoFinal)},00.</p>
    <p class="p-result">Lembre-se que esse valor, pode variar de acordo com sua região, voce pode cobrar mais do que isso se achar justo, ou cobrar menos
    se achar sua hora de trabalho acima da média. Pesquise qual o valor médio que os profissionais da sua região cobram. 
    Também vale ressaltar, que nesse cálculo, simulamos que seus equipamentos deve se pagar em 12 meses (1 ano).</p>
    <p class="p-result"><stroke>ATENÇÃO, O CALCULO SE BASEIA COMO SE ESSE FOSSE SEU TRABALHO MENSAL, ENTÃO BOTE A QUANTIDADE DE DIAS QUE VOCÊ DESEJA TRABALHAR
    AO TODO NO MÊS, MESMO FORA ESSE PROJETO</stroke></p>`;

    document.querySelector("#hidden").classList.remove("hidden--elements");
}


}

let hiddenElements = document.querySelector("#hidder");

function esconder(){
    document.querySelector("#hidden").classList.add("hidden--elements");
}




const resultado = document.querySelector('.resultado');

function getWeekDayName(diaSemana) {
    let diaSemanaNome;
    switch (diaSemana) {
        case 0:
            diaSemanaNome = 'Domingo';
            return diaSemanaNome;
        case 1:
            diaSemanaNome = 'Segunda-feira';
            return diaSemanaNome;
        case 2:
            diaSemanaNome = 'Terça-feira';
            return diaSemanaNome;
        case 3:
            diaSemanaNome = 'Quarta-feira';
            return diaSemanaNome;
        case 4:
            diaSemanaNome = 'Quinta-feira';
            return diaSemanaNome;
        case 5:
            diaSemanaNome = 'Sexta-feira';
            return diaSemanaNome;
        case 6:
            diaSemanaNome = 'Sábado';
            return diaSemanaNome;
    }
}
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaNome = getWeekDayName(diaSemana);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    return `${dia}`
}
const dataFormatada = formataData(data);


function getMonthName(numMes) {
    let nomeMes
    switch (numMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}
const mes = getMonthName(data.getMonth());

function formataHora(horaF) {
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    return `${hora}:${minuto}`
}
const horaFormatada = formataHora(data);

resultado.innerHTML = `${diaSemanaNome}, ${dataFormatada} de ${mes} de ${data.getFullYear()}<br>${horaFormatada}`;
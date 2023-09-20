import historicoInflacao from '../dados/dados.js';

export const retornaColecaoHistoricoInflacao = () => {
    return historicoInflacao;
};

export const buscaAnoHistoricoInflacao = (buscaAno) => {
    const filtraAno = historicoInflacao.filter(item => item.ano == buscaAno);
    return filtraAno;
};

export const buscaIdHistoricoInflacao = (id) => {
    const filtraId = parseInt(id)
    return historicoInflacao.find(item => item.id == filtraId);
};

export function calcularReajuste(valor, mesInicial, anoInicial, mesFinal, anoFinal) {
    // // Filtra os dados de inflação no intervalo desejado
    // const inflacaoNoIntervalo = historicoInflacao.filter((dados) => {
    //     const data = new Date(dados.ano, dados.mes - 1); // O mês é 0-based no JavaScript
    //     return data >= new Date(anoInicial, mesInicial - 1) && data <= new Date(anoFinal, mesFinal - 1);
    // });

    // // Calcula o fator de reajuste usando as taxas de inflação do intervalo
    // let fatorReajuste = 1;
    // inflacaoNoIntervalo.forEach((dados) => {
    //     fatorReajuste *= 1 + dados.ipca / 100;
    // });

    // // Calcula o valor reajustado de acordo com a fórmula inicial
    // const valorReajustado = valor * fatorReajuste;

    // return valorReajustado;
}
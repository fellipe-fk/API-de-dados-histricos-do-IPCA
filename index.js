import express from 'express';
import {retornaColecaoHistoricoInflacao, buscaAnoHistoricoInflacao, buscaIdHistoricoInflacao,calcularReajuste} from './funcoes/servico.js';

const app = express();

// primeira rota retorna a lista completa
// A segunda rota da API deve retornar um histórico de dados da coleção, referente a um ano específico

app.get('/historicoIPCA', (req, res) => {
    const buscaAno = req.query.ano;
    const filtraAno = buscaAno ? buscaAnoHistoricoInflacao(buscaAno) : retornaColecaoHistoricoInflacao();

    if (filtraAno.length > 0) {
        res.json(filtraAno);
      } else {
        res.status(404).send({ "erro": "Nenhuma Ano foi encontrado" });
      };
});

//A terceira rota da API deve retornar um elemento da coleção, conforme o código de identificação (id) do elemento

app.get('/historicoIPCA/:id', (req, res) => {
    const Id = buscaIdHistoricoInflacao(req.params.id);

    if(Id){
        res.json(Id);
    }else if(isNaN(parseInt(req.params.id))){
        res.status(400).send({"Erro": "Id invalido"})
    }else{
        res.status(404).send({"Erro": "Id nao encontrado"})
    }
});

//A quarta rota da API deve retornar um cálculo de reajuste

app.get('/historicoIPCA/calculo', (req, res) => {

    const valor = parseFloat(req.query.valor);
    const dataInicialMes = parseInt(req.query.mesInicial);
    const dataInicialAno = parseInt(req.query.anoInicial);
    const dataFinalMes = parseInt(req.query.mesFinal);
    const dataFinalAno = parseInt(req.query.anoFinal); 

    const resultado = calcularReajuste(valor,dataInicialMes,dataInicialAno,dataFinalMes,dataFinalAno);

    res.json({resultado:resultado});
});



app.listen(8080, () => {
    console.log('Api de IPA inicializando..');
});
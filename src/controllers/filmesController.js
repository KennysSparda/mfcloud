//controllers/filmesController.js
const filmesModel = require('../models/filmesModel');
const filmesModels = require('../models/filmesModel')

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {error:'', result:[]};

    let filmes = await filmesModels.buscarTodos();

    for(let i in filmes) {
      json.result.push({
        id: filmes[i].id,
        nome: filmes[i].nome,
        data: filmes[i].data,
        duracao: filmes[i].duracao,
        direcao: filmes[i].direcao,
        elenco: filmes[i].elenco,
        sinopse: filmes[i].sinopse,
        link: filmes[i].link
      })
    }
    res.json(json);
  },

  buscar: async (req, res) => {
    let json = {error:'', result:{}};

    let id = req.params.id;
    let filme = await filmesModels.buscar(id);

    if(filme) {
      json.result = filme;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = {error:'', result:{}};

    let nome = req.body.nome;
    let data = req.body.data;
    let duracao = req.body.duracao;
    let direcao = req.body.direcao;
    let elenco = req.body.elenco;
    let sinopse = req.body.sinopse;
    let link = req.body.link;

    if( nome && data && duracao && direcao && elenco && sinopse && link) {
      let novoFilme = await filmesModels.inserir(nome, data, duracao, direcao, elenco, sinopse, link);
      json.result = {
        id: novoFilme,
        nome,
        data,
        duracao,
        direcao,
        elenco,
        sinopse,
        link
      };
    } else {
      json.error = 'Campos nao enviados';
    }
    res.json(json);
  },
  
  alterar: async (req, res) => {
    let json = {error:'', result:{}};

    let id = req.params.id;
    let nome = req.body.nome;
    let data = req.body.data;
    let duracao = req.body.duracao;
    let direcao = req.body.direcao;
    let elenco = req.body.elenco;
    let sinopse = req.body.sinopse;
    let link = req.body.link;

    if( id && nome && data && duracao && direcao && elenco && sinopse && link) {
      await filmesModels.alterar(id, nome, data, duracao, direcao, elenco, sinopse, link);
      json.result = {
        id,
        nome,
        data,
        duracao,
        direcao,
        elenco,
        sinopse,
        link
      };
    } else {
      json.error = 'Campos nao enviados';
    }
    res.json(json);
  },

  excluir: async(req, res) => {
    let json = {error:'', result:{}};

    await filmesModels.excluir(req.params.id);

    res.json(json);
  }

}

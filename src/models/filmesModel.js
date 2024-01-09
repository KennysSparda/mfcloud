//models/filmesModel.js
const db = require('../db');

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM filmes', (error, results) => {
        if(error) { rejeitado(error); return }
        aceito(results);
      })
    })
  },

  buscar: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM filmes WHERE id = ?', [id], (error, results) => {
        if(error) { rejeitado(error); return; }
        if(results.length > 0) {
          aceito(results[0]);
        } else {
          aceito(false);
        }
      })
    })
  },

  inserir: (nome, data, duracao, direcao, elenco, sinopse, link) => {
    return new Promise((aceito, rejeitado) => {
      db.query('INSERT INTO filmes (nome, data, duracao, direcao, elenco, sinopse, link) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [nome, data, duracao, direcao, elenco, sinopse, link],
          (error, results) => {
            if(error) { rejeitado(error); return; }
            aceito(results.insertId);
          }
      )
    });
  },

  alterar: (id, nome, data, duracao, direcao, elenco, sinopse, link) => {
    return new Promise((aceito, rejeitado) => {
      db.query('UPDATE filmes SET nome = ?, data = ?, duracao = ?, direcao = ?, elenco = ?, sinopse = ?, link = ? WHERE id = ?',
          [nome, data, duracao, direcao, elenco, sinopse, link, id],
          (error, results) => {
            if(error) { rejeitado(error); return; }
            aceito(results);
          }
      )
    });
  },

  excluir: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query('DELETE FROM filmes WHERE id = ?', [id], (error, results) => {
        if(error) { rejeitado(error); return; }
        aceito(results);
      });
    });
  },

  liberarPool: () => {
    db.end((err) => {
      if (err) {
        console.error('Erro ao encerrar o pool de conexões:', err);
      } else {
        console.log('Pool de conexões encerrado com sucesso.');
      }
    });
  },
};

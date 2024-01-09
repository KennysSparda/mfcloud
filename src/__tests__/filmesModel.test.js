// __tests__/filmesModel.test.js
const filmesModel = require('../models/filmesModel');
const db = require('../db');

jest.mock('../db');

describe('Testes para filmesModel', () => {
  beforeEach(() => {
    // Limpar mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('Deve buscar todos os filmes do banco de dados', async () => {
    const filmesMock = [{ id: 1, nome: 'Filme 1' }, { id: 2, nome: 'Filme 2' }];

    // Configurar o mock para retornar filmesMock
    db.query.mockImplementationOnce((query, callback) => {
      callback(null, filmesMock);
    });

    const resultados = await filmesModel.buscarTodos();

    expect(resultados).toEqual(filmesMock);
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM filmes', expect.any(Function));
  });

  test('Deve buscar um filme pelo ID do banco de dados', async () => {
    const filmeMock = { id: 1, nome: 'Filme 1' };

    // Configurar o mock para retornar filmeMock
    db.query.mockImplementationOnce((query, values, callback) => {
      callback(null, [filmeMock]);
    });

    const resultado = await filmesModel.buscar(1);

    expect(resultado).toEqual(filmeMock);
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM filmes WHERE id = ?', [1], expect.any(Function));
  });

  // Adicione testes similares para inserir, alterar e excluir métodos
  // Certifique-se de testar casos de sucesso e falha, se aplicável
});


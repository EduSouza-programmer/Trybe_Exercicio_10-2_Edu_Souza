const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

describe('Verificando a função getUserName', () => {
  describe('Caso o usuário é encontrado', () => {
    it('Deve retorna o nome do usuário encontrado', () => {
      return expect(getUserName(4)).resolves.toEqual('Mark');
    });
  });
  describe('Caso o usuário não for encontrado', () => {
    it('Deve retorna um objeto com a propriedade erro', () => {
      return expect(getUserName(7)).rejects.toEqual({
        error: 'User with 7 not found.',
      });
    });
  });
});

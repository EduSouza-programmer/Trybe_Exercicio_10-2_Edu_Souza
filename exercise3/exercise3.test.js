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
    it('Deve retorna o nome do usuário encontrado', async () => {
      expect(await getUserName(4)).toEqual('Mark');
    });
  });
  describe('Caso o usuário não for encontrado', () => {
    it('Deve retorna um objeto com a propriedade erro usando try', async () => {
      try {
        await getUserName(7);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 7 not found.' });
      }
    });
  });
});

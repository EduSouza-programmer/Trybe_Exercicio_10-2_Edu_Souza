const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = age => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find(
        ({ age: animalAge }) => animalAge === age
      );
      return findAnimal
        ? resolve(findAnimal)
        : reject('Nenhum animal encontrado por essa idade');
    }, 300);
  });
};

const findAnimalByName = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find(
        ({ name: animalName }) => animalName === name
      );
      return findAnimal
        ? resolve(findAnimal)
        : reject('Nenhum animal com esse nome!');
    }, 300);
  });
};

const getAnimal = async name => {
  return await findAnimalByName(name);
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Encontre o animal pela idade', () => {
    it('Deve retorna um objeto procurado pela idade', () => {
      return expect(findAnimalByAge(1)).resolves.toEqual({
        name: 'Dorminhoco',
        age: 1,
        type: 'Dog',
      });
    });
  });
  describe('Quando não existe o animal com a idade procurada', () => {
    it('Deve retorna um erro', () => {
      return expect(findAnimalByAge(10)).rejects.toBe(
        'Nenhum animal encontrado por essa idade'
      );
    });
  });
});

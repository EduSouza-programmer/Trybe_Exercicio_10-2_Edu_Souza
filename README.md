<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  <strike>Exercício 10-2: Jest - Testes Assíncronos - Concluído o/ o/ o/ :star:</strike>
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos positivos em testes assíncronos;</p>

- <p><a href="#2"> :pushpin: 2.</a> Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado;</p>

- <p><a href="#3"> :pushpin: 3.</a> Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await;</p>

- <p><a href="#4"> :pushpin: 4.</a> O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista;</p>

- <p><a href="#5"> :pushpin: 5.</a> Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los e veja se compreendeu bem o funcionamento do beforeEach e do afterEach;</p>

- <p><a href="#6"> :pushpin: 6.</a> Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise;</p>

## :books: Exercícios

### 1°

Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos positivos em testes assíncronos.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const uppercase = require('./exercise1');

describe('callback uppercase', () => {
  it('Deve retornar letras em maiúscula', done => {
    uppercase('xablau', srt => {
      expect(srt).toBe('XABLAU');
      done();
    });
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 2°

Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

- Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
      return getUserName(4).then(name => expect(name).toEqual('Mark'));
    });
  });
  describe('Caso o usuário não for encontrado', () => {
    it('Deve retorna um objeto com a propriedade erro', () => {
      return getUserName(7).catch(error => {
        console.log(error);
        expect(error).toEqual({ error: 'User with 7 not found.' });
      });
    });
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 3°

Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

- Dica: Utilize o try/catch para o caso de erro.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
      const nameUser = await getUserName(4);
      expect(nameUser).toEqual('Mark');
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 4°

O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista

Obs: Os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' não existem mais no retorno, utilizei dois aleatoriamente para realizar o exercício proposto. Abaixo estão específicados no código.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
const fetch = require('node-fetch');

const getRepos = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

const URL = 'https://api.github.com/users/tryber/repos';

describe('Repositório github', () => {
  it('Deve passar se os dois repositório forem encontrados', async () => {
    const listRepo = await getRepos(URL);
    expect(listRepo).toContain('challenge-bug-hunting-youtrybe-squad-1');
    expect(listRepo).toContain('challenge-bug-hunting-youtrybe-squad-4');
  });
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 5°

Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
beforeEach(() => console.log('1 - beforeEach')); // 1° 
afterEach(() => console.log('1 - afterEach')); // 3°

test('', () => console.log('1 - test')); // 2°

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // 4°
  afterEach(() => console.log('2 - afterEach')); // 6°

  test('', () => console.log('2 - test')); // 5°
});
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

### 6°

Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

- Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

  Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

- Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

#### Resposta:

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
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
```

</details>

<p align="right">
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.

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

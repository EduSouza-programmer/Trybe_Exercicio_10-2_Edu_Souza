const uppercase = require('./exercise1');

describe('callback uppercase', () => {
  it('Deve retornar letras em maiúscula', done => {
    uppercase('xablau', srt => {
      expect(srt).toBe('XABLAU');
      done();
    });
  });
});

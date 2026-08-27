// Importando as funções do calc.js
const { soma, subtracao, multiplicacao, divisao } = require('./calc');

// O seu teste corrigido (garanta que a matemática está certa!)
test('soma 2 + 2 deve ser igual a 4', () => {
  expect(soma(2, 2)).toBe(4);
});
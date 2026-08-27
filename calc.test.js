test('soma 2 + 2 deve ser igual a 4', () => {
  // Alterado para 5 para forçar a falha no pipeline
  expect(soma(2, 2)).toBe(5); 
});
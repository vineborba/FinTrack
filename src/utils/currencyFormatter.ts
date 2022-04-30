export const applyCurrencyMask = (value: number) => {
  if (!value) return 'R$ 0,00';

  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value);
};

export const removeCurrencyMask = (string: string, parseNumber = true) => {
  if (!string || typeof string !== 'string') return '';

  let clearedString = string.replace(/R\$/g, '');
  clearedString = clearedString.replace(/\s/g, '');
  clearedString = clearedString.replace(/,/, '.');

  if (parseNumber) {
    return Number(Number(clearedString).toFixed(2));
  }

  return clearedString;
};

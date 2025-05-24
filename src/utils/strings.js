const sanitize = str => {
  return str.replace(/ {2}/g, ' ').trimStart().trimEnd(); // Elimina los espacios redundantes
}

const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g,""); // Elimina acentos
export { sanitize, normalize }

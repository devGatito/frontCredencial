

const slugify = (s) => {
  return s
    .toString()                           // Cast to string (optional)
    .normalize('NFKD')                    // Normaliza usando NFKD
    .toLowerCase()                        // Convierte la cadena a minúsculas
    .trim()                               // Elimina espacios de los dos lados
    .replace(/\s+/g, '-')                  // Reemplaza espacios por guiones
    .replace(/[^\w-]+/g, '')             // Elimina caracteres no alfanuméricos
    .replace(/-+/g, '-');                // Reemplaza guiones múltiples por uno solo
}

export default slugify;




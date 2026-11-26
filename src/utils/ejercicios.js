/*
 * ¿Para qué usamos export?
 * Este archivo es un módulo de JavaScript. Sus funciones no están disponibles
 * automáticamente en otros archivos: export permite que se puedan importar.
 *
 * En JsBasico.jsx utilizamos:
 *   import * as ejercicios from '../utils/ejercicios.js';
 * Esto reúne las funciones exportadas bajo el nombre ejercicios. Por ejemplo:
 *   ejercicios.sumarPrecios(['5', '8', '3']);
 *
 * Una función auxiliar que solo se llame dentro de este archivo no necesita exportarse.
 */

// EJEMPLOS RESUELTOS

// El control entrega texto: Number lo convierte antes del cálculo.
export function precioPareja(precio) {
  precio = Number(precio);
  let cantidad = 2;
  return precio * cantidad;
}

// Convertimos la edad recibida como texto antes de compararla.
export function puedeEntrar(edad) {
  edad = Number(edad);
  if (edad >= 18) {
    return 'Puede entrar';
  }
  return 'Necesita acompañante';
}

// Recibimos un array de precios. Un acumulador guarda la suma del recorrido.
// Number convierte cada precio antes de sumar, ya que los controles envían texto.
export function sumarPrecios(precios) {
  let total = 0;
  // length permite trabajar con cualquier cantidad de precios, incluso ninguno.
  for (let i = 0; i < precios.length; i = i + 1) {
    total = total + Number(precios[i]);
  }
  return total;
}

// EJERCICIOS
// 1. Minutos enteros: 0 <= inicio < fin <= 1440.
// duracion(600, 645) devuelve 45.
export function duracion(inicio, fin) {
  if (String(inicio).trim() === "" || String(fin).trim() === "") {
    return "Parámetros no válidos";
  }

  inicio = Number(inicio);
  fin = Number(fin);
  // TODO: resta inicio a fin.
  if (
    Number.isInteger(inicio) &&
    Number.isInteger(fin) &&
    inicio >= 0 &&
    inicio < fin &&
    fin <= 1440
  ) {
    return fin - inicio;
  }

  return "Parámetros no válidos";
}

// 2. Devuelve un booleano: ambos enteros y 0 <= inicio < fin <= 1440.
// horarioValido(600, 645) → true; horarioValido(645, 645) → false.
export function horarioValido(inicio, fin) {
  if (String(inicio).trim() === "" || String(fin).trim() === "") {
    return false;
  }

  inicio = Number(inicio);
  fin = Number(fin);
  // TODO: combina Number.isInteger y comparaciones con &&.
  if (
    Number.isInteger(inicio) &&
    Number.isInteger(fin) &&
    inicio >= 0 &&
    inicio < fin &&
    fin <= 1440
  ) {
    return true;
  }

  return false;
}

// 3. Recibe un array de géneros y el texto buscado. Cuenta coincidencias exactas.
// contarPorGenero(['indie', 'rock', 'indie'], 'indie') → 2.
// contarPorGenero([], 'indie') → 0. Debe funcionar con cualquier longitud.
export function contarPorGenero(generos, buscado) {
  // TODO: empieza un contador en 0, recorre generos con for y compara cada valor.
  let contador = 0;
  for (const genero of generos) {
    if (genero === buscado) {
      contador = contador + 1;
    }
  }
  return contador;
}

// 4. Recibe un array de duraciones no negativas, en minutos, como textos.
// minutosTotales(['45', '90', '60']) → 195; minutosTotales([]) → 0.
// Debe funcionar con cualquier longitud y sin modificar el array recibido.
export function minutosTotales(duraciones) {
  // TODO: empieza un acumulador en 0 y recorre duraciones con for.
  // Convierte cada valor con Number(duraciones[i]) antes de sumarlo.
  let total = 0;
  for (let i = 0; i < duraciones.length; i = i + 1) {
    total = total + Number(duraciones[i]);
  }
  return total;
}

// 5. Dos textos: nombre de artista y consulta.
// Ignora mayúsculas y espacios exteriores de la consulta. Texto vacío coincide.
// coincideTexto('Bruma Solar', ' BRUMA ') → true.
export function coincideTexto(artista, texto) {
  // TODO: usa trim(), toLowerCase() e includes(). Devuelve un booleano.
  const consulta = texto.trim().toLowerCase();
  return artista.toLowerCase().includes(consulta);
}

// 6. Dos códigos de escenario. Devuelve un booleano.
// coincideEscenario('rio', 'rio') → true; ('rio', 'bosque') → false.
export function coincideEscenario(escenario, buscado) {
  // TODO: compara los parámetros con igualdad estricta (===).
  return escenario === buscado;
}

// 7. Convertir minutos a hora.
// Convierte minutos enteros entre 0 y 1440 al formato HH:MM. Casos: 635 → 10:35; 0 → 00:00; 1440 → 24:00. Para valores inválidos devuelve 'Dato no válido'.
export function hora(minutos) {
  // TODO: Usa Number, Number.isInteger, Math.floor, el resto (%) y padStart.
  if (String(minutos).trim() === "") {
    return "Dato no válido";
  }

  const n = Number(minutos);

  if (Number.isInteger(n) && n >= 0 && n <= 1440) {
    const horas = String(Math.floor(n / 60)).padStart(2, "0");
    const mins = String(n % 60).padStart(2, "0");
    return `${horas}:${mins}`;
  }

  return "Dato no válido";
}

// 8. Aplicar un descuento.
// Devuelve el precio final como número con un máximo de dos decimales. Precio no negativo y porcentaje entre 0 y 100, ambos finitos. Rechaza campos vacíos. Casos: 20 y 15 → 17; 19.99 y 10 → 17.99; -1 o 120 % → 'Dato no válido'.
export function aplicarDescuento(precio, porcentaje) {
  // TODO: Valida antes de operar. toFixed devuelve texto; convierte de nuevo con Number.
  if (String(precio).trim() === "" || String(porcentaje).trim() === "") {
    return "Dato no válido";
  }

  const pre = Number(precio);
  const por = Number(porcentaje);
  if (
    pre >= 0 &&
    por >= 0 &&
    por <= 100
  ) {
    const precioFinal = pre * ((100 - por) / 100);
    return Number(precioFinal.toFixed(2));
  }

  return "Dato no válido";
}

// 9. Encontrar la mayor duración.
// Devuelve la mayor duración numérica sin modificar el array. Casos: 45;90;60 → 90; 60;60 → 60; lista vacía → null. Los elementos serán duraciones válidas no negativas.
export function mayorDuracion(duraciones) {
  // TODO: Recorre el array y conserva el máximo. Convierte cada elemento con Number.
  if (duraciones.length === 0) {
    return null;
  }

  let mayor = Number(duraciones[0]);
  for (let i = 1; i < duraciones.length; i = i + 1) {
    const actual = Number(duraciones[i]);
    if (actual > mayor) {
      mayor = actual;
    }
  }
  return mayor;
}

// 10. Eliminar géneros repetidos.
// Devuelve un array nuevo sin duplicados y conserva el orden. Quita espacios exteriores, pero distingue mayúsculas. Casos: indie;rock;indie → [indie, rock]; lista vacía → [].
export function generosUnicos(generos) {
  // TODO: Usa un array acumulador, trim e includes antes de añadir cada género.
  const unicos = [];
  for (const genero of generos) {
    const generoLimpio = genero.trim();
    if (!unicos.includes(generoLimpio)) {
      unicos.push(generoLimpio);
    }
  }
  return unicos;
}

// 11. Buscar artistas.
// Devuelve un array nuevo de nombres que contienen la consulta, ignorando mayúsculas y espacios exteriores de esta. Conserva los nombres originales. Una consulta vacía devuelve todos; 'zzz' devuelve [].
export function buscarArtistas(artistas, texto) {
  // TODO: Usa filter con una función con nombre, toLowerCase e includes. No uses flechas.
  const consulta = texto.trim().toLowerCase();
  const encontrados = [];
  for (const artista of artistas) {
    if (artista.toLowerCase().includes(consulta)) {
      encontrados.push(artista);
    }
  }
  return encontrados;
}

// 12. Convertir duraciones a horas.
// Devuelve un array nuevo con las duraciones en horas. Casos: 60;90;120 → [1, 1.5, 2]; lista vacía → []. No modifiques el array original.
export function duracionesEnHoras(duraciones) {
  // TODO: Usa map con una función con nombre. Convierte cada elemento con Number y divide por 60.
  const horas = [];
  for (const duracion of duraciones) {
    horas.push(Number(duracion) / 60);
  }
  return horas;
}

// 13. Calcular una compra.
// Cada precio se corresponde con la cantidad de la misma posición. Devuelve el total como número, redondeado a dos decimales. Casos: 12;8;5 y 2;1;3 → 47; ambas listas vacías → 0. Longitudes distintas → 'Datos no válidos'. Los elementos serán precios no negativos y cantidades enteras no negativas.
export function calcularCompra(precios, cantidades) {
  // TODO: Comprueba las longitudes. Usa reduce con una función con nombre, índice y acumulador inicial 0. Convierte ambos valores con Number.
  if (precios.length !== cantidades.length) {
    return "Datos no válidos";
  }

  let total = 0;
  for (let i = 0; i < precios.length; i = i++) {
    total = total + Number(precios[i]) * Number(cantidades[i]);
  }
  return Number(total.toFixed(2));
}

// 14. Detectar solapamientos.
// Recibe dos intervalos en minutos enteros, entre 0 y 1440 y con inicio menor que fin. Casos: 600–660 y 630–690 → true; 600–660 y 660–720 → false; intervalos separados → false. Si algún intervalo no es válido devuelve 'Horario no válido'.
export function solapan(inicioA, finA, inicioB, finB) {
  // TODO: Convierte los cuatro parámetros con Number. Valida y comprueba si cada inicio es anterior al fin del otro intervalo.
  if (
    String(inicioA).trim() === "" ||
    String(finA).trim() === "" ||
    String(inicioB).trim() === "" ||
    String(finB).trim() === ""
  ) {
    return "Horario no válido";
  }

  inicioA = Number(inicioA);
  finA = Number(finA);
  inicioB = Number(inicioB);
  finB = Number(finB);

  const horarioAValido =
    Number.isInteger(inicioA) &&
    Number.isInteger(finA) &&
    inicioA >= 0 &&
    inicioA < finA &&
    finA <= 1440;
  const horarioBValido =
    Number.isInteger(inicioB) &&
    Number.isInteger(finB) &&
    inicioB >= 0 &&
    inicioB < finB &&
    finB <= 1440;

  if (!horarioAValido || !horarioBValido) {
    return "Horario no válido";
  }

  return inicioA < finB && inicioB < finA;
}

// Este componente describe el contenido de Inicio.
export default function Inicio() {
  return (
    <>
      <section aria-labelledby="saludo">
        <h1 id="saludo">Raul Sanchez</h1>
        <p className="introduccion">
          Todo festival del señor Raul Sanchez empieza con un primer escenario. El nuestro es esta
          página: una aplicación de React que iremos construyendo paso a paso.
        </p>
      </section>

      <section aria-labelledby="objetivo">
        <h2 id="objetivo">Paso 1 · Nuestro primer componente</h2>
        <p>
          React es una biblioteca de JavaScript para crear interfaces mediante
          componentes. El contenido de Inicio está en <code>Inicio.jsx</code>: una función
          llamada <code>Inicio</code> que devuelve JSX.
        </p>
        <p>
          JSX se parece a HTML, pero forma parte de JavaScript. Vite prepara ese
          código para que el navegador pueda ejecutarlo.
        </p>
      </section>

      <section aria-labelledby="recorrido">
        <h2 id="recorrido">¿Cómo llega este saludo a la pantalla?</h2>
        <ol>
          <li><code>index.html</code> contiene el elemento con identificador <code>root</code>.</li>
          <li><code>main.jsx</code> conecta React con ese elemento y muestra <code>&lt;App /&gt;</code>.</li>
          <li><code>App.jsx</code> muestra la cabecera, el pie y la página elegida según la URL.</li>
          <li><code>Inicio.jsx</code> describe el contenido de esta página.</li>
          <li><code>index.css</code> define sus colores, espacios y tipografía.</li>
        </ol>
      </section>
    </>
  );
}

import { NavLink } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      explicación del funcionamiento de la página. Abajo un input centrado para
      introducir la fecha de nacimiento y el nombre. En todo momento la página
      le hablará al usuario
      <div>
        La lógica para calcular la edad de un terrícola en otro planeta como
        Mercurio implica considerar la diferencia en el tiempo de rotación y
        traslación del planeta en comparación con la Tierra.
      </div>
      <div>
        En este ejemplo, se divide la edad en años terrestres por 0.24 para
        obtener la edad en años mercurianos. La razón de esta división es que
        Mercurio completa una órbita alrededor del Sol en aproximadamente 88
        días terrestres. Por lo tanto, su año (tiempo de traslación) es mucho
        más corto que el año de la Tierra.
      </div>
      <div>
        Para calcular la edad en otros planetas, es necesario conocer el tiempo
        de traslación de cada planeta alrededor del Sol. Estos datos están
        disponibles y se basan en observaciones astronómicas y mediciones
        precisas. La fórmula general para calcular la edad en un planeta es:
        Edad en el planeta = Edad en años terrestres / Tiempo de traslación del
        planeta Donde Edad en años terrestres es la edad del individuo en años
        basada en la Tierra y Tiempo de traslación del planeta es el tiempo
        que tarda el planeta en completar una órbita alrededor del Sol.Es
        importante destacar que estas fórmulas proporcionan estimaciones
        aproximadas de la edad en otros planetas y no son absolutamente precisas
        debido a factores como las variaciones en la velocidad orbital y otros
        efectos gravitacionales. Sin embargo, son útiles para tener una idea
        general de cómo la edad de una persona se compararía en diferentes
        planetas.
      </div>
      <NavLink to="/Home">
        <div>Este será el layout.</div>
      </NavLink>
    </div>
  );
};

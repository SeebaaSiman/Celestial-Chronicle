Funciones con useHook

- una música de fondo estilo interestelar
- swich cambiar idioma

* Landing page
  al hacer scroll cambia el color de fondo (con useRef, isIntersteting y styleComponents con un obj de gradientes)

* Form edad
  usar useLocalStorage y useDebounce para optimizar el form

https://www.youtube.com/watch?v=uutiLsX5kFE&list=WL&index=75 (midudev useLocalStorage 8 minutos)

- Mostrar tarjetas de planetas con la edad, obtener la edad años, meses y días. Al hacer hover se pone play un video del planeta

Componente título que estará sticky para que quede persistente en el landingPage
componente welcome que va apareciendo con fondo en las letras que se mueven, Muy lindo (3 minutos)
https://www.youtube.com/watch?v=W8jwBMVWBas

https://www.youtube.com/watch?v=T3UOeVNMRWc&list=WL&index=72 Efecto parecido pero sin que aparezca gradual (1 minuto)

Efecto parallax para el landingPAge
https://www.youtube.com/watch?v=mb8x1Zsj-oE&list=WL&index=78

- Para la página de planetas
  https://www.youtube.com/watch?v=PkADl0HubMY&t=10s
  Es una galería con los planetas incluídos la luna que al hacer click entra y arroja información. Literal es todo visual, con la música de fondo va a quedar bien y no se hacen falta clicks ni que cambie el router.

Funciona la página de planetas, anda mal en fullscreen el botón anterior y siguiente, no cambia las imágenes. Por ahí falta en la lócica usar useEffect o useMemo

crear funciones que reciban el número de edad en... por el "useAgeOnPlanet" y convertirlo en años, meses,días, horas, minutos y segundos. De esa manera haré un reloj en tiempo real en cada cardPlanet.
En F1 tengo un componente countdown


ssebastiansiman@gmail.com
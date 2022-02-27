# Practica4 ~ 

En esta práctica se ha mejorado la página web creada en la anterior entrega empleando consumiendo un API REST JSON. El API que se ha elegido se ha obtenido de la siguiente página web: https://openweathermap.org/ y para su integración se ha añadido una nueva pestaña al menú, el cual está compuesto por seis secciones: "¿Quiénes somos?", "Conócenos", "Un mundo sostenible", "Inversores y accionistas" y "Pages", la página principal "Home" e "Información relativa al tiempo".

El link a la página web es: https://blancadepedro.github.io/Practica4/index.html

Un aspecto común a todas las páginas de la web es  que abajo a la derecha, hay un icono en forma de flecha sobre un fondo gris que si se pulsa te envía al inicio de la página. A la izquierda se tiene el menú, a lo largo de toda la página web que se puede desplegar o contraer. Arriba a la izquierda se tiene un buscador, el cual te lleva a la página del menú que le introduzcas. Si no encuentra ninguna coincidencia no hace nada. Es necesario pulsar el botón, porque es ahí donde se encuentra el eventListener.

# Página principal
La página principal está estructurada mediante las cards de bootstrap. Para profundizar en el aprendizaje de JavaScript se ha cambiado la disposición de tres fotos por un carrusel y se ha añadido interacción con las fotos que muestran los logos de las marcar y que al pinchar te llevan a la página oficial, haciendo que cada vez que se pasa el ratón se haga zoom. A su vez, en el apartado "Conócenos" se dispone de los mismos links para poderacceder desde cualquier página. A continuación, aparecen tres secciones más colocadas en dos columnas para probar la estruccturación de bootstrap con las rows y columns. Finalmente se termina la página con un mapa de Google maps que enseña dónde está la sede de Inditex, en Galicia.

# ¿Quiénes somos?
Si se navega por el menú la primera sección es: ¿Quiénes somos?, compuesta por tres páginas: Inditex en el mundo, Consejo de administración y Nuestra historia. En todas ella se han integrado elementos propios de bootstrap como el uso de rows y columns, cards y los estilos propios de css. A continuación, se va a explicar como testear la página tras la incorporación de elemntos relacionados con java script.

##  Inditex en el mundo
- Al pasar el ratón por las primeras tres cards, posicionadas en la primera fila de la página, se desplazarán hacia arriba y volverána su posición al retirar el ratón.
- Los números correspondientes a la sección "Número de tiendas a nivel global" se sumarán hasta llegar al total cada vez que se acceda a la página
- En la sección "Proveedores" si se pincha el link se accederá a la página oficial de Inditex para obtener más información.
- Se han dispuesto cuatro cards concatenadas con preguntas frecuentes sobre la marca, que se pueden contraer ocultando la información. Si se desea acceder a la respuesta de nuevo solo se necesita volver a pinchar en la pregunta.

##  Consejo de administración
- Se ha añadido un carrusel con las fotos de los partcicipantes, de forma que vaya pasando de forma automática.
- Si se pulsa la imagen de cualquier personaje, te redirige a su información correspondiente.

##  Nuestra historia
Esta sección no se ha modificado con respecto a la última entrega (Práctica 3).

# Un mundo sostenible
La tercera sección correspondiente al menú es: Un mundo sostenible, compuesta por dos páginas: Con las personas y Con el medio ambiente. Estas dos páginas tampoco han sido modificadas con respecto a la entrega anterior, pero sí se integraron componentes como fotos, vídeos y se jugó con la disposición de cada elemento para hacerlo visual y practcar con lo que ofrece bootstrap.

# Inversores y accionistas
La cuarta sección correspondiente al menú es: Inversores y accionistas. Es la más simple de todas ellas, compuesta por tres cards, cada una con una imagen representativa y un correo desde el cual se puede enviar un email si se desea. No se ha modificado con respecto la práctica anterior (Práctica 3).

# Información relativa al tiempo
Esta es la sección en la que se desarrolla la parte principal de lo requerido en la práctica. Se pedía interaccionar con una API REST y visualizar en el documento la información,  empleando el Framework CSS Bootstrap. Para ello se ha creado una especie de página meteorológica. De la API mencionada anteriormente se saca información relativa a la geolocalización que se proporciona por pantalla y al dar a imprimir se crean dos nuevas secciones. La primera imprime cuatro tarjetas con información detallada sobre el tiempo del día actual y los próximos tres, y debajo aparece una gráfica que representa la temperatura diurna y nocturna de toda la semana. Para ello, en el fichero intex.js, se ha hecho uso de llamadas asíncronas a un API REST, promesas e interacción al DOM. 
Para poner a prueba la página:
- Introduzca la latitud del lugar que quiere buscar donde pone "Introduzca la latitud"
- Introduzca la longitud del lugar que quiere buscar donde pone "Introduzca la longitud"
- Si desea obtener las coordenadas de su posición actual pulse "Use current location"
- Una vez tenga ambas coordenadas pulse el botón "Get weather". Tras pulsar deberá aparecer por pantalla lo descrito anteriormente
- Si introduce una localización erronea se imprimirá por consola el tipo de error que ha sucedido en función del status
- Relacionado con la gráfica:
  - Si pulsa pulsa "temperatura diurna" (arriba, centrado, recuadro verde) desaparecerá la información relativa
  - Si pulsa pulsa "temperatura nocturna" (arriba, centrado, recuadro azul) desaparecerá la información relativa
  - Si pasa el ratón por algún punto marcado de la gráfica aparecerá un recuadro con la información correspondiente

# Pages
Finalmente, el menú muestra una sección llamada pages que contiene los formularios correspondientes a la página. Puede inciar sesión, registrarse e incluso dejar un comentario. Aunque no esté implementado aun, en caso de haber olvidado la contraseña, hay un formulario para restaurarla. A los formularios se les ha añadido validación, de tal forma que si algún campo no se rellena adecuadamente o se deja vacío aparecerá un mensaje en la parte superior del formulario en rojo indicando el error. Sabrá que se ha enviado correctamente porque aparecerá una alerta y se le redirigirá a la página principal. Esto se ha implementado en el fichero "formulario.js" haciendo uso de DOM.
Validaciones de los formularios:
- El nombre tiene que ser de al menos dos letras
- El apellido tiene que ser al menos de dos letras
- La edad tiene que ser numérica y no puede ser nula
- El correo electrónico tiene que contener un "@" y letras antes y después del @
- El teléfono tiene que ser numérico y de longitud 9
- El DNI tiene que ser de longitud 9
- La contraseña no puede ser nula
- La repetición de contraseña tiene que coincidir con la contraseña

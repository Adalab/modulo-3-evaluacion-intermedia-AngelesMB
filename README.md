## Módulo 3: Ejercicio de evaluación intermedia

El ejercicio consiste en desarrollar una página web sencilla con React.

Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando este
enlace. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a trabajar
en el ejercicio.

**Listado de Adalabers**

Vamos a llevar la cuenta de las compañeras que somos en esta promo y a apuntar la especialidad de cada
una. Queremos crear una aplicación para gestionar alumnas de Adalab y lo vamos a hacer con React!!!

A continuación detallamos lo que queremos hacer.

**1º Pintar el listado de Adalabers**

Para empezar el ejercicio queremos:

1. Pintar una cabecera con un título que ponga Adalabers.
2. Pintar el listado de Adalabers inicial. Para ello os facilitamos los datos en la siguiente API:
   https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json
   Os recomendamos que primero copiéis el contenido del API y los peguéis en un fichero json en
   vuestro proyecto. Más adelante os encargaréis del fetch(). De momento lo importáis en vuestro
   componente App y lo guardáis en el estado.

Y, cuando se vean todos los datos, nos ocuparemos del fetch para obtener los datos directamente del API y
no tenerlos "grabados a fuego" en el código fuente de nuestra aplicación.

**2º Añadir a una nueva Adalaber**

A continuación, queremos añadir los datos de una compañera nueva. Para ello seguiremos los siguientes
pasos:

1. Crear un formulario con los campos:
   - Nombre de la compañera
   - Nombre de su tutora
   - Especialidad en la que destaca
   - Un botón para Añadir una nueva Adalaber.
2. Cuando la usuaria pulse en el botón, hay que añadir la Adalaber al listado de alumnas para que ésta
   aparezca en la tabla.
   Te queremos dar unas pistas en forma de preguntas. Antes de que la usuaria pulse en el botón de "Añadir
   una nueva Adalaber" debes pensar:
   ¿Vas a guardar los datos del formulario en algún sitio?
   ¿Qué tipo de datos vas a guardar?
   ¿Qué valores iniciales tienen estos datos?

**3º Filtrar el listado de Adalabers (BONUS)**

A continuación queremos filtrar las alumnas por nombre y por tutora. Intenta hacer uno de los dos y,
cuando lo tengas controlado, implementa el restante (no hace falta que estén los dos filtros).
Para filtrar por nombre:

1. Añade un recuadro sobre la tabla del listado de alumnas donde la usuaria pueda escribir texto.
2. Añade la funcionalidad para que, cuando la usuaria escriba en ese `<input>`, el listado de Adalabers
   se re-pinte mostrando solo las que su nombre incluya el texto que ha escrito la usuaria (aplicando
   también el filtrado por tutora, si ya lo tuvieras implementado).
   Para filtrar por tutora:
3. Añade un `<select>` a la cabecera que tenga las siguientes opciones:
   - Cualquiera (es la opción por defecto)
   - Yanelis
   - Dayana
   - Iván
4. Añade la funcionalidad para que, cuando la usuaria cambie ese `<select>`, el listado de Adalabers se
   re-pinte mostrando solo las que coincidan con la opción seleccionada (aplicando también el filtrado
   por nombre, si procede).

**4º Mostrar redes sociales (BONUS)**

Después de pintar el listado, podemos intentar pintar una columna más en nuestra tabla con enlaces a las
redes sociales que tiene cada Adalaber. Puedes guiarte con los siguientes pasos:

1. Añade una columna más en la cabecera de la tabla.
2. Añade una celda más a cada fila.
3. El contenido de la celda extra de cada fila serán los nombres de las redes sociales de cada Adalaber.
   Puede ser que no tenga ninguna o puede ser que tenga hasta 3.
4. Añade un enlace `<a>` al nombre de la red social que abra la URL (o dirección) de la misma.

**5º Maqueta a tu gusto (BONUS)**

No te vamos a decir cómo debes poner bonita tu web porque tienes más estilo y flow que nosotras.

**Diseño aproximado**

<img src="./src/images/design.png" alt="Design" height="400"/>

---

**Entrega**

En este enunciado os proponemos dos ejercicios básicos y tres ejercicios avanzados marcados como
BONUS. Hemos calculado que hacer los 5 ejercicios durante el tiempo de la evaluación es científicamente
imposible, aspiramos a que hagas los dos primeros ejercicios y, si te sobra tiempo, plantear cómo hacer los
demás.
Si no te sobra tiempo y quieres continuar en otro momento, puedes hacerlo pero en otra rama diferente a
master o main, ya que no debes hacer cambios en la rama principal de tu repo hasta que tu profe no
termine de corregir tu evaluación.
La evaluación solo se considerará terminada cuando:

- Esté publicada en GitHub Pages (apuntando a la rama main / master) y esté funcionando.
- El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al
  lado de la descripción.
- Debéis hacer commits y merges a la rama main / master solo hasta las 11:10. No hagáis commit a la
  rama main / master después de esa hora.
- Recuerda que GitHub Pages a veces tarda unos minutos en actualizar tu página.

¡A por la patata!

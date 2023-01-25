Vamos a crear una nueva tienda de ropa y complementos online utilizando una biblioteca de JS, React.

1. Primero definimos el componente App, donde construimos nuestra página a través de la integración del resto de componentes que la formarán.

{ 2. En App vamos utilizar el UseEffect que va a monitorizar el bloque de código que hace la llamada a la API y controlar cuando se ejecuta esta llamada (array de dependencia). Pero esto se puede realizar porque con anterioridad hemos creado el hook useState que controla la variable de estado, sin embargo, estará renderizando con cada cambio y por ello es necesario usar UseEffect.}

3. Creamos un nuevo componente llamado List en el cual ejecutamos el método map. Ésta nos permitirá crear un nuevo array con los resultados de la llamada al servidor. A su vez, este componente contendrá otro componente llamado Producto que recogerá datos del mismo. Esto es posible porque le enviamos información a través de las props (item en este caso). Podremos ver una vista más detallada sobre el producto y su información.

4. Para ver el listado de productos, en App hemos de importar List junto con sus props. En este caso es productoList, que es la variable de estado que hemos utilizado en App.

5. Router

6. A través del componente Contact creamos un formulario controlado en el que los usuarios puedan enviar comentarios de manera ficticia. También han de ingresar su nombre y correo electrónico, de manera que la tienda pudiese responder a su comentario.

Para esto hemos hecho uso del hook "useState" con el que creamos un objeto que relacionaremos con los input. Partimos de datos en vacío.

Con el evento onChange conseguimos estar pendientes de los cambios en el input, con lo que el formulario será reactivo. Cada vez que se modifique algo en el input, con la función handleChange se guardarán los datos que introduzcamos. Con spread operator hacemos una copia de los datos. En la función handleChange conseguimos relacionar el objeto que hemos creado (message) con la información que el usuario está introduciento gracias a "ev.targe.id".

Dentro del propio formulario creamos una función onSubmit para evitar el procesamiento automático de los datos con ev.preventDefault.



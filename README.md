# Supermercado M

## Descripcion

Aplicacion web creada en React que simula una tienda de productos para un supermercado.

Permitiendo al usuario ver el inventario de productos, ver la informacion de la tienda, ver las preguntas frecuentes y agregar un producto al inventario.

Este proyecto se ha creado con la implementacion de React Router para cambiar entre paginas y tailwind para darle una apariencia mas agradable.

## Tecnologias utilizadas

- HTML5: Cuerpo de la pagina.
- CSS: Diseño y estilo.
- JavaScript: Logica y funcionalidades.
- React: Desarrollo de componentes e interfaces dinamicas.
- React Router: Enrutamiento dinamico en la navegacion.
- React Context: Distribucion del estado global
- Vite: Herramienta de desarrollo y compilacion del proyecto.
- Bootstrap: Componentes de diseño responsivo.
- JSON: Almacenamiento de datos.
- Tailwind: Framework CSS de diseño

## Inicio

La pagina de inicio muestra el inventario de productos disponibles en el supermercado.

Dando informacion como:

- Nombre del producto
- Marca del producto
- Tipo de producto
- Precio

Ademas, se implemento una lista desplegable donde puedes filtrar los tipos de productos.

## Quienes somos

La pagina de quienes somos muestra informacion del supermercado para saber cual es el proposito del supermercado.

Dando lo que seria: 
- Objetivo del supermercado 
- Precios bajos 
- Productos de calidad 
- La importancia del cliente.

## Preguntas frecuentes

La pagina de preguntas frecuentes o tambien llamado FAQ muestra varias preguntas con sus respuestas.

Habiendo preguntas como: 
- La disponibilidad del supermercado 
- El envio a domicilio 
- La aceptacion de reembolsos

## Agregar producto

La pagina de agregar producto permite al usuario completar un formulario para asi tener un producto disponible en el supermercado.

Para agregar un producto hay que introducir lo siguiene:
- Nombre del producto
- Marca del producto
- Tipo de producto
- Precio

Una vez completado el formulario se confirma con el boton de agregar producto, y una vez agregado aparecera en el inventario.

## Detalle producto

Al darle click a algun producto del inventario el usuario pasara a los detalles del producto.

Donde estara la informacion como:

- Nombre
- Marca
- Tipo
- Precio

Ademas, tendra la opcion de agregar el producto al carrito, guardando el producto en la memoria para la pagina del carrito de compras.

## Carrito

En la pagina de carrito se mostrara los productos agregados al carrito, permitiendole aumentar o reducir la cantidad para comprar, incluso cambiando su precio por los demas productos y su cantidad.

Una vez se de click al boton de comprar, la cantidad de productos disminuira en el inventario. 

## Menu de navegacion

Gracias a React Router es posible desplazarse por las 4 paginas, utilizando un menu de navegacion inferior que identifica la ruta con el componente `NavLink`

## Como ejecutar el proyecto

Para ejecutar el proyecto es necesario tener Node.js y npm con Vite instalados en el computador.

Descarga el codigo en ZIP o con `git clone`.

En la terminal accede al directorio del proyecto con `cd`

Instalar las dependencias con el siguiente comando:

```bash
npm install
```

Por ultimo iniciar el proyecto con el siguiente comando:

```bash
npm run dev
```

Una vez iniciado la terminal mostrara la direccion local el cual puedes acceder desde el navegador:

```text
http://localhost:5173/
```
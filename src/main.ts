/* ===========================================================
 * Parte 2: Interfaces y Types en TypeScript
 * Consigna 2: Definir interfaces y types para representar usuarios en una aplicación
 * =========================================================== */

// Ejercicio 1: Definición de la interfaz Usuario
interface Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
}

// Ejercicio 1: Definición del type UsuarioType
type UsuarioType = {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
}

// Diferencia entre interface y type:
// Interface se usa para describir la forma de un objeto, es más flexible para extender y usar en clases.
// Type se usa para definir tipos en un sentido más general, es más rígido pero útil para combinaciones de tipos complejos.

// Ejercicio 2: Creación de un array de usuarios
const usuarios: Usuario[] = [
  { id: 1, nombre: "Juan", edad: 30, email: "juan@example.com", activo: true },
  { id: 2, nombre: "Ana", edad: 25, email: "ana@example.com", activo: false },
  { id: 3, nombre: "Pedro", edad: 28, email: "pedro@example.com", activo: true },
]

// Ejercicio 2: Filtrado de usuarios activos
const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log("Usuarios activos:", usuariosActivos);

/* ===========================================================
 * Parte 3: Clases y Objetos
 * Consigna 3: Crear una clase Usuario y generar instancias deobjetos.
 * =========================================================== */
console.log(""); //Salto de Linea

// Ejercicio 3: Implementación de la clase UsuarioClass
class UsuarioClass  implements Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;

  // Ejercicio 3: Constructor que recibe los valores de las propiedades
  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }

  // Ejercicio 3: Método toggleActivo que cambia el estado de activo
  toggleActivo(): void {
    this.activo = !this.activo;
  }
}

// Ejercicio 3: Crear dos instancias de la clase UsuarioClass
const usuario1 = new UsuarioClass (1, "Juan", 30, "juan@example.com", true);
const usuario2 = new UsuarioClass (2, "Ana", 25, "ana@example.com", false);

// Ejercicio 3: Mostrar los datos de los usuarios en la consola
console.log("Datos de los usuarios: ", usuario1, usuario2);

// Ejercicio 4: Extender la clase UsuarioClass
class AdminUsuario extends UsuarioClass {
  permisos: string[];

  // Ejercicio 4: Constructor que recibe los valores de las propiedades
  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]){
    super(id, nombre, edad, email, activo);
    this.permisos = permisos;
  }
}

// Ejercicio 4: Crear una instancia de AdminUsuario
const admin = new AdminUsuario(3, "Pedro", 28, "pedro@example.com", true, ["editar", "eliminar", "ver"]);

// Ejercicio 4: Mostrar los datos del administrador
console.log("Datos del administrador", admin)

/* ===========================================================
 * Parte 4: Arrays y Métodos de Arrays
 * Consigna 4:  Manejar datos almacenados en arrays
 * =========================================================== */
console.log(""); //Salto de Linea

// Ejercicio 5: Array de productos
const productos = [
  { id: 1, nombre: "Producto A", precio: 30, stock: 5 },
  { id: 2, nombre: "Producto B", precio: 20, stock: 0 },
  { id: 3, nombre: "Producto C", precio: 50, stock: 3 },
  { id: 4, nombre: "Producto D", precio: 10, stock: 8 },
]

// Ejercicio 5: Usando .map() para mostrar solo los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// Ejercicio 5: Usando .filter() para obtener productos con stock > 0
const productosConStock = productos.filter(producto => producto.stock > 0);
console.log("Productos con stock > 0:", productosConStock);

// Ejercicio 6: Ordenando el array de productos de menor a mayor precio
productos.sort((a, b) => a.precio - b.precio)
console.log("Productos ordenados por precio (menor a mayor):", productos);

// Ejercicio 6: Agregando un nuevo producto al array
productos.push({id: 5, nombre: "Producto b", precio: 60, stock: 0});
console.log("Productos después de agregar un nuevo producto:", productos);

// Ejercicio 6: Eliminando el último producto del array
productos.pop();
console.log("Productos después de eliminar el último producto:", productos);

/* ===========================================================
 * Parte 5: Tipos Genéricos en TypeScript
 * Consigna 5: Utilizar tipos genéricos para crear funciones flexibles.
 * =========================================================== */
console.log(""); //Salto de Linea

// Ejercicio 7: Función genérica getRandomItem
function getRandomItem<T>(array: T[]): T {
  const randomElement = Math.floor(Math.random() * array.length)
  return array [randomElement];
}

// Ejercicio 7: Array de números
const numeros = [100, 200, 300, 400, 500];
const numeroAleatorio = getRandomItem(numeros);
console.log("Nombre aleatorio:", numeroAleatorio)

// Ejercicio 7: Array de strings
const nombres = ["Juan", "Ana", "Pedro", "Luis"]
const nombreAleatorio = getRandomItem(nombres)
console.log("Nombre aleatorio:", nombreAleatorio)

// Ejercicio 7: Array de objetos 
usuarios.push(
  { id: 4, nombre: "Lucía", edad: 22, email: "lucia@example.com", activo: true },
  { id: 5, nombre: "Marcos", edad: 35, email: "marcos@example.com", activo: false }
);

const usuarioAleatorio = getRandomItem(usuarios);
console.log("Usuario aleatorio:", usuarioAleatorio);

// Ejercicio 8: Interfaz Caja
interface Caja<T> {
  contenido: T;
}

// Ejercicio 8: Implementación de la clase CajaClass que usa la interfaz Caja<T>
class CajaClass<T> implements Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  mostrarContenido(): void {
    console.log("Contenido de la caja", this.contenido);
  }
}

// Ejercicio 8: Caja con un número
const cajaDeNumero = new CajaClass<number>(7);
cajaDeNumero.mostrarContenido();

// Ejercicio 8: Caja con un string
const cajaDeString = new CajaClass<String>("Hola Mundo");
cajaDeString.mostrarContenido();

// Ejercicio 8: Caja con un objeto
const cajaDeUsuario = new CajaClass<Usuario>( { id: 6, nombre: "Sofía", edad: 29, email: "sofia@example.com", activo: true });
cajaDeUsuario.mostrarContenido();

/* ===========================================================
 * Parte 6: Promesas y Asincronía
 * Consigna 6: Implementar promesas y async/await
 * =========================================================== */
console.log(""); //Salto de Linea

// Ejercicio 9: Función que simula una API
function obtenerDatos(): Promise<Usuario[]> {
  return new Promise((resolve) =>{
    setTimeout(() => {
      const usuarios: Usuario[] = [
        { id: 1, nombre: "Juan", edad: 30, email: "juan@example.com", activo: true },
        { id: 2, nombre: "Ana", edad: 25, email: "ana@example.com", activo: false },
        { id: 3, nombre: "Pedro", edad: 28, email: "pedro@example.com", activo: true },
      ];
      resolve(usuarios)
    }, 3000);
  })
}

// Ejercicio 9: Función async para usar await
async function mostrarDatos() {
  const datos = await obtenerDatos();
  console.log("Datos obtenidos:", datos);
}

// Ejercicio 9: Ejecutamos la función
mostrarDatos();

// Ejercicio 10: Función para llamar a una API pública
async function obtenerUsuarioAPI() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios obtenidos de la API; ", data)
  }catch(error) {
    console.log("Error al obtener los usuarios: ", error)
  }
}

// Ejercicio 10: Ejecutamos la función
obtenerUsuarioAPI()

/* ===========================================================
 * Parte 7: Manipulación del DOM con TypeScript
 * Consigna 7: Mostrar los datos obtenidos en el HTML
 * =========================================================== */
console.log(""); //Salto de Linea

// Ejercicio 11: Función para renderizar la lista de usuarios
function renderizarUsuarios(usuarios: Usuario[]): void {

  const lista = document.getElementById('usuarios-lista') as HTMLUListElement;
  lista.innerHTML = '';

  // Ejercicio 11: Recorrer el array de usuarios y agregar cada uno a la lista
  usuarios.forEach(usuario => {
    const li = document.createElement('li'); // Crea un nuevo <li>
    li.innerHTML = `${usuario.nombre} - ${usuario.email}`; // Contenido del <li>
    lista.appendChild(li); // Agrega el <li> al <ul>
  });
}

// Ejercicio 12: Seleccionar el botón por su id
const botonCargarUsuarios = document.getElementById('cargar-usuarios') as HTMLButtonElement;

// Ejercicio 12:  Agregar el evento click
botonCargarUsuarios.addEventListener('click', () => {
  renderizarUsuarios(usuarios);
})
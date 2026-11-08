export function leerStorage(clave, valorInicial) {
    try {
        const contenido = localStorage.getItem(clave);

        return contenido === null
            ? []
            : JSON.parse(contenido);
    } catch (error) {
        return valorInicial;
    }
}

export function guardarStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}
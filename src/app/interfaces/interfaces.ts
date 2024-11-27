// Estructura de elementos del menu
export interface MenuElements {
    icono: string
    nombre: string
    ruta: string
}

export interface datos{
    id:string;
    data:info; 
}

export interface info{
    bando:string;
    descripcion:string;
    estatura:string;
    imagen:string;
    nombre:string;
    peso:string;
}

export interface armas {
    id:string;
    data:stats;
}

export interface stats {
    dano:number;
    imagen:string;
    municion:number;
    nombre:string;
    tipo:string;
}

export interface items {
    id: string;
    data: atr;
}

export interface atr {
    nombre:string;
    costo:number;
    curacion:number;
    imagen:string;
}

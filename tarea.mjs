export default class Tarea{
    constructor (id, titulo,descripcion,completado=fase){
        this.id=id;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.completado=completado;
    }
    completar (){
        this.completado=true;
    }
    validar(){
        if (!this.titulo||this.trim()===''){
            throw new Error('El titulo de la tarea es obligatorio.');
        }
    }

}
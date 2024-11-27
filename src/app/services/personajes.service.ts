import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  constructor(private firestore: AngularFirestore) { }

  //En esta función se obtienen todos los registros de la API.
  getDatos(){
    return this.firestore.collection('personajes').snapshotChanges();
  }

  //En esta función obtenemos el registro con base del id que se recibe.
  getDetalle(id:string){
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }

  getDatosArmas(){
    return this.firestore.collection('armas').snapshotChanges();
  }

  getDetalleArma(id:string){
    return this.firestore.collection('armas').doc(id).valueChanges();
  }

  getDatosItems(){
    return this.firestore.collection('items').snapshotChanges();
  }

  getDetalleItem(id:string){
    return this.firestore.collection('items').doc(id).valueChanges();
  }
}

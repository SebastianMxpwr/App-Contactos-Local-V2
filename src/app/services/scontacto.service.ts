import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScontactoService {
  nombreCompleto:String;
  telefono:String;
  correo:String;
  contactos:Array<any>;
  

  constructor(public alertController: AlertController) {
    this.nombreCompleto=this.telefono=this.correo="";
    this.contactos=[];
  }

  async ContactoService(){
      let contacto = {
        nombreCompleto:this.nombreCompleto,
        telefono:this.telefono,
        correo:this.correo,
      }
      this.contactos.push(contacto);
  }

  async deleteContactoUltimo(){
    const alert = await this.alertController.create({
      header: 'Eliminar contacto',
      message: '<strong>' + 'Seguro quieres eliminar el contacto?'+'</strong>?',
      buttons: [
        {
        text:'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah)=>{
          console.log('Confirmar cancelacion: blah')
        }
      },{
        text:'Arre',
        handler: () =>{
          this.contactos.pop()
        }
      }]
    })
    await alert.present()
  }

  async deleteContactoPrimero(){
    const alert = await this.alertController.create({
      header: 'Eliminar contacto',
      message: '<strong>' + 'Seguro quieres eliminar el contacto?'+'</strong>?',
      buttons: [
        {
        text:'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah)=>{
          console.log('Confirmar cancelacion: blah')
        }
      },{
        text:'Arre',
        handler: () =>{
          this.contactos.shift()
        }
      }]
    })
    await alert.present()
    
  }
}



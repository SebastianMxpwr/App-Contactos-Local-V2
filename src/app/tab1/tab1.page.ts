import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ScontactoService } from '../services/scontacto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nombreCompleto:String;
  telefono:String;
  correo:String;
  contactos:Array<any>;

  constructor(public contactoService: ScontactoService, public alertController: AlertController) {
    this.nombreCompleto=this.telefono=this.correo="";
    this.contactos=[];
  }

  async addContacto(){
    if(this.nombreCompleto == ''){
      this.alertError('Como vas a dejar vacio el nombre...')
    }else if(this.telefono==''){
      this.alertError('Como vas a dejar vacio el telefono...')
    }else if(this.correo==''){
      this.alertError('Como vas a dejar vacio el correo...')
    }else{
      let contacto = {
        nombreCompleto:this.nombreCompleto,
        telefono:this.telefono,
        correo:this.correo,
      }
      this.contactos=this.contactoService.contactos
      this.contactos.push(contacto);
      const alert = await this.alertController.create({
        header: 'Exito',
        message: 'Se añadio al contacto',
        buttons: ['OK']
      });
      await alert.present();
      this.nombreCompleto=this.telefono=this.correo="";
    }
  }

  async alertError(error){
    const alert =await this.alertController.create({
      header: 'error puto',
      message: error,
      buttons: ['WENO']
    })
    await alert.present();
  }
}

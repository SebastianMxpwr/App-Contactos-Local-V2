import { Component } from '@angular/core';
import { ScontactoService } from '../services/scontacto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public contactoService: ScontactoService) {}

}

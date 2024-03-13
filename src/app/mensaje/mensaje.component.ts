import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss']
})
export class MensajeComponent {

  @Input() messageType: 'success' | 'info' | 'error' = 'error';
  @Input() messageText: string | undefined;


  getMessageClass() {
    // Utiliza el tipo de mensaje para determinar la clase adecuada
    switch (this.messageType) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'success';  // Por defecto, devuelve 'success' si el tipo no es reconocido
    }
  }


}

import { Component, Input } from '@angular/core';
import {PhotoModal} from './photoModal'
import {FORM_DIRECTIVES} from '@angular/common'

@Component({
  selector: 'photo-modal',
  directives:[FORM_DIRECTIVES],
  templateUrl: '../../../clientUI/templates/html_photoModal.html'
})
export class PhotoModalComponent{
    @Input()
    photoModal:PhotoModal;
}
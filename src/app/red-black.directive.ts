import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective {

  constructor(element: ElementRef) {
    console.log(element, 'element');
    element.nativeElement.style.color = 'red';
  }

}

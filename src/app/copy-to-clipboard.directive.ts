import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {
  @Input('appCopyToClipboard') copyText: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const textarea = document.createElement('textarea');
    textarea.value = this.copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
// this class is a property directive

export class DropdownDirective{

    @HostBinding('class.open') isOpen = false;

    @HostListener('mouseenter') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

    @HostListener('mouseleave') toggleClose(){
        this.isOpen = !this.isOpen;
    }
}
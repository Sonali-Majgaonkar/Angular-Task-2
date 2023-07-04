import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
    selector : '[inputFormat]'
})

export class InputFormatDirective{
    // @HostListener('click') onClick(){
    //     console.log('Clicked');
    // }
    constructor(private elementRef : ElementRef){}

    @HostListener('blur') onBlur(){
        console.log(this.elementRef.nativeElement.value);
        let inputValue : string = this.elementRef.nativeElement.value;
        // this.elementRef.nativeElement.value = inputValue.toUpperCase()
        if(inputValue.length !== 10){return}
        let formatedNumber = `(${inputValue.substr(0,3)}) ${inputValue.substr(3,3)} - ${inputValue.substr(6)}`
        console.log(formatedNumber);
        this.elementRef.nativeElement.value=formatedNumber;
    }
}
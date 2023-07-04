import { Directive , HostListener , ElementRef } from '@angular/core'

@Directive({
    selector: '[inputTitleCase]'
})

export class InputTitleCaseDirective{

    constructor(private elementRef : ElementRef){}

    @HostListener('blur') onblur(){
        const prepoArr=['of', 'in', 'the', 'but','out','for','a','an','on','by','to','at'];
        let strArr=this.elementRef.nativeElement.value.toLowerCase().split(' ');
        strArr[0] = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);
        
        for(let i = 1 ; i < strArr.length ; i++){
            if(!prepoArr.includes(strArr[i])){
                strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
            }
        }
        this.elementRef.nativeElement.value = strArr.join(' ');
    }
}
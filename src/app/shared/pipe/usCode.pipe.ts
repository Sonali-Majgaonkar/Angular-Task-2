import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'usConvert'
})

export class UsCodePipe implements PipeTransform{
    transform(value: string, args?: any[]) {
        if(value.length != 10){return}
        let usNumCode = `(${value.substr(0,3)}) ${value.substr(3,3)}-${value.substr(6)}`
        return usNumCode;
    }
}
import { Pipe , PipeTransform} from '@angular/core'
@Pipe({
    name:'summaryCutter'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, args?: any) {
        if(!value){return}
        let cutScope=args ? args : 50;
        let newValue = value.substr(0,cutScope)+'...';
        return newValue              
    }
}
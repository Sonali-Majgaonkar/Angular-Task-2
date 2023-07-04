import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})

export class CustomTitle implements PipeTransform {
    transform(value: string, args?: any[]) {
        let prepoArr = ['of', 'in', 'the', 'but','out','for','a','an','on','by','to','at'];
        let myStrArr = value.toLowerCase().split(" ");

        myStrArr[0] = myStrArr[0].charAt(0).toUpperCase()+myStrArr[0].slice(1);
              
        for (let i = 1; i < myStrArr.length; i++) {
           if(!prepoArr.includes(myStrArr[i])){
                myStrArr[i] = myStrArr[i].charAt(0).toUpperCase() + myStrArr[i].slice(1);
            }
        //     else{
        //         if(myStrArr.indexOf(myStrArr[i]) == 0){
        //            myStrArr[i] = myStrArr[i].charAt(0).toUpperCase() + myStrArr[i].slice(1);
        //        }
        //    }
        }
        return ( myStrArr.join(' '));
    }
}
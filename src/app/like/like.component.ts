import { Component , EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : 'ea-like',
    templateUrl : './like.component.html',
    styleUrls : ['./like.component.css']
})

export class LikeComponent{
    @Input('isLike') isLike : boolean | any;
    @Input() dataFromParent : any;
    @Input() hobbiesArrFromParent : any;

    @Output('SendToParent') SendToParent = new EventEmitter();
    likeToggle(){
        this.isLike = !this.isLike;        
    }
    onSendDataClick(){
        console.log('Cliked');
        
        let datToBeSend = ['Sonali','Sagar','Waikar'];
        this.SendToParent.emit(datToBeSend);
    }
}/*manoj.patil.144+ea18@gmail.com */
import { Injectable } from "@angular/core";
import { Accordiant } from "../accordiant.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn : 'root'})

export class AccordiantFormService{
    private accordiantListArr : Accordiant [] = [
        new Accordiant('HTML 5' , 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation.'),
        new Accordiant('CSS' , 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript'),
        new Accordiant('JavaScript' , 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript,on the client side for webpage behavior'),
        new Accordiant('Angular' , 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.')
    ]

    accordiantSub = new BehaviorSubject(this.accordiantListArr.slice());

    getBlogFromForm(sectionHeading : string , sectionDetails : string){
        this.accordiantListArr.push(new Accordiant(sectionHeading , sectionDetails));
        this.accordiantSub.next(this.accordiantListArr.slice());
    }
}

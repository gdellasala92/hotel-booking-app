import { NgModule } from "@angular/core";
import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from '../shared/components/separator/separator.component';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        IntToArrayPipe,
        CardComponent,
        SeparatorComponent
    ],
    exports:[
        IntToArrayPipe,
        CardComponent,
        SeparatorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule{

}
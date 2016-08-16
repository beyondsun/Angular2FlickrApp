import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'sortBy'})
export class SortByPipe implements PipeTransform{
    transform(arrayField:any[], fieldId: string){
        return arrayField.filter(field => field[fieldId]);
    }
}
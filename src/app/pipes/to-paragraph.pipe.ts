import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toParagraph'
})
export class ToParagraphPipe implements PipeTransform {

  transform(value: any): any {
    let para = "";
    for(let i = 0; i < value.length; i++){
      para += "&nbsp;&nbsp;&nbsp;&nbsp;" + value[i] + "&#013; &#010;";
    }
    return para;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapObject',  pure: false })
export class MapObjectPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }
}

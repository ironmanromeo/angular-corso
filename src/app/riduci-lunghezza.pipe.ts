import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "riduciGrandezza"
})

export class RiduciGrandezza implements PipeTransform{

    transform(value: string, limite: number = 10): string {
        if(value.length>10)
            return value.substring(0, limite)
        return value
    }
}
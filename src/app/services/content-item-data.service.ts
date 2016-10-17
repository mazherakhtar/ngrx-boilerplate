import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs';

@Injectable()
export class ContentItemDataService {
    constructor(private http : Http){}

    getContentItem(id){
        return this.http
            .get(`http://localhost:4000/api/content-item/` + id )
            .map(response => response.json());
    }
}
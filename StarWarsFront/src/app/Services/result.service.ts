import {Injectable} from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {IResult} from '../Models/result.interface';
import { Observable } from 'rxjs';
import { IToken } from '../Models/token.interface';


@Injectable()
export class ResultService{

    constructor (private http: Http){}
    //Ler token API
    getToken(){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });     
        var bodyDes={"username":"Fulano","password":"1234","grant_type":"password"};  
        let body =  this.serializeObj(bodyDes);
        return  this.http.post("http://localhost:58287/token",body,options).map((res: Response) => <IToken>res.json());
    }
      //Retorna Lista de Personagens,Planetas e Espécies API
      getResults(auth_token): Observable<any> {
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'bearer '+auth_token
        })
        return this.http.get("http://localhost:58287/api/starwars", { headers: headers }).map(data=> <IResult[]>data.json());
      }

      //Serializar Objeto
      private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    
        return result.join("&");
    }
}
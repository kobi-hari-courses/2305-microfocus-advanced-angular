import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('I am about to send a request to the following url',  req.url);
        req = req.clone({
            headers: req.headers.append('My_Custom_Header', 'BLA BLA BLA')
        });
        return next.handle(req).pipe(
            tap(resp => console.log('We have recevied a response', resp))
        )
    }
   
}
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': '9e9ddf1747msh430502ced633b6ap1b6bd9jsn52235558d2be',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '095d9d14e3474e2e9a3346666643d4fc'
            }
        });
        return next.handle(req);
    }
}
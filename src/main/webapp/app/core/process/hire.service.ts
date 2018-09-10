import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';

@Injectable({ providedIn: 'root' })
export class HireService {
    //private resourceUrl = SERVER_API_URL + 'srv/workflow/test-hire-process';
    //private resourceUrl = SERVER_API_URL + 'biz/api/hellowf';
    private resourceUrl = SERVER_API_URL + 'biz/api/counttask';

    constructor(private http: HttpClient) {}

    test(req?: any): Observable<HttpResponse<Object>> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IBonCommande } from 'app/shared/model/biz/bon-commande.model';

type EntityResponseType = HttpResponse<IBonCommande>;
type EntityArrayResponseType = HttpResponse<IBonCommande[]>;

@Injectable({ providedIn: 'root' })
export class BonCommandeService {
    private resourceUrl = SERVER_API_URL + 'biz/api/bon-commandes';

    constructor(private http: HttpClient) {}

    create(bonCommande: IBonCommande): Observable<EntityResponseType> {
        return this.http.post<IBonCommande>(this.resourceUrl, bonCommande, { observe: 'response' });
    }

    update(bonCommande: IBonCommande): Observable<EntityResponseType> {
        return this.http.put<IBonCommande>(this.resourceUrl, bonCommande, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IBonCommande>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IBonCommande[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}

import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BonCommande } from 'app/shared/model/biz/bon-commande.model';
import { BonCommandeService } from './bon-commande.service';
import { BonCommandeComponent } from './bon-commande.component';
import { BonCommandeDetailComponent } from './bon-commande-detail.component';
import { BonCommandeUpdateComponent } from './bon-commande-update.component';
import { BonCommandeDeletePopupComponent } from './bon-commande-delete-dialog.component';
import { IBonCommande } from 'app/shared/model/biz/bon-commande.model';

@Injectable({ providedIn: 'root' })
export class BonCommandeResolve implements Resolve<IBonCommande> {
    constructor(private service: BonCommandeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((bonCommande: HttpResponse<BonCommande>) => bonCommande.body));
        }
        return of(new BonCommande());
    }
}

export const bonCommandeRoute: Routes = [
    {
        path: 'bon-commande',
        component: BonCommandeComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'BonCommandes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'bon-commande/:id/view',
        component: BonCommandeDetailComponent,
        resolve: {
            bonCommande: BonCommandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'BonCommandes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'bon-commande/new',
        component: BonCommandeUpdateComponent,
        resolve: {
            bonCommande: BonCommandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'BonCommandes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'bon-commande/:id/edit',
        component: BonCommandeUpdateComponent,
        resolve: {
            bonCommande: BonCommandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'BonCommandes'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const bonCommandePopupRoute: Routes = [
    {
        path: 'bon-commande/:id/delete',
        component: BonCommandeDeletePopupComponent,
        resolve: {
            bonCommande: BonCommandeResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'BonCommandes'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

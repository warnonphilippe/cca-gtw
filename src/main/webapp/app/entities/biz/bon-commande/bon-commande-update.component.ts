import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBonCommande } from 'app/shared/model/biz/bon-commande.model';
import { BonCommandeService } from './bon-commande.service';

@Component({
    selector: 'jhi-bon-commande-update',
    templateUrl: './bon-commande-update.component.html'
})
export class BonCommandeUpdateComponent implements OnInit {
    private _bonCommande: IBonCommande;
    isSaving: boolean;

    constructor(private bonCommandeService: BonCommandeService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ bonCommande }) => {
            this.bonCommande = bonCommande;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.bonCommande.id !== undefined) {
            this.subscribeToSaveResponse(this.bonCommandeService.update(this.bonCommande));
        } else {
            this.subscribeToSaveResponse(this.bonCommandeService.create(this.bonCommande));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IBonCommande>>) {
        result.subscribe((res: HttpResponse<IBonCommande>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get bonCommande() {
        return this._bonCommande;
    }

    set bonCommande(bonCommande: IBonCommande) {
        this._bonCommande = bonCommande;
    }
}

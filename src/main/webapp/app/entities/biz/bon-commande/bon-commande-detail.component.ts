import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBonCommande } from 'app/shared/model/biz/bon-commande.model';

@Component({
    selector: 'jhi-bon-commande-detail',
    templateUrl: './bon-commande-detail.component.html'
})
export class BonCommandeDetailComponent implements OnInit {
    bonCommande: IBonCommande;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ bonCommande }) => {
            this.bonCommande = bonCommande;
        });
    }

    previousState() {
        window.history.back();
    }
}

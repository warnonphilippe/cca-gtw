import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IBonCommande } from 'app/shared/model/biz/bon-commande.model';
import { BonCommandeService } from './bon-commande.service';

@Component({
    selector: 'jhi-bon-commande-delete-dialog',
    templateUrl: './bon-commande-delete-dialog.component.html'
})
export class BonCommandeDeleteDialogComponent {
    bonCommande: IBonCommande;

    constructor(
        private bonCommandeService: BonCommandeService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.bonCommandeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'bonCommandeListModification',
                content: 'Deleted an bonCommande'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-bon-commande-delete-popup',
    template: ''
})
export class BonCommandeDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ bonCommande }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(BonCommandeDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.bonCommande = bonCommande;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}

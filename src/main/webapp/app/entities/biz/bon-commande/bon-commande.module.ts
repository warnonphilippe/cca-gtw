import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GtwSharedModule } from 'app/shared';
import {
    BonCommandeComponent,
    BonCommandeDetailComponent,
    BonCommandeUpdateComponent,
    BonCommandeDeletePopupComponent,
    BonCommandeDeleteDialogComponent,
    bonCommandeRoute,
    bonCommandePopupRoute
} from './';

const ENTITY_STATES = [...bonCommandeRoute, ...bonCommandePopupRoute];

@NgModule({
    imports: [GtwSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BonCommandeComponent,
        BonCommandeDetailComponent,
        BonCommandeUpdateComponent,
        BonCommandeDeleteDialogComponent,
        BonCommandeDeletePopupComponent
    ],
    entryComponents: [BonCommandeComponent, BonCommandeUpdateComponent, BonCommandeDeleteDialogComponent, BonCommandeDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GtwBonCommandeModule {}

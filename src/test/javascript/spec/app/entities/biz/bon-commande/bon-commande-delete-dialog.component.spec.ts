/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { GtwTestModule } from '../../../../test.module';
import { BonCommandeDeleteDialogComponent } from 'app/entities/biz/bon-commande/bon-commande-delete-dialog.component';
import { BonCommandeService } from 'app/entities/biz/bon-commande/bon-commande.service';

describe('Component Tests', () => {
    describe('BonCommande Management Delete Component', () => {
        let comp: BonCommandeDeleteDialogComponent;
        let fixture: ComponentFixture<BonCommandeDeleteDialogComponent>;
        let service: BonCommandeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GtwTestModule],
                declarations: [BonCommandeDeleteDialogComponent]
            })
                .overrideTemplate(BonCommandeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BonCommandeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BonCommandeService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});

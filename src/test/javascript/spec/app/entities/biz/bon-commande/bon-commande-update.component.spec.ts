/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GtwTestModule } from '../../../../test.module';
import { BonCommandeUpdateComponent } from 'app/entities/biz/bon-commande/bon-commande-update.component';
import { BonCommandeService } from 'app/entities/biz/bon-commande/bon-commande.service';
import { BonCommande } from 'app/shared/model/biz/bon-commande.model';

describe('Component Tests', () => {
    describe('BonCommande Management Update Component', () => {
        let comp: BonCommandeUpdateComponent;
        let fixture: ComponentFixture<BonCommandeUpdateComponent>;
        let service: BonCommandeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GtwTestModule],
                declarations: [BonCommandeUpdateComponent]
            })
                .overrideTemplate(BonCommandeUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(BonCommandeUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BonCommandeService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new BonCommande(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.bonCommande = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new BonCommande();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.bonCommande = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});

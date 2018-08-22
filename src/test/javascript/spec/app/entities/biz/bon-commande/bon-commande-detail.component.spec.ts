/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GtwTestModule } from '../../../../test.module';
import { BonCommandeDetailComponent } from 'app/entities/biz/bon-commande/bon-commande-detail.component';
import { BonCommande } from 'app/shared/model/biz/bon-commande.model';

describe('Component Tests', () => {
    describe('BonCommande Management Detail Component', () => {
        let comp: BonCommandeDetailComponent;
        let fixture: ComponentFixture<BonCommandeDetailComponent>;
        const route = ({ data: of({ bonCommande: new BonCommande(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [GtwTestModule],
                declarations: [BonCommandeDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(BonCommandeDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BonCommandeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.bonCommande).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GtwRegionModule } from './region/region.module';
import { GtwCountryModule } from './country/country.module';
import { GtwLocationModule } from './location/location.module';
import { GtwDepartmentModule } from './department/department.module';
import { GtwTaskModule } from './task/task.module';
import { GtwEmployeeModule } from './employee/employee.module';
import { GtwJobModule } from './job/job.module';
import { GtwJobHistoryModule } from './job-history/job-history.module';
import { GtwBonCommandeModule as BizBonCommandeModule } from './biz/bon-commande/bon-commande.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        GtwRegionModule,
        GtwCountryModule,
        GtwLocationModule,
        GtwDepartmentModule,
        GtwTaskModule,
        GtwEmployeeModule,
        GtwJobModule,
        GtwJobHistoryModule,
        BizBonCommandeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GtwEntityModule {}

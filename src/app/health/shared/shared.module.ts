import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';

// compoennts
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
    imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
    declarations: [ListItemComponent],
    exports: [ListItemComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MealsService, WorkoutsService]
        }
    }
}

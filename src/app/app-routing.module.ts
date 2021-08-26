import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotteryDrawComponent } from './lottery-draw/lottery-draw.component';

const routes: Routes = [
  {
    path: '',
    component: LotteryDrawComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

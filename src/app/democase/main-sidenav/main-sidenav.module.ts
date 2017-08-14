import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MainSidenavComponent} from './main-sidenav.component';
import {TableModule} from '../../component/table/table.component';
import {CodeModule} from '../../component/code/code.component';
import {TabGroupModule} from '../../component/tab/tab.component';
import {GridModule} from '../../component/grid/grid.directive';
import {SidenavModule} from '../../component/sidenav/sidenav.component';
import {MainSidenavRoutingModule} from './main-sidenav-routing.module';
import {ButtonModule} from '../../component/button/button.directive';

@NgModule({
  imports: [
    CommonModule,
    TabGroupModule,
    CodeModule,
    TableModule,
    GridModule,
    ButtonModule,
    SidenavModule,
    MainSidenavRoutingModule
  ],
  declarations: [MainSidenavComponent]
})
export class MainSidenavModule {}

import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(  [{path: '', component: AuthComponent, canActivate: [AuthGuard]}])
  ],
  exports: [RouterModule]

})
export class AuthModule {

}

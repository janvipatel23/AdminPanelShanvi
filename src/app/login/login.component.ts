import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  return = '';
  error: any;
  email: any;
  password: any;


  constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.afAuth.authState.subscribe(auth => {
      // if (auth) {
      //   this.router.navigateByUrl(this.return);
      // }
    });
   }

   ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/homepage');
  }


  onSubmit(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.router.navigate([this.return]);
        }).catch(
          (err) => {
            this.error = err;
            alert("Incorrect email or password");
          });
    }
  }

}

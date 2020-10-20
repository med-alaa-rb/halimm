import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { LocalService } from '../local.service'


@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router , private local : LocalService) { }

  userData : any ; 

  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.compantProfil(obj).subscribe((res)=>{
      this.userData = res[0]
      console.log(this.userData)
    })
  }

  updateCompany(){
    this.router.navigateByUrl('/editCompany')
  }

  searchProfil(profilName){
    this._http.findProfil({profilName}).subscribe((res)=>{
      this.local.otherProfile = res 
      this.router.navigateByUrl('/resultSearch')
    })
  };

}

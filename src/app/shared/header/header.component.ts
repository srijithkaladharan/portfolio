import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'name-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string = "srijithkaladharan@outlook.com";
  phone: string = "+917200630012";

  imgLoading: boolean = true;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // copyEmail() {
  //   // let selBox = document.createElement('textarea');
  //   // selBox.value = this.email;
  //   // document.body.appendChild(selBox);
  //   // selBox.focus();
  //   // selBox.select();
  //   // document.execCommand('copy');
  //   // document.body.removeChild(selBox);
  //   this.toastr.success("Email Id copied to clipboard");
  // }

  // copyPhone() {
  //   // let selBox = document.createElement('textarea');
  //   // selBox.value = this.phone;
  //   // document.body.appendChild(selBox);
  //   // selBox.focus();
  //   // selBox.select();
  //   // document.execCommand('copy');
  //   // document.body.removeChild(selBox);
  //   this.toastr.success("Phone number copied to clipboard");
  // }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  copyToClipboard(msg: string) {
    this.toastr.success(msg);
  }

  imgOnLoad() {
    this.imgLoading = false;
  }

}

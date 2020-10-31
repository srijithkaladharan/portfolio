import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employers: Array<Object> = [
    {
      id: 1,
      imgPath: "assets/icons/innbuilt.png",
      name: "InnBuilt Technologies",
      location: "Chennai",
      duration: "From Nov'17 till May'18",
      website: "https://innbuilt.com",
    },
    {
      id: 2,
      imgPath: "assets/icons/techm.jpg",
      name: "Tech Mahindra",
      location: "Pune",
      duration: "From Jun'18 till Date",
      website: "https://techmahindra.com",
    }
  ];

  certifications: Array<any> = [
    { id: 1, path: "assets/images/certificates/datascience.jpg", alt: "Data science certificate" },
    { id: 2, path: "assets/images/certificates/ml.jpg", alt: "Machine Learning Certificate" },
    { id: 3, path: "assets/images/certificates/fundementals.jpg", alt: "DL fundementals certificate" },
    { id: 4, path: "assets/images/certificates/deeplearning.jpg", alt: "DL Certificate" }
  ];

  awards: Array<any> = [
    { id: 1, path: "assets/images/awards/bravo.jpg", alt: "Bravo award" },
  ];

  cardHoverStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onHover() {
    this.cardHoverStatus = !this.cardHoverStatus;
    console.log(this.cardHoverStatus);
  }

}

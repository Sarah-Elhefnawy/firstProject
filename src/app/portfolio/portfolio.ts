import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  isModalOpen = false;
  selectedImageSrc = '';

  openModal(imageSrc: string) {
    this.selectedImageSrc = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
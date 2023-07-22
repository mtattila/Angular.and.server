import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {
  nev: string = '';
  email: string = '';
  fogEredmeny: string = '';
  logList: string[] = [];

  EredmenyMentes(): void {
    this.fogEredmeny = `Név: ${this.nev}, E-mail: ${this.email}, Prímszám: ${this.isPrimszam(parseInt(this.nev))}`;
    this.logList.push(this.fogEredmeny);
  }

  isPrimszam(szam: number): boolean {
    if (szam < 2) {
      return false;
    }
    for (let i = 2; i < szam; i++) {
      if (szam % i === 0) {
        return false;
      }
    }
    return true;
  }
}

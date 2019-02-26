import {Component, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    vgasolina: number;
    valcool: number;
    conta: number;
    resultado: String;
    resultado2: String;

    constructor() {
    }

    ngOnInit() {
    }

    calcular() {
        if (this.valcool == null || this.vgasolina == null) {
            this.resultado = 'Favor, digitar os valores';
        } else {
            this.conta = this.valcool / this.vgasolina;
            if (this.conta < 0.7) {
                this.resultado2 = 'Está compensando mais:';
                this.resultado = 'Etanol';
            } else {
                this.resultado2 = 'Está compensando mais:';
                this.resultado = 'Gasolina';
            }
        }
    }
}

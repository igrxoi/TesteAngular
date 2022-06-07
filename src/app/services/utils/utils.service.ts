import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public validaCPF(cpf: string) {

    cpf = cpf.replace(/\D/g, '');

    let soma: number = 0;
    let resto: number;

    const cpfs = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
    ];

    if (cpfs.includes(cpf)) return false;

    for (let index = 1; index <= 9; index++) {
      soma += parseInt(cpf.substring(index - 1, index)) * (11 - index);
    }

    resto = (soma * 10) % 11;
    resto = (resto === 10 || resto === 11) ? 0 : resto;

    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    for (let index = 1; index <= 10; index++) {
      soma += parseInt(cpf.substring(index - 1, index)) * (12 - index);
    }

    resto = (soma * 10) % 11;
    resto = (resto === 10 || resto === 11) ? 0 : resto;
    
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;

  }

}

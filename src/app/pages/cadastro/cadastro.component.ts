import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/person';
import { UtilsService } from 'src/app/services/utils/utils.service';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public step: number = 1;

  public faCoffee: any = faCircle;
  public faUser: any = faUser;
  public faCheck: any = faCheck;
  public faCreditCard: any = faCreditCard;

  public document: string = '';
  public messageError: string = '';

  public erroDocument: boolean = false;
  public loading: boolean = false;
  public data: boolean = false;

  public person: any = [];

  public people: Array<Person> = [
    {
      name: 'Vitor Pedro Campos', 
      document: '495.510.751-61',
      applicationAccount: {
        number: '557932-4'
      },
      checkingAccount: {
        number: '77861-8'
      }
    },
    {
      name: 'Leandro Tomás Silva', 
      document: '566.589.451-60'
    },
    {
      name: 'Elaine Juliana Mendes', 
      document: '879.839.758-30',
      applicationAccount: {
        number: '967452-3'
      },
      checkingAccount: {
        number: '98743-2'
      }
    },
    {
      name: 'Vinicius Daniel Giovanni', 
      document: '912.641.604-29',
      checkingAccount: {
        number: '09843-8'
      }
    },
    {
      name: 'Benjamin Marcos Vinicius Lorenzo', 
      document: '223.878.983-97'
    },
    {
      name: 'Ayla Isabela Vera Almada', 
      document: '598.395.753-84',
      applicationAccount: {
        number: '345279-6'
      },
    },
    {
      name: 'Anthony Diogo da Paz', 
      document: '676.349.353-36'
    },
    {
      name: 'Vanessa Elisa da Cunha', 
      document: '979.465.889-84',
      applicationAccount: {
        number: '075689-5'
      },
      checkingAccount: {
        number: '24518-2'
      }
    },
    {
      name: 'Joaquim Giovanni Figueiredo', 
      document: '874.319.899-62'
    },
    {
      name: 'Ana Débora Fernandes', 
      document: '446.689.839-18',
      applicationAccount: {
        number: '089740-0'
      },
    },
  ]

  constructor(
    private utils: UtilsService
  ) { }

  ngOnInit(): void {}

  searchCPF(): void {

    this.person = []
    this.data = false;
    this.loading = true;

    setTimeout(async () => {

      this.erroDocument = false;
      this.loading = false;
  
      if (!this.utils.validaCPF(this.document)) {
        this.messageError = 'Digite um CPF válido.';
        this.erroDocument = true;
        return;
      }
  
      if (this.document === '') {
        this.messageError = 'Digite um CPF.';
        this.erroDocument = true;
        return
      }
  
      this.person = this.people.filter((item: any) => item.document === this.document)[0];
      
      if (this.person === undefined) {
        this.messageError = 'Cadastro não encontrado.';
        this.erroDocument = true;
        return
      }

      this.data = true;

    }, 2000);
    
  }

}

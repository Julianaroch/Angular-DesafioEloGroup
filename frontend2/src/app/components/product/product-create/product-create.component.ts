import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  swal = Swal;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
  createProduct(): void {
    this.swal.fire(
      'Cadastro registrado com Sucesso!',
      'Aperte no botão abaixo!',
      'success'
    )
  }
  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}

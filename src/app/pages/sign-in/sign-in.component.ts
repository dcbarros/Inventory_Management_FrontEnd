import { Component } from '@angular/core';
import { PrincipalButtonsComponent } from "../../components/principal-buttons/principal-buttons.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/password-match.validator';
import { Seller } from '../../model/Seller';
import { SellerService } from '../../service/seller.service';



@Component({
    selector: 'app-sign-in',
    standalone: true,
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.css',
    imports: [PrincipalButtonsComponent, ReactiveFormsModule]
})
export class SignInComponent {
    signInForm: FormGroup;
    submitted: boolean;

    constructor(private fb: FormBuilder, private sellerService: SellerService) {
        this.signInForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{6,8}$')]],
          confirmPassword: ['', Validators.required]
        }, { validators: passwordMatchValidator() });
    }

    onSubmit() {
        this.submitted = true;
        if (this.signInForm.valid) {
            let seller:Seller = {
                name: this.signInForm.get('name').value,
                email: this.signInForm.get('email').value,
                password: this.signInForm.get('password').value
            }
            this.sellerService.signIn(seller).subscribe(() => {
                alert('Cadastro Efetuado com sucesso');
                this.signInForm.reset();
            })
        } else {
            this.signInForm.markAllAsTouched();
        }
    }
}

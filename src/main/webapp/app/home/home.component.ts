import { Component, OnInit } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';

import { LoginService, Principal, Account } from 'app/core';
import {HireService} from 'app/core/process/hire.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;

    constructor(private principal: Principal, private loginService: LoginService, private eventManager: JhiEventManager, private hireService: HireService) {}

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.loginService.login();
    }

    test() {
        console.log('home.component::test()');
        this.hireService.test().subscribe();
    }
}

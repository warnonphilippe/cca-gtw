import { Injectable } from '@angular/core';

import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-session.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(private principal: Principal, private authServerProvider: AuthServerProvider) {}

    login() {
        let port = location.port ? ':' + location.port : '';
        if (port === ':9000') {
            port = ':8080';
        }

        //extraction du tenant à partir du dns
        let tenant = location.hostname.split('.', 1).shift()
        if (tenant === 'localhost') {
            tenant = 'jhipster'
        }

        location.href = '//' + location.hostname + port + '/login?realm=' + tenant
    }

    logout() {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
}

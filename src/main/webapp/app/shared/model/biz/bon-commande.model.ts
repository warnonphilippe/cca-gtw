export interface IBonCommande {
    id?: number;
    code?: string;
    libelle?: string;
    description?: string;
    montant?: number;
}

export class BonCommande implements IBonCommande {
    constructor(public id?: number, public code?: string, public libelle?: string, public description?: string, public montant?: number) {}
}

export abstract class MilitaryAircraft {
    public model: string;
    public speed: number;
    private masterArm = false;

    constructor(model: string, speed: number) {
        this.model = model;
        this.speed = speed;
    }

    public abstract takeoff(): string;
    public abstract attack(): string;

    public toggleMasterArm(state: boolean): void {
        this.masterArm = state;
    }

    protected isArmed(): boolean {
        return this.masterArm;
    }
}

export interface JetEngine {
    startJetEngine(): string;
}

export class FighterJet extends MilitaryAircraft implements JetEngine {
    constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from an airstrip.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} launches air-to-air missiles!` : 'Master arms off';
    }

    public startJetEngine(): string {
        return `${this.model} jet engine started.`;
    }
}

export class Bomber extends MilitaryAircraft {
    constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from a long runway.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} drops bombs on target!` : 'Master arms off';
    }
}

export class AttackAircraft extends MilitaryAircraft implements JetEngine {
    constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from a short runway.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} performs a ground-attack strike!` : 'Master arms off';
    }

    public startJetEngine(): string {
        return `${this.model} jet engine started.`;
    }
}
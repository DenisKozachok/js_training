import { Aircraft } from './interfaces';

export abstract class MilitaryAircraft implements Aircraft {
    protected model: string;
    private speed: number;
    private masterArm = false;

    protected constructor(model: string, speed: number) {
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

export class FighterJet extends MilitaryAircraft {
    public constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from an airstrip.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} launches air-to-air missiles!` : 'Master arms off';
    }
}

export class Bomber extends MilitaryAircraft {
    public constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from a long runway.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} drops bombs on target!` : 'Master arms off';
    }
}

export class AttackAircraft extends MilitaryAircraft {
    public constructor(model: string, speed: number) {
        super(model, speed);
    }

    public takeoff(): string {
        return `${this.model} takes off from a short runway.`;
    }

    public attack(): string {
        return this.isArmed() ? `${this.model} performs a ground-attack strike!` : 'Master arms off';
    }
}

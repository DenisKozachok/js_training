export interface Aircraft {
    model: string;
    speed: number;
    takeoff(): string;
    attack(): string;
    toggleMasterArm(state: boolean): void;
}

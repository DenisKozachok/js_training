import { JetEngine, MilitaryAircraft } from './models/abstractions';

export function engageAircraft(aircraft: MilitaryAircraft): void {
    console.log(`Engaging ${aircraft.model} at speed ${aircraft.speed} km/h`);
    console.log(aircraft.takeoff());
    console.log(aircraft.attack());
}

export function startJetEngine(aircraft: JetEngine): void {
    console.log(aircraft.startJetEngine());
}

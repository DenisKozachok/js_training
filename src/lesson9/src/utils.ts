import { Aircraft } from './models/interfaces';

export function engageAircraft(aircraft: Aircraft): void {
    console.log(`Engaging ${aircraft.model} at speed ${aircraft.speed} km/h`);
    console.log(aircraft.takeoff());
    console.log(aircraft.attack());
    console.log('--------------------');
}

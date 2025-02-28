import { engageAircraft } from './utils';
import { AttackAircraft, Bomber, FighterJet } from './models/abstractions';

const f16 = new FighterJet('F-16 Falcon', 2400);
const b52 = new Bomber('B-52 Stratofortress', 1000);
const a10 = new AttackAircraft('A-10 Thunderbolt II', 706);
const harrier = new AttackAircraft('AV-8B Harrier II', 1085);

f16.toggleMasterArm(true);
b52.toggleMasterArm(false);
a10.toggleMasterArm(true);
harrier.toggleMasterArm(false);

engageAircraft(f16);

engageAircraft(b52);
engageAircraft(a10);
engageAircraft(harrier);

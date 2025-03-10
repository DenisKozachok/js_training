import { expect } from 'chai';
import { AttackAircraft, Bomber, FighterJet } from '../../models/abstractions';

describe('MilitaryAircraft Tests', () => {
    let f16: FighterJet;
    let b52: Bomber;
    let a10: AttackAircraft;
    let harrier: AttackAircraft;

    beforeEach(() => {
        f16 = new FighterJet('F-16 Falcon', 2400);
        b52 = new Bomber('B-52 Stratofortress', 1000);
        a10 = new AttackAircraft('A-10 Thunderbolt II', 706);
        harrier = new AttackAircraft('AV-8B Harrier II', 1085);
    });

    it('should return correct takeoff message', () => {
        expect(f16.takeoff()).to.equal('F-16 Falcon takes off from an airstrip.');
        expect(b52.takeoff()).to.equal('B-52 Stratofortress takes off from a long runway.');
        expect(a10.takeoff()).to.equal('A-10 Thunderbolt II takes off from a short runway.');
        expect(harrier.takeoff()).to.equal('AV-8B Harrier II takes off from a short runway.');
    });

    it('should return correct attack message when master arm is ON', () => {
        f16.toggleMasterArm(true);
        b52.toggleMasterArm(true);
        a10.toggleMasterArm(true);
        harrier.toggleMasterArm(true);

        expect(f16.attack()).to.equal('F-16 Falcon launches air-to-air missiles!');
        expect(b52.attack()).to.equal('B-52 Stratofortress drops bombs on target!');
        expect(a10.attack()).to.equal('A-10 Thunderbolt II performs a ground-attack strike!');
        expect(harrier.attack()).to.equal('AV-8B Harrier II performs a ground-attack strike!');
    });
});

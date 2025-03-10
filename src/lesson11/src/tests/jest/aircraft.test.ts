import expect from 'expect';
import { AttackAircraft, FighterJet } from '../../models/abstractions';
import { engageAircraft, startJetEngine } from '../../utils';
import { jest } from '@jest/globals';

describe('Aircraft Functions Tests', () => {
    let f16: FighterJet;
    let a10: AttackAircraft;

    beforeEach(() => {
        f16 = new FighterJet('F-16 Falcon', 2400);
        a10 = new AttackAircraft('A-10 Thunderbolt II', 706);
    });

    it('should engage aircraft correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        engageAircraft(f16);
        engageAircraft(a10);
        expect(consoleSpy).toHaveBeenCalled();
        consoleSpy.mockRestore();
    });

    it('should start jet engine correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        startJetEngine(f16);
        startJetEngine(a10);
        expect(consoleSpy).toHaveBeenCalledWith('F-16 Falcon jet engine started.');
        expect(consoleSpy).toHaveBeenCalledWith('A-10 Thunderbolt II jet engine started.');
        consoleSpy.mockRestore();
    });
});

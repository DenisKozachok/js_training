import { FighterJet } from 'src/models/abstractions';
import { vi } from 'vitest';
import { engageAircraft, startJetEngine } from '../src/utils';

describe('Aircraft Functions Tests with Mocks', () => {
    let f16: FighterJet;
    let consoleSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        f16 = new FighterJet('F-16 Falcon', 2400);
        consoleSpy = vi.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should engage aircraft correctly', () => {
        engageAircraft(f16);
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('should start jet engine correctly', () => {
        startJetEngine(f16);
        expect(consoleSpy).toHaveBeenCalledWith('F-16 Falcon jet engine started.');
    });

    it('should not engage aircraft if it has no takeoff method', () => {
        const fakeAircraft = { model: 'Fake Jet', speed: 0, attack: () => 'No attack' } as any;
        expect(() => engageAircraft(fakeAircraft)).toThrow(TypeError);
    });
});

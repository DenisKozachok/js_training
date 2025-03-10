import sinon from 'ts-sinon';
import { expect } from 'chai';
import { FighterJet } from '../src/models/abstractions';

describe('MilitaryAircraft Tests with Mocks', () => {
    let f16: FighterJet;
    let attackSpy: sinon.SinonSpy;

    beforeEach(() => {
        f16 = new FighterJet('F-16 Falcon', 2400);
    });

    it('should return correct takeoff message', () => {
        expect(f16.takeoff()).to.equal('F-16 Falcon takes off from an airstrip.');
    });

    it('should call attack method when master arm is ON', () => {
        attackSpy = sinon.spy(f16, 'attack');
        f16.toggleMasterArm(true);
        f16.attack();
        expect(attackSpy.calledOnce).to.be.true;
        attackSpy.restore();
    });

    it('should return Master arms off when master arm is OFF', () => {
        expect(f16.attack()).to.equal('Master arms off');
    });
});

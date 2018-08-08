// @flow
import { normal, inverted } from '../fixtures/HealthEngine.fixture.js';
import testFixture from '../../../../config/testFixture';

testFixture(normal, 'HealthEngine');
testFixture(inverted, 'HealthEngine-inverted');

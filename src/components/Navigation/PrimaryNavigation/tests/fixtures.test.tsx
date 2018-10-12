import fixtures from '../fixtures/fixtures';
import testFixture from '../../../../../config/testFixture';

fixtures.forEach(it => testFixture(it));

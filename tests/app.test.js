const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../lib/app');

describe('/coder', () => {
    const request = chai.request(app);

    const meryl = { name: 'merylturner', since: 'January 2017' };

    it('returns github object', done => {
        request.get('/coder')
            .then(res => {
                const saved = res.body;
                assert.equal(saved.name, meryl.name);
                done();
            });
    });
});
const Request = require('request');

describe('port', () => {
  let port;
  beforeAll(() => {
    port = require('../getAll');
  });

  describe('GET /api/v1/questions', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:3000/api/v1/questions', (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });

    it('status 200', () => {
      expect(data.status).toBe(200);
    });
  });
});


describe('port', () => {
  let port;
  beforeAll(() => {
    port = require('../getaQuestion');
  });

  describe('GET /api/v1/questions/:id', () => {
    const data = {};
    beforeAll((done) => {
      Request.get('http://localhost:3000/api/v1/questions/:id', (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data.status).toBe(200);
    });
  });
});


describe('port', () => {
  let port;
  beforeAll(() => {
    port = require('../postQuestion');
  });

  describe('POST /api/v1/questions', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:3000/api/v1/questions', (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data.status).toBe(200);
    });
  });
});


describe('port', () => {
  let port;
  beforeAll(() => {
    port = require('../postAnswers');
  });

  describe('POST /api/v1/questions/:id/answers', () => {
    const data = {};
    beforeAll((done) => {
      Request.post('http://localhost:3000/api/v1/questions/:id/answers', (error, res, body) => {
        data.status = res.statusCode;
        data.body = body;
        done();
      });
    });
    it('status 200', () => {
      expect(data.status).toBe(200);
    });
  });

});

const collections = require('../../../../constants/collections');
const responses = require('../../../../helpers/response');
const db = require('../../../../helpers/database');

function getAll(req, res) {
  db.ref(collections.books).once(
    'value',
    (snapshot) => responses.httpResponse.ok(res, 'OK', {
      data: snapshot.val(),
    }),
  );
}

module.exports = {
  getAll,
};

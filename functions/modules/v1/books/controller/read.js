const db = require('../../../../helpers/database');
const responses = require('../../../../helpers/response');
const collections = require('../../../../constants/collections');

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

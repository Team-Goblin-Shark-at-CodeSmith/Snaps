const { Pool } = require('pg');

const PG_URI = 'postgres://mscswnri:YzIt-XmxlhXh16W8hjj9ON2vLlpydBWF@castor.db.elephantsql.com/mscswnri';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
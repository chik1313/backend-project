const Pool = require('pg').Pool
const pool = new Pool({
  /*  user: "chik1313",
    password: "UlvDHp29CTLA",
    host: "localhost",
    port: "5432",
    database: "test_db"*/
    connectionString: 'postgres://chik1313:UlvDHp29CTLA@ep-white-snowflake-820248.us-east-2.aws.neon.tech/neondb',
    ssl : true
})

module.exports = pool
//postgres://chik1313:UlvDHp29CTLA@ep-white-snowflake-820248.us-east-2.aws.neon.tech/neondb

const path = require('path')
const client = require('../database')

//script to upload all the data from the csv files for postgresql
async function createTables() {
    try {
      // drop questions table if exists
      await client.query(`DROP TABLE IF EXISTS questions, answers, answers_photos CASCADE`);
      
      // create questions table
      await client.query(`CREATE TABLE IF NOT EXISTS questions (
          question_id SERIAL NOT NULL PRIMARY KEY,
          product_id INT NOT NULL,
          question_body TEXT NOT NULL,
          question_date VARCHAR(255) NOT NULL,
          asker_name VARCHAR(255) NOT NULL,
          asker_email VARCHAR(255) NOT NULL,
          reported INT,
          question_helpfulness INT
        );
      `);

      // create answers table
      await client.query(`CREATE TABLE IF NOT EXISTS answers (
          id SERIAL NOT NULL PRIMARY KEY,
          question_id INT REFERENCES questions(question_id),
          answer_body TEXT NOT NULL,
          answer_date VARCHAR(255) NOT NULL,
          answerer_name VARCHAR(255) NOT NULL,
          answerer_email VARCHAR(255) NOT NULL,
          reported INT,
          answer_helpfulness INT
        );
      `);

      // create answers_photos table
      await client.query(`CREATE TABLE IF NOT EXISTS answers_photos (
          id SERIAL NOT NULL PRIMARY KEY,
          answer_id INT REFERENCES answers(id),
          url VARCHAR(255) NOT NULL
        );
      `);
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }
  
  async function insertData() {
    try {
      // insert questions data
      await client.query(`
        COPY questions (question_id, product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)
        FROM '${path.join(__dirname, '../../../sdc-data/questions.csv')}' 
        DELIMITER ',' 
        CSV HEADER;
      `);
  
      // insert answers data
      await client.query(`
        COPY answers (id, question_id, answer_body, answer_date, answerer_name, answerer_email, reported, answer_helpfulness)
        FROM '${path.join(__dirname, '../../../sdc-data/answers.csv')}' 
        DELIMITER ',' 
        CSV HEADER;
      `);
  
      // insert answers_photos data
      await client.query(`
        COPY answers_photos (id, answer_id, url)
        FROM '${path.join(__dirname, '../../../sdc-data/answers_photos.csv')}' 
        DELIMITER ',' 
        CSV HEADER;
      `);
      
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }
  
  async function createQnAEtl() {
    await createTables();
    await insertData();
  }
  
  var start = new Date()

  client.connect()
    .then(() => {
      createQnAEtl()
        .then(() => {
          console.log('Q&A ETL process completed successfully.');
          client.end();
          var end = new Date()
          console.log('START: ', start)
          console.log('END: ', end)
          console.log('DIFFERENCE: ', end-start)
        })
        .catch((error) => {
          console.error('Q&A ETL process failed:', error);
          client.end();
        });
    })
    .catch((error) => {
      console.error('Error connecting to PostgreSQL:', error);
      client.end();
    });

module.exports = createQnAEtl
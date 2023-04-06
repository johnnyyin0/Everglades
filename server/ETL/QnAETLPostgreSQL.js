const path = require('path')
const client = require('../database')

//script to upload all the data from the csv files for postgresql
async function createTables() {
    try {
      // drop questions table if exists
      await client.query(`DROP TABLE IF EXISTS questions`);
  
      // create questions table
      await client.query(`CREATE TABLE IF NOT EXISTS questions (
          id SERIAL PRIMARY KEY,
          product_id INT NOT NULL,
          body TEXT NOT NULL,
          date_written VARCHAR(255) NOT NULL,
          asker_name VARCHAR(255) NOT NULL,
          asker_email VARCHAR(255) NOT NULL,
          reported INT,
          helpful INT
        );
      `);
  
      // drop answers table if exists
      await client.query(`DROP TABLE IF EXISTS answers`);

      // create answers table
      await client.query(`CREATE TABLE IF NOT EXISTS answers (
          id SERIAL PRIMARY KEY,
          question_id INT REFERENCES questions(id),
          body TEXT NOT NULL,
          date_written VARCHAR(255) NOT NULL,
          answerer_name VARCHAR(255) NOT NULL,
          answerer_email VARCHAR(255) NOT NULL,
          reported INT,
          helpful INT
        );
      `);

      // drop answers_photos table if exists
      await client.query(`DROP TABLE IF EXISTS answers_photos`);
      
      // create answers_photos table
      await client.query(`CREATE TABLE IF NOT EXISTS answers_photos (
          id SERIAL PRIMARY KEY,
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
        COPY questions (id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
        FROM '${path.join(__dirname, '../../../sdc-data/questions.csv')}' 
        DELIMITER ',' 
        CSV HEADER;
      `);
  
      // insert answers data
      await client.query(`
        COPY answers (id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
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
  
  client.connect()
    .then(() => {
      createQnAEtl()
        .then(() => {
          console.log('Q&A ETL process completed successfully.');
          client.end();
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
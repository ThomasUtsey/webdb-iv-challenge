
exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('dish').insert([
          {name:'Pizza'},
          {name:'calzone'},
          {name:'Breadsticks'},
      ]);
    }

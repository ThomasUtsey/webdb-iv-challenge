
exports.seed = function(knex, Promise) {

      return knex('recipes').insert([
        {name:'Pepperoni pizza'},
        {name:'Supreme pizza'},
        {name:'Hawai pizza'},
        {name:'Supreme calzone'},
        {name:'cheese calzone'},
        {name:'pepperoni calzone'},
        {name:'Garlic breadsticks'}
      ]);
  
};

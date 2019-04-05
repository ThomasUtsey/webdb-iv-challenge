
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
 
      // Inserts seed entries
      return knex('ingredient').insert([
        {name:'tomato sauce'},
        {name:'cheese'},
        {name:'pepperoni'},
        {name:'pineapple'},
        {name:'bread'},
        {name:'garlic'},
        {name:'veggies'},
        {name:'misc.'},
      ]);
};

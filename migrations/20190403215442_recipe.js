
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (tbl)=>{
    tbl.increments();//primary key command defaults as ID

    tbl.string('name',128)
       .notNullable()
       .unique();

    
  })
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExist('recipes');
};


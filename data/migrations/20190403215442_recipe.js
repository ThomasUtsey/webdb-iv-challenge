
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (tbl)=>{
    tbl.increments();//primary key command defaults as ID

    tbl.string('name',128)
       .notNullable()
       .unique();
       tbl.integer('dish_id').references('id').inTable('dish');
       tbl.integer('ingredient_id').references('id').inTable('ingredient');
  })
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExist('recipes');
};


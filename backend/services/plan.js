const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM plan LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(plan){
  console.log(plan)
    const result = await db.query(
      `INSERT INTO plan 
      (Precio, Descripcion, Nombre) 
      VALUES 
      (${plan.Precio}, ${plan.Descripcion}, ${plan.Nombre})`
    );
  
    let message = 'Error in creating plan';
  
    if (result.affectedRows) {
      message = 'plan created successfully';
    }
  
    return {message};
  }

async function update(id, plan){
    const result = await db.query(
        `UPDATE programming_languages 
        SET Nombre=${plan.Nombre}, Precio="${plan.Precio}", Descripcion=${plan.Descripcion} 
        WHERE id=${id}` 
    );
  
    let message = 'Error in updating plan';
  
    if (result.affectedRows) {
      message = 'plan updated successfully';
    }
  
    return {message};
}

async function remove(id){
    const result = await db.query(
      `DELETE FROM plan WHERE id=${id}`
    );
  
    let message = 'Error in deleting Plan';
  
    if (result.affectedRows) {
      message = 'Plan deleted successfully';
    }
  
    return {message};
  }

module.exports = {
    getMultiple,
    create,
    update,
    remove
  };
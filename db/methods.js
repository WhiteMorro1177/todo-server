// wrapper for Sequelize.Model methods

const selectAll = (model) => {
    // write realization

}

const selectById = (model, id) => {
    id = Number(id);
    return selectAll(model).filter(record => record.id === id);
}

const create = (model, entity) => { // write realization
}


const updateById = (model, id, newEntityData) => { // write realization
    id = Number(id);
}

const deleteById = (model, id) => { // write realization
    id = Number(id);
}

module.exports = {
    selectAll,
    selectById,
    create,
    updateById,
    deleteById
}
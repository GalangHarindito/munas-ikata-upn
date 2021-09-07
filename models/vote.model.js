module.exports = (connection, DataTypes) => {
    const vote = connection.define("vote", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        dpt_id: {
            type: DataTypes.UUID
        },
        candidate_id: {
            type: DataTypes.UUID
        }
    });
  
    return vote;
};
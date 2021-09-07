module.exports = (connection, DataTypes) => {
    const candidate = connection.define("candidate", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nama: {
            type: DataTypes.STRING
        },
        angkatan: {
            type: DataTypes.INTEGER
        },
        nomor: {
            type: DataTypes.INTEGER
        }
    });
  
    return candidate;
};
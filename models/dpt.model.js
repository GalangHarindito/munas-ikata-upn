module.exports = (connection, DataTypes) => {
    const dpt = connection.define("dpt", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        nik: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nomor_telp: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        angkatan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM(['male', 'female']),
            allowNull: false
        },
        pin: {
            type: DataTypes.STRING
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        voted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        paranoid: true
    });
  
    return dpt;
};
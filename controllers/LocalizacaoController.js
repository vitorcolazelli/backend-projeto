const connection = require('../connection');
const CepCoords = require("coordenadas-do-cep");

module.exports = {
    async Inserir(req, res, next) {
        const { nome, cep, tipo, descricao, favorito } = req.body;

        const info = await CepCoords.getByCep(cep);
        let endereco = info.logradouro;
        let latitude = info.lat;
        let longitude = info.lon;

        let sql = `INSERT INTO locais(idLocais, nome, cep, endereco, latitude, longitude, tipo, descricao, favorito) 
        VALUES(null, '${nome}', '${cep}', '${endereco}', ${latitude}, ${longitude}, '${tipo}', '${descricao}', ${favorito})`;
        
        await connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            }

            const local = {
                id: result.insertId,
                nome: nome,
                cep: cep,
                endereco: endereco,
                latitude: latitude,
                longitude: longitude,
                tipo: tipo,
                descricao: descricao,
                favorito: favorito
            }

            return res.status(201).json(local);
        });
    },

    
}
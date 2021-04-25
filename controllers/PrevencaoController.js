const connection = require('../connection');
const CepCoords = require("coordenadas-do-cep");

module.exports = {
    async Selecionar(req, res, next) {
        const { tipo } = req.query;
        let sql = `SELECT * FROM prevencao`;
        if(tipo != null){
            sql += ` WHERE tipo = '${tipo}'`;
        }

        await connection.query(sql, (err, rows) => {
            if (err) {
                throw err;
            }

            return res.json(rows);
        });
    },

    async Inserir(req, res, next) {
        const { tipo, texto, idUsuario } = req.body;
        let sql = `INSERT INTO prevencao(idPrevencao, tipo, texto, idUsuario) VALUES(null, '${tipo}', '${texto}', ${idUsuario})`;
        
        await connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            }

            const prevencao = {
                id: result.insertId,
                tipo: tipo,
                texto: texto,
                idUsuario: idUsuario
            }

            return res.status(201).json(prevencao);
        });
    },

    async Update(req, res, next) {
        const id = req.params.id;
        const { tipo, texto } = req.body;

        let sql = `UPDATE prevencao SET tipo = '${tipo}', texto = '${texto}' WHERE idPrevencao = ${id}`;
        
        await connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            }

            const prevencao = {
                id: id,
                tipo: tipo,
                texto: texto
            }

            return res.status(200).json(prevencao);
        });
    },

    async Delete(req, res, next) {
        const id = req.params.id;
        let sql = `DELETE FROM prevencao WHERE idPrevencao = ${id}`;
        
        await connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            }

            return res.status(200).end();
        });
    },

    async SelecionarPreven(req, res, next) {
        const id = req.params.id;
        let sql = `SELECT * FROM prevencao WHERE idPrevencao = ${id}`;

        await connection.query(sql, (err, rows) => {
            if (err) {
                throw err;
            }

            return res.json(rows);
        });
    }
}
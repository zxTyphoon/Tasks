const cds = require('@sap/cds');

module.exports = async function (srv) {
    srv.before('SAVE', 'Employees', async (req) => {
        const { mandatoryField } = req.data;

        if (!mandatoryField || mandatoryField.trim() === '') {
            req.error(400, 'The mandatory field cannot be empty.');
        }
    });
};

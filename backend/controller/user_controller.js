const models = require('../models');

module.exports = class User {
    async allUsers(req,res){
        try{
			const data = await models.user_.findAll({
				order: [
					['id', 'ASC']
				]
			});
			const result = {
				status: 'ok',
				data: data
			}

			res.json(result)
		}catch (error){
			console.log(error)
		}
    }
}
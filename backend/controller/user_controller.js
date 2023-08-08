const models = require('../models');

module.exports = class User {
    async findUser(req,res){
        try{
			const id = parseInt(Object.values(req.params));
			const data = await models.user_.findOne({where:{id: id}});
			const result = {
				status: 'ok',
				data: data
			}
			res.json(result)
		}catch (error){
			console.log(error)
		}
    }

	async
}
module.exports = class User {
    async homePage(req, res){
        try{
			res.send("main menu");
				
		}catch (error){
			console.log(error)
		}
    }

	async loginPage(req, res){
        try{
			res.send("login page");
				
		}catch (error){
			console.log(error)
		}
    }

	async registerPage(req, res){
        try{
			res.send("register page");
				
		}catch (error){
			console.log(error)
		}
    }

	async gamePage1(req, res){
        try{
			res.send("game 1 page");
				
		}catch (error){
			console.log(error)
		}
    }

	
}
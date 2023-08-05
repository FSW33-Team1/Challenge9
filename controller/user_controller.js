module.exports = class User {
	//home page: user data display, game list, dan logout button
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

	//game page, menampilkan game dengan id 1
	async gamePage1(req, res){
        try{
			res.send("game 1 page");
				
		}catch (error){
			console.log(error)
		}
    }

	
}
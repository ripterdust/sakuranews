const News =  require('../model/model.js');
const Comment =  require('../model/comments.Model.js');
const Category = require('../model/categories.model.js');
const controller = {
	mainPage: async (req, res) => {
		console.log('Get main page');
		const news = await News.find().sort({_id: -1});
		const categories = await Category.find().sort({ _id:-1 })
		res.render('index', {
			title: 'Inicio - Sakura',
			news,
			categories
		});
	},
	listPage: async(req, res) => {
		console.log('Get news List');
		const news = await News.find().sort({_id: -1});
		const categories = await Category.find();
		res.render('list', {
			title: 'Noticias - Sakura',
			news,
			categories
		});
	},
	userPage: (req, res) => {
		console.log('User Page');
		res.redirect('/')
	},
	writePage: (req, res) => {
		res.render('write', {
			title: 'Nueva noticia'
		});
	},
	createNew: async(req, res) => {
		const news = new News(req.body);
		await news.save();
		res.redirect('/')
	}, 
	getSingleNew: async (req, res) => {
		const news = await News.findById(req.params.id);
		const categories = await Category.find();
		const comments = await Comment.find();
		res.render('new', {
			news,
			categories,
			title: news.title,
			comments
		});
	},
	getSingleCategory: async (req, res) => {
		const news = await News.find({category: req.params.category});
		console.log(news);
		res.render('category', {
			title: req.params.category,
			news
		});
	}, 
	search: async (req, res) => {
		const news = await News.find({name: req.params.category});
		
	}
}


module.exports = controller;
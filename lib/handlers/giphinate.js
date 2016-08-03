'use strict'

const schemas = require('../schemas')({
    DATABASE_URL: process.env.DATABASE_URL
})

const sequelize = require('sequelize');
const _dbs = require('../schemas/index');
const request = require('request');

/**
 * @params req.params.queryText {String} Text to query giphy for
 */
module.exports = {
	getRequest: getRequest,
	deleteRequest: deleteRequest
} 

function getRequest(req, res) {
    // call to the giphy API using the `req.params.queryText` string
    let options = {
     url: 'http://api.giphy.com/v1/gifs/search?q=' + req.params.queryText + '&api_key=dc6zaTOxFJmzC'

   } 
    request(options, function (error,resp, body) {
    	if (!error && resp.statusCode == 200) {
  
    		let giphs = JSON.parse(body).data.map(function (giph) {
    			return {
			        query: req.params.queryText,
			        url: giph.url,
			        createdAt: Date.now()
			    }
    		})

    		_dbs()['Giphys'].findOrCreate({where: {
			query: req.params.queryText
		}, defaults: giphs[0]}).then(function (giph) {
    			res.send(giph);
    		});
    		
    		
    	} else {
    		res.sendStatus(403);
    	}
    })
   
    // return the the gif URL, cache it for the next time the same query is used
    // return Promise.resolve({})
}

function deleteRequest (req, res) {
	_dbs()['Giphys'].find({	where: {
			query: req.params.queryText
		}
	}).then(function (giph) {
			if (giph) {
				_dbs()['Giphys'].destroy({ where: {
			giphId: giph.giphId
			}
		}).then(function() {
						res.sendStatus(200)
			})
		} else {
			res.sendStatus(404)
		}
		
		})

}
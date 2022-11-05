'use strict';

(function ($, lunr, database) {
	var resultsContainer = $('#search-results')
	var navigationContainer = $('#instructions')
	var nothingFound = $('<li>Nothing found.</li>')
	var searchQuery = $('#search-input')
	database = database || {}

	function createSearchStore(data) {
		var searchStore = lunr(function () {
			var self = this

			self.pipeline.remove(lunr.stemmer);
			self.searchPipeline.remove(lunr.stemmer);

			let leftAnchoredSearch = function (token) {
				token.update(function () { return token.toString() + '*' });
				return token;
			};
			lunr.Pipeline.registerFunction(leftAnchoredSearch, 'las');
			self.searchPipeline.add(leftAnchoredSearch);

			self.field('id');
			self.field('vendor');
			self.field('model', { boost: 20 });
			self.field('title');
			self.field('zigbeemodel');

			Object.keys(data).forEach(function (key) {
				self.add({
					id: key,
					title: data[key].title,
					model: data[key].model,
					vendor: data[key].vendor,
					zigbeemodel: data[key].zigbeemodel,
				});
			})

		});

		return searchStore
	}

	function resultEntry(result) {
		var searchEntry = $('<li />')
		var searchLink = $('<a />')

		var categoryPath = result.url.split('/')
		categoryPath.shift()
		categoryPath.pop()

		searchEntry
			.append(searchLink)

		searchLink.attr('href', result.href)

		searchLink.text(result.vendor).append(" ").append(result.title).append(" ").append(result.model).append("&emsp;&emsp;ZigbeeID: ").append(result.zigbeemodel)

		return searchEntry
	}

	function displayResults(results) {
		resultsContainer.empty()

		if (results.length > 0) {
			results.map(function(entry) {
				resultsContainer.append(resultEntry(entry))
			})
		} else {
			resultsContainer.append(nothingFound)
		}

		navigationContainer.hide()
		resultsContainer.show()
	}

	function hideResults() {
		resultsContainer.hide()
		navigationContainer.show()
	}

	function searchStore(store, data) {
		return function (term) {
			var results = store.search(term)

			return results.map(function (result) {
				return data[result.ref]
			})
		}
	}

	function queryChange(display, hide, search) {
		return function (event) {
			var value = event.srcElement.value

			if (value.length === 0) {
				hide()
			}

			if (value.length > 2) {
				display(search(value))
			}
		}
	}

	function keyboardControls(hide) {
		return function (event) {
			switch (event.keyCode) {
				case 27:
					hide()
				break
			}
		}
	}

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&')

		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=')

			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20'))
			}
		}
	}

	var search = searchStore(createSearchStore(database), database)
	var searchTerm = getQueryVariable('query')

	if (searchTerm) {
		displayResults(search(searchTerm))
		searchQuery.attr('value', searchTerm)
	}

	searchQuery.on('input', queryChange(displayResults, hideResults, search))
	$(document).on('keyup', keyboardControls(hideResults))

})(Zepto, lunr, window.database)

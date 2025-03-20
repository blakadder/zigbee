'use strict';

(function ($, lunr, database) {
	var resultsContainer = $('#search-results')
	var instructionsContainer = $('#instructions')
	var nothingFound = $('#nothing-found')
	var searchQuery = $('#search-input')
	database = database || {}

	/**
	 * @param {GlobalDatabase} data
	 */
	function createSearchStore(data) {
		var searchStore = lunr(function () {
			var lunrBuilder = this

			lunrBuilder.pipeline.remove(lunr.stemmer);
			lunrBuilder.searchPipeline.remove(lunr.stemmer);

			let leftAnchoredSearch = function (token) {
				token.update(function () { return token.toString() + '*' });
				return token;
			};

			lunr.Pipeline.registerFunction(leftAnchoredSearch, 'las');
			lunrBuilder.searchPipeline.add(leftAnchoredSearch);

			lunrBuilder.field('id');
			lunrBuilder.field('vendor');
			lunrBuilder.field('model', { boost: 20 });
			lunrBuilder.field('title');
			lunrBuilder.field('zigbeemodel');

			Object.entries(data).forEach(function ([key, entry]) {
				var zigbeeModel = entry.zigbeemodel || '';
				zigbeeModel = Array.isArray(zigbeeModel) ? zigbeeModel.join(' ') : String(zigbeeModel);

				lunrBuilder.add({
					id: key,
					title: entry.title,
					model: entry.model,
					vendor: entry.vendor,
					zigbeemodel: zigbeeModel,
				});
			})

		});

		return searchStore
	}


	/**
	 * @param {DatabaseEntry} result
	 */
	function resultEntry(result) {
		var imgSrc = `/assets/images/devices${result.href.replace('.html', '')}.webp`;
		var compatible = Array.isArray(result.compatible) ? result.compatible : [];

		var searchEntry = $(`
			<tr>
				<td class="td-first" rowspan="4">
					<img src="${imgSrc}" height="75" alt="${result.vendor} ${result.model}" loading="lazy" />
				</td>
			</tr>
			<tr>
				<td class="td-second">
					<b>
						<a class="menu" href="${result.href}">
							${result.vendor} ${result.title}
						</a>
					</b>
				</td>
			</tr>
			<tr>
				<td class="model">
					${result.model.length >= 18 ? result.model.substring(0, 15) + '...' : result.model}
				</td>
			</tr>
			<tr>
				<td class="td-compat">
					${compatible.includes('zha') ? '<img alt="zha" title="Zigbee Home Automation for Home Assistant" src="/assets/images/zha-icon.png" />' : ''}
					${compatible.includes('tasmota') || result.category == 'light' || result.category == 'dimmer' ? '<img alt="Tasmota" title="Tasmota" src="/assets/images/tasmota-icon.png" />' : ''}
					${compatible.includes('z2m') ? '<img alt="Zigbee2MQTT" title="Zigbee2MQTT" src="/assets/images/z2m-icon.png" />' : ''}
					${compatible.includes('deconz') ? '<img alt="deCONZ" title="deCONZ" src="/assets/images/deconz-icon.png" />' : ''}
					${compatible.includes('z4d') ? '<img alt="Zigbee for Domoticz" title="Zigbee for Domoticz" src="/assets/images/z4d-icon.png" />' : ''}
					${compatible.includes('iob') || compatible.includes('z2m') ? '<img alt="ioBroker.zigbee" title="ioBroker.zigbee" src="/assets/images/iobroker-icon.png" />' : ''}
				</td>
			</tr>
		`);

		return searchEntry
	}

	/**
	 * @param {DatabaseEntry[]} results
	 */
	function displayResults(results) {
		resultsContainer.empty()
		instructionsContainer.hide()

		if (!results.length) {
			nothingFound.show();
			return;
		}

		var fragment = $(document.createDocumentFragment());
		results.map(function (entry) {
			fragment.append(resultEntry(entry))
		})

		resultsContainer.append(fragment);
		resultsContainer.show()
	}

	function hideResults() {
		resultsContainer.hide()
		nothingFound.hide();
		instructionsContainer.show()
	}

	/**
	 * @param {lunr.Index} store
	 * @param {GlobalDatabase} data
	 */
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

	var EscKeyCode = 27;
	function keyboardControls(hide) {
		return function (event) {
			switch (event.keyCode) {
				case EscKeyCode:
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

	var throttleId = null;
	var throttleDelay = 200; // MS

	searchQuery.on('input', queryChange(function () {
		clearTimeout(throttleId);

		throttleId = setTimeout(function () {
			displayResults(search(searchQuery.val()))
		}, throttleDelay);
	}, hideResults, search))
	$(document).on('keyup', keyboardControls(hideResults))

})($, lunr, window.database)

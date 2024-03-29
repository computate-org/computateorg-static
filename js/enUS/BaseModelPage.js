
async function websocketBaseModel(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketBaseModel', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#BaseModelForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa- ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fa fa- w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify  in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3- ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});
	}
}
async function websocketBaseModelInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchBaseModelVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputBaseModel' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputBaseModel' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputBaseModel' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputBaseModel' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputBaseModel' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputBaseModel' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Deleted'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputBaseModel' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputBaseModel' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputBaseModel' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputBaseModel' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputBaseModel' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputBaseModel' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputBaseModel' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputBaseModel' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputBaseModel' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputBaseModel' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputBaseModel' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputBaseModel' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputBaseModel' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputBaseModel' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varBaseModel' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputBaseModel' + pk + 'Id'));
			}
		});
	}
}

function pageGraph(apiRequest) {
	var r = $('.pageForm .pageResponse').val();
	if(r) {
	var json = JSON.parse(r);
		if(json['facetCounts']) {
			var facetCounts = json.facetCounts;
			if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
				var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
				var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
				var rangeName;
				var rangeVar;
				var rangeVarFq;
				var rangeCounts;
				var rangeVals;
				if(range) {
					rangeName = range.name;
					rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
					rangeVarFq = window.varsFq[rangeVar];
					rangeCounts = range.counts;
					rangeVals = Object.keys(rangeCounts).map(key => key);
				}
				var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
				var pivot1VarIndexed = pivot1Name;
				if(pivot1VarIndexed.includes(','))
					pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
				var pivot1VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot1VarIndexed);
				var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
				var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
				var pivot1Vals = Object.keys(pivot1Map);
				var data = [];
				var layout = {};
				if(pivot1VarObj.classSimpleName === 'Point') {
					layout['showlegend'] = true;
					layout['dragmode'] = 'zoom';
					layout['uirevision'] = 'true';
					if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
						layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] }, zoom: window['DEFAULT_MAP_ZOOM'] };
					else if(window['DEFAULT_MAP_ZOOM'])
						layout['mapbox'] = { style: 'open-street-map', zoom: window['DEFAULT_MAP_ZOOM'] };
					else if(window['DEFAULT_MAP_LOCATION'])
						layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] } };
					else
						layout['mapbox'] = { style: 'open-street-map' };
					layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
					var trace = {};
					trace['showlegend'] = true;
					trace['type'] = 'scattermapbox';
					var colors = [];
					var lat = [];
					var lon = [];
					var text = [];
					var customdata = [];
					trace['lat'] = lat;
					trace['lon'] = lon;
					trace['text'] = text;
					trace['customdata'] = customdata;
					json.response.docs.forEach((record) => {
						var location = record.fields[pivot1VarIndexed];
						if(location) {
							var locationParts = location.split(',');
							text.push('pivot1Val');
							lat.push(parseFloat(locationParts[0]));
							lon.push(parseFloat(locationParts[1]));
							colors.push('fuchsia');
							var vals = {};
							var hovertemplate = '';
							Object.entries(window.varsFq).forEach(([key, data]) => {
								if(data.displayName) {
									vals[data.var] = record.fields[data.varStored];
									hovertemplate += '<b>' + data.displayName + ': %{customdata.' + data.var + '}</b><br>';
								}
								customdata.push(vals);
							});
							customdata.push(vals);
							trace['hovertemplate'] = hovertemplate;
						}
					});
					trace['marker'] = { color: colors, size: 10 };
					data.push(trace);
				} else if(range) {
					layout['title'] = 'BaseModel';
					layout['xaxis'] = {
						title: rangeVarFq.displayName
					}
					if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
						var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
						var pivot2VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot2VarIndexed);
						var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
						layout['yaxis'] = {
							title: pivot2VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'lines+markers';
							trace['name'] = pivot1Val;
							trace['x'] = Object.keys(pivot1Counts).map(key => key);
							if(pivot2Map) {
								var xs = [];
								var ys = [];
								var pivot2Vals = Object.keys(pivot2Map);
								pivot2Vals.forEach((pivot2Val) => {
									var pivot2 = pivot2Map[pivot2Val];
									var pivot2Counts = pivot2.ranges[rangeName].counts;
									Object.entries(pivot2Counts).forEach(([key, count]) => {
										xs.push(key);
										ys.push(parseFloat(pivot2Val));
									});
								});
								trace['y'] = ys;
								trace['x'] = xs;
							} else {
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
								trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							}
							data.push(trace);
						});
					} else {
						layout['yaxis'] = {
							title: pivot1VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'lines+markers';
							trace['name'] = pivot1Val;
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
								trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							data.push(trace);
						});
					}
				}
				Plotly.react('htmBodyGraphPageLayout', data, layout);
			}
		}
	}
}

function animateStats() {
	let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
	let xStep = parseFloat($('#animateStatsStep').val());
	let xMin = parseFloat($('#animateStatsMin').val());
	let xMax = parseFloat($('#animateStatsMax').val());
	let x = xMin;

	let animateInterval = window.setInterval(() => {
	x = x + xStep;
	if (x > xMax || x < 0) {
		clearInterval(animateInterval);
	}
	$('#fqBaseModel_time').val(x);
	$('#fqBaseModel_time').change();
	searchPage();
	}, speedRate);
}

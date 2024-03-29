
// Search //

async function searchSiteHtm($formFilters, success, error) {
	var filters = searchSiteHtmFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteHtmVals(filters, success, error);
}

function searchSiteHtmFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterUri = $formFilters.find('.valueUri').val();
		if(filterUri != null && filterUri !== '')
			filters.push({ name: 'fq', value: 'uri:' + filterUri });

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterSequenceNum = $formFilters.find('.valueSequenceNum').val();
		if(filterSequenceNum != null && filterSequenceNum !== '')
			filters.push({ name: 'fq', value: 'sequenceNum:' + filterSequenceNum });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterHtmGroup = $formFilters.find('.valueHtmGroup').val();
		if(filterHtmGroup != null && filterHtmGroup !== '')
			filters.push({ name: 'fq', value: 'htmGroup:' + filterHtmGroup });

		var filterLabels = $formFilters.find('.valueLabels').val();
		if(filterLabels != null && filterLabels !== '')
			filters.push({ name: 'fq', value: 'labels:' + filterLabels });

		var filterEBefore = $formFilters.find('.valueEBefore').val();
		if(filterEBefore != null && filterEBefore !== '')
			filters.push({ name: 'fq', value: 'eBefore:' + filterEBefore });

		var filterEAfter = $formFilters.find('.valueEAfter').val();
		if(filterEAfter != null && filterEAfter !== '')
			filters.push({ name: 'fq', value: 'eAfter:' + filterEAfter });

		var filterA = $formFilters.find('.valueA').val();
		if(filterA != null && filterA !== '')
			filters.push({ name: 'fq', value: 'a:' + filterA });

		var filterText = $formFilters.find('.valueText').val();
		if(filterText != null && filterText !== '')
			filters.push({ name: 'fq', value: 'text:' + filterText });

		var filterComment = $formFilters.find('.valueComment').val();
		if(filterComment != null && filterComment !== '')
			filters.push({ name: 'fq', value: 'comment:' + filterComment });

		var filterTabs = $formFilters.find('.valueTabs').val();
		if(filterTabs != null && filterTabs !== '')
			filters.push({ name: 'fq', value: 'tabs:' + filterTabs });

		var $filterNewLineCheckbox = $formFilters.find('input.valueNewLine[type = "checkbox"]');
		var $filterNewLineSelect = $formFilters.find('select.valueNewLine');
		var filterNewLine = $filterNewLineSelect.length ? $filterNewLineSelect.val() : $filterNewLineCheckbox.prop('checked');
		var filterNewLineSelectVal = $formFilters.find('select.filterNewLine').val();
		var filterNewLine = null;
		if(filterNewLineSelectVal !== '')
			filterNewLine = filterNewLineSelectVal == 'true';
		if(filterNewLine != null && filterNewLine === true)
			filters.push({ name: 'fq', value: 'newLine:' + filterNewLine });
	}
	return filters;
}

function searchSiteHtmVals(filters, success, error) {

	$.ajax({
		url: '/api/htm?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteHtmObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-code ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteHtmVals($formFilters, success, error);
}

// GET //

async function getSiteHtm() {
	$.ajax({
		url: '/api/htm/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// POST //

async function postSiteHtm($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueUri = $formValues.find('.valueUri').val();
	if(valueUri != null && valueUri !== '')
		vals['uri'] = valueUri;

	var valuePageId = $formValues.find('.valuePageId').val();
	if(valuePageId != null && valuePageId !== '')
		vals['pageId'] = valuePageId;

	var valueSequenceNum = $formValues.find('.valueSequenceNum').val();
	if(valueSequenceNum != null && valueSequenceNum !== '')
		vals['sequenceNum'] = valueSequenceNum;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueHtmAfter = $formValues.find('.valueHtmAfter').val();
	if(valueHtmAfter != null && valueHtmAfter !== '')
		vals['htmAfter'] = valueHtmAfter;

	var valueHtmGroup = $formValues.find('.valueHtmGroup').val();
	if(valueHtmGroup != null && valueHtmGroup !== '')
		vals['htmGroup'] = valueHtmGroup;

	var valueLabels = $formValues.find('.valueLabels').val();
	if(valueLabels != null && valueLabels !== '')
		vals['labels'] = valueLabels;

	var valueEBefore = $formValues.find('.valueEBefore').val();
	if(valueEBefore != null && valueEBefore !== '')
		vals['eBefore'] = valueEBefore;

	var valueEAfter = $formValues.find('.valueEAfter').val();
	if(valueEAfter != null && valueEAfter !== '')
		vals['eAfter'] = valueEAfter;

	var valueA = $formValues.find('.valueA').val();
	if(valueA != null && valueA !== '')
		vals['a'] = valueA;

	var valueText = $formValues.find('.valueText').val();
	if(valueText != null && valueText !== '')
		vals['text'] = valueText;

	var valueComment = $formValues.find('.valueComment').val();
	if(valueComment != null && valueComment !== '')
		vals['comment'] = valueComment;

	var valueTabs = $formValues.find('.valueTabs').val();
	if(valueTabs != null && valueTabs !== '')
		vals['tabs'] = valueTabs;

	var valueNewLine = $formValues.find('.valueNewLine').val();
	if(valueNewLine != null && valueNewLine !== '')
		vals['newLine'] = valueNewLine == 'true';

	var valueHtmBefore = $formValues.find('.valueHtmBefore').val();
	if(valueHtmBefore != null && valueHtmBefore !== '')
		vals['htmBefore'] = valueHtmBefore;

	$.ajax({
		url: '/api/htm'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteHtmVals(vals, success, error) {
	$.ajax({
		url: '/api/htm'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSiteHtm($formFilters, $formValues, id, success, error) {
	var filters = patchSiteHtmFilters($formFilters);

	var vals = {};

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueUri = $formValues.find('.valueUri').val();
	var removeUri = $formValues.find('.removeUri').val() === 'true';
	var setUri = removeUri ? null : $formValues.find('.setUri').val();
	var addUri = $formValues.find('.addUri').val();
	if(removeUri || setUri != null && setUri !== '')
		vals['setUri'] = setUri;
	if(addUri != null && addUri !== '')
		vals['addUri'] = addUri;
	var removeUri = $formValues.find('.removeUri').val();
	if(removeUri != null && removeUri !== '')
		vals['removeUri'] = removeUri;

	var valuePageId = $formValues.find('.valuePageId').val();
	var removePageId = $formValues.find('.removePageId').val() === 'true';
	var setPageId = removePageId ? null : $formValues.find('.setPageId').val();
	var addPageId = $formValues.find('.addPageId').val();
	if(removePageId || setPageId != null && setPageId !== '')
		vals['setPageId'] = setPageId;
	if(addPageId != null && addPageId !== '')
		vals['addPageId'] = addPageId;
	var removePageId = $formValues.find('.removePageId').val();
	if(removePageId != null && removePageId !== '')
		vals['removePageId'] = removePageId;

	var valueSequenceNum = $formValues.find('.valueSequenceNum').val();
	var removeSequenceNum = $formValues.find('.removeSequenceNum').val() === 'true';
	var setSequenceNum = removeSequenceNum ? null : $formValues.find('.setSequenceNum').val();
	var addSequenceNum = $formValues.find('.addSequenceNum').val();
	if(removeSequenceNum || setSequenceNum != null && setSequenceNum !== '')
		vals['setSequenceNum'] = setSequenceNum;
	if(addSequenceNum != null && addSequenceNum !== '')
		vals['addSequenceNum'] = addSequenceNum;
	var removeSequenceNum = $formValues.find('.removeSequenceNum').val();
	if(removeSequenceNum != null && removeSequenceNum !== '')
		vals['removeSequenceNum'] = removeSequenceNum;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueHtmAfter = $formValues.find('.valueHtmAfter').val();
	var removeHtmAfter = $formValues.find('.removeHtmAfter').val() === 'true';
	var setHtmAfter = removeHtmAfter ? null : $formValues.find('.setHtmAfter').val();
	var addHtmAfter = $formValues.find('.addHtmAfter').val();
	if(removeHtmAfter || setHtmAfter != null && setHtmAfter !== '')
		vals['setHtmAfter'] = setHtmAfter;
	if(addHtmAfter != null && addHtmAfter !== '')
		vals['addHtmAfter'] = addHtmAfter;
	var removeHtmAfter = $formValues.find('.removeHtmAfter').val();
	if(removeHtmAfter != null && removeHtmAfter !== '')
		vals['removeHtmAfter'] = removeHtmAfter;

	var valueHtmGroup = $formValues.find('.valueHtmGroup').val();
	var removeHtmGroup = $formValues.find('.removeHtmGroup').val() === 'true';
	var setHtmGroup = removeHtmGroup ? null : $formValues.find('.setHtmGroup').val();
	var addHtmGroup = $formValues.find('.addHtmGroup').val();
	if(removeHtmGroup || setHtmGroup != null && setHtmGroup !== '')
		vals['setHtmGroup'] = setHtmGroup;
	if(addHtmGroup != null && addHtmGroup !== '')
		vals['addHtmGroup'] = addHtmGroup;
	var removeHtmGroup = $formValues.find('.removeHtmGroup').val();
	if(removeHtmGroup != null && removeHtmGroup !== '')
		vals['removeHtmGroup'] = removeHtmGroup;

	var valueLabels = $formValues.find('.valueLabels').val();
	var removeLabels = $formValues.find('.removeLabels').val() === 'true';
	var setLabels = removeLabels ? null : $formValues.find('.setLabels').val();
	var addLabels = $formValues.find('.addLabels').val();
	if(removeLabels || setLabels != null && setLabels !== '')
		vals['setLabels'] = setLabels;
	if(addLabels != null && addLabels !== '')
		vals['addLabels'] = addLabels;
	var removeLabels = $formValues.find('.removeLabels').val();
	if(removeLabels != null && removeLabels !== '')
		vals['removeLabels'] = removeLabels;

	var valueEBefore = $formValues.find('.valueEBefore').val();
	var removeEBefore = $formValues.find('.removeEBefore').val() === 'true';
	var setEBefore = removeEBefore ? null : $formValues.find('.setEBefore').val();
	var addEBefore = $formValues.find('.addEBefore').val();
	if(removeEBefore || setEBefore != null && setEBefore !== '')
		vals['setEBefore'] = setEBefore;
	if(addEBefore != null && addEBefore !== '')
		vals['addEBefore'] = addEBefore;
	var removeEBefore = $formValues.find('.removeEBefore').val();
	if(removeEBefore != null && removeEBefore !== '')
		vals['removeEBefore'] = removeEBefore;

	var valueEAfter = $formValues.find('.valueEAfter').val();
	var removeEAfter = $formValues.find('.removeEAfter').val() === 'true';
	var setEAfter = removeEAfter ? null : $formValues.find('.setEAfter').val();
	var addEAfter = $formValues.find('.addEAfter').val();
	if(removeEAfter || setEAfter != null && setEAfter !== '')
		vals['setEAfter'] = setEAfter;
	if(addEAfter != null && addEAfter !== '')
		vals['addEAfter'] = addEAfter;
	var removeEAfter = $formValues.find('.removeEAfter').val();
	if(removeEAfter != null && removeEAfter !== '')
		vals['removeEAfter'] = removeEAfter;

	var valueA = $formValues.find('.valueA').val();
	var removeA = $formValues.find('.removeA').val() === 'true';
	var setA = removeA ? null : $formValues.find('.setA').val();
	var addA = $formValues.find('.addA').val();
	if(removeA || setA != null && setA !== '')
		vals['setA'] = setA;
	if(addA != null && addA !== '')
		vals['addA'] = addA;
	var removeA = $formValues.find('.removeA').val();
	if(removeA != null && removeA !== '')
		vals['removeA'] = removeA;

	var valueText = $formValues.find('.valueText').val();
	var removeText = $formValues.find('.removeText').val() === 'true';
	var setText = removeText ? null : $formValues.find('.setText').val();
	var addText = $formValues.find('.addText').val();
	if(removeText || setText != null && setText !== '')
		vals['setText'] = setText;
	if(addText != null && addText !== '')
		vals['addText'] = addText;
	var removeText = $formValues.find('.removeText').val();
	if(removeText != null && removeText !== '')
		vals['removeText'] = removeText;

	var valueComment = $formValues.find('.valueComment').val();
	var removeComment = $formValues.find('.removeComment').val() === 'true';
	var setComment = removeComment ? null : $formValues.find('.setComment').val();
	var addComment = $formValues.find('.addComment').val();
	if(removeComment || setComment != null && setComment !== '')
		vals['setComment'] = setComment;
	if(addComment != null && addComment !== '')
		vals['addComment'] = addComment;
	var removeComment = $formValues.find('.removeComment').val();
	if(removeComment != null && removeComment !== '')
		vals['removeComment'] = removeComment;

	var valueTabs = $formValues.find('.valueTabs').val();
	var removeTabs = $formValues.find('.removeTabs').val() === 'true';
	var setTabs = removeTabs ? null : $formValues.find('.setTabs').val();
	var addTabs = $formValues.find('.addTabs').val();
	if(removeTabs || setTabs != null && setTabs !== '')
		vals['setTabs'] = setTabs;
	if(addTabs != null && addTabs !== '')
		vals['addTabs'] = addTabs;
	var removeTabs = $formValues.find('.removeTabs').val();
	if(removeTabs != null && removeTabs !== '')
		vals['removeTabs'] = removeTabs;

	var valueNewLine = $formValues.find('.valueNewLine').val();
	var removeNewLine = $formValues.find('.removeNewLine').val() === 'true';
	var valueNewLineSelectVal = $formValues.find('select.setNewLine').val();
	if(valueNewLineSelectVal != null && valueNewLineSelectVal !== '')
		valueNewLine = valueNewLineSelectVal == 'true';
	var setNewLine = removeNewLine ? null : valueNewLine;
	var addNewLine = $formValues.find('.addNewLine').prop('checked');
	if(removeNewLine || setNewLine != null && setNewLine !== '')
		vals['setNewLine'] = setNewLine;
	if(addNewLine != null && addNewLine !== '')
		vals['addNewLine'] = addNewLine;
	var removeNewLine = $formValues.find('.removeNewLine').prop('checked');
	if(removeNewLine != null && removeNewLine !== '')
		vals['removeNewLine'] = removeNewLine;

	var valueHtmBefore = $formValues.find('.valueHtmBefore').val();
	var removeHtmBefore = $formValues.find('.removeHtmBefore').val() === 'true';
	var setHtmBefore = removeHtmBefore ? null : $formValues.find('.setHtmBefore').val();
	var addHtmBefore = $formValues.find('.addHtmBefore').val();
	if(removeHtmBefore || setHtmBefore != null && setHtmBefore !== '')
		vals['setHtmBefore'] = setHtmBefore;
	if(addHtmBefore != null && addHtmBefore !== '')
		vals['addHtmBefore'] = addHtmBefore;
	var removeHtmBefore = $formValues.find('.removeHtmBefore').val();
	if(removeHtmBefore != null && removeHtmBefore !== '')
		vals['removeHtmBefore'] = removeHtmBefore;

	patchSiteHtmVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchSiteHtmFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterUri = $formFilters.find('.valueUri').val();
		if(filterUri != null && filterUri !== '')
			filters.push({ name: 'fq', value: 'uri:' + filterUri });

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterSequenceNum = $formFilters.find('.valueSequenceNum').val();
		if(filterSequenceNum != null && filterSequenceNum !== '')
			filters.push({ name: 'fq', value: 'sequenceNum:' + filterSequenceNum });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterHtmGroup = $formFilters.find('.valueHtmGroup').val();
		if(filterHtmGroup != null && filterHtmGroup !== '')
			filters.push({ name: 'fq', value: 'htmGroup:' + filterHtmGroup });

		var filterLabels = $formFilters.find('.valueLabels').val();
		if(filterLabels != null && filterLabels !== '')
			filters.push({ name: 'fq', value: 'labels:' + filterLabels });

		var filterEBefore = $formFilters.find('.valueEBefore').val();
		if(filterEBefore != null && filterEBefore !== '')
			filters.push({ name: 'fq', value: 'eBefore:' + filterEBefore });

		var filterEAfter = $formFilters.find('.valueEAfter').val();
		if(filterEAfter != null && filterEAfter !== '')
			filters.push({ name: 'fq', value: 'eAfter:' + filterEAfter });

		var filterA = $formFilters.find('.valueA').val();
		if(filterA != null && filterA !== '')
			filters.push({ name: 'fq', value: 'a:' + filterA });

		var filterText = $formFilters.find('.valueText').val();
		if(filterText != null && filterText !== '')
			filters.push({ name: 'fq', value: 'text:' + filterText });

		var filterComment = $formFilters.find('.valueComment').val();
		if(filterComment != null && filterComment !== '')
			filters.push({ name: 'fq', value: 'comment:' + filterComment });

		var filterTabs = $formFilters.find('.valueTabs').val();
		if(filterTabs != null && filterTabs !== '')
			filters.push({ name: 'fq', value: 'tabs:' + filterTabs });

		var $filterNewLineCheckbox = $formFilters.find('input.valueNewLine[type = "checkbox"]');
		var $filterNewLineSelect = $formFilters.find('select.valueNewLine');
		var filterNewLine = $filterNewLineSelect.length ? $filterNewLineSelect.val() : $filterNewLineCheckbox.prop('checked');
		var filterNewLineSelectVal = $formFilters.find('select.filterNewLine').val();
		var filterNewLine = null;
		if(filterNewLineSelectVal !== '')
			filterNewLine = filterNewLineSelectVal == 'true';
		if(filterNewLine != null && filterNewLine === true)
			filters.push({ name: 'fq', value: 'newLine:' + filterNewLine });
	}
	return filters;
}

function patchSiteHtmVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteHtmVals(filters, vals, success, error);
}

function patchSiteHtmVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/htm?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSiteHtm($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSiteHtmVals(JSON.parse(json), success, error);
}

function putimportSiteHtmVals(json, success, error) {
	$.ajax({
		url: '/api/htm-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSiteHtm(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteHtm', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteHtmForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-code w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify HTMLs in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-2017-shaded-spruce ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketSiteHtmInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteHtmVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteHtm' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteHtm' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteHtm' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSiteHtm' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSiteHtm' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Deleted'));
			}
			var val = o['uri'];
			if(vars.includes('uri')) {
				$('.inputSiteHtm' + pk + 'Uri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Uri').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Uri'));
			}
			var val = o['pageId'];
			if(vars.includes('pageId')) {
				$('.inputSiteHtm' + pk + 'PageId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'PageId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'PageId'));
			}
			var val = o['sequenceNum'];
			if(vars.includes('sequenceNum')) {
				$('.inputSiteHtm' + pk + 'SequenceNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'SequenceNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'SequenceNum'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteHtm' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteHtm' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteHtm' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteHtm' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSiteHtm' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSiteHtm' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteHtm' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteHtm' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSiteHtm' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSiteHtm' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSiteHtm' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSiteHtm' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSiteHtm' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteHtm' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Id'));
			}
			var val = o['htmAfter'];
			if(vars.includes('htmAfter')) {
				$('.inputSiteHtm' + pk + 'HtmAfter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'HtmAfter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'HtmAfter'));
			}
			var val = o['htmGroup'];
			if(vars.includes('htmGroup')) {
				$('.inputSiteHtm' + pk + 'HtmGroup').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'HtmGroup').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'HtmGroup'));
			}
			var val = o['labels'];
			if(vars.includes('labels')) {
				$('.inputSiteHtm' + pk + 'Labels').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Labels').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Labels'));
			}
			var val = o['eBefore'];
			if(vars.includes('eBefore')) {
				$('.inputSiteHtm' + pk + 'EBefore').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'EBefore').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'EBefore'));
			}
			var val = o['eAfter'];
			if(vars.includes('eAfter')) {
				$('.inputSiteHtm' + pk + 'EAfter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'EAfter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'EAfter'));
			}
			var val = o['a'];
			if(vars.includes('a')) {
				$('.inputSiteHtm' + pk + 'A').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'A').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'A'));
			}
			var val = o['text'];
			if(vars.includes('text')) {
				$('.inputSiteHtm' + pk + 'Text').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Text').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Text'));
			}
			var val = o['comment'];
			if(vars.includes('comment')) {
				$('.inputSiteHtm' + pk + 'Comment').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Comment').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Comment'));
			}
			var val = o['tabs'];
			if(vars.includes('tabs')) {
				$('.inputSiteHtm' + pk + 'Tabs').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'Tabs').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'Tabs'));
			}
			var val = o['newLine'];
			if(vars.includes('newLine')) {
				$('.inputSiteHtm' + pk + 'NewLine').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'NewLine').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'NewLine'));
			}
			var val = o['htmBefore'];
			if(vars.includes('htmBefore')) {
				$('.inputSiteHtm' + pk + 'HtmBefore').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtm' + pk + 'HtmBefore').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtm' + pk + 'HtmBefore'));
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
					layout['title'] = 'SiteHtm';
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
				Plotly.react('htmBodyGraphBaseResultPage', data, layout);
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
	$('#fqSiteHtm_time').val(x);
	$('#fqSiteHtm_time').change();
	searchPage();
	}, speedRate);
}

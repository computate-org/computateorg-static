Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchCompanyEvent')?.addEventListener('click', (event) => {
            document.querySelector('#patchCompanyEventDialog').show();
          });

          document.querySelector('#htmButton_postCompanyEvent')?.addEventListener('click', (event) => {
            document.querySelector('#postCompanyEventDialog').show();
          });

          document.querySelector('#htmButton_putimportCompanyEvent')?.addEventListener('click', (event) => {
            document.querySelector('#putimportCompanyEventDialog').show();
          });

          document.querySelector('#htmButton_searchpageCompanyEvent')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageCompanyEventDialog').show();
          });

          // PATCH created
          document.querySelector('#fqCompanyEvent_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH objectId
          document.querySelector('#Page_objectId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setObjectId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#fqCompanyEvent_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#fqCompanyEvent_location')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_location')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#fqCompanyEvent_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH uri
          document.querySelector('#fqCompanyEvent_uri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_uri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.reportValidity();
          });

          // PATCH url
          document.querySelector('#fqCompanyEvent_url')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_url')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_url')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqCompanyEvent_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setInheritPk', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH resourceUri
          document.querySelector('#fqCompanyEvent_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setResourceUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.reportValidity();
          });

          // PATCH templateUri
          document.querySelector('#fqCompanyEvent_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyEvent', event.target);
          });
          document.querySelector('#buttonFacetCompanyEvent_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyEvent', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyEvent_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyEvent', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTemplateUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyEventVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });
});

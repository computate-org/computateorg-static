Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchCompanyService')?.addEventListener('click', (event) => {
            document.querySelector('#patchCompanyServiceDialog').show();
          });

          document.querySelector('#htmButton_postCompanyService')?.addEventListener('click', (event) => {
            document.querySelector('#postCompanyServiceDialog').show();
          });

          document.querySelector('#htmButton_putimportCompanyService')?.addEventListener('click', (event) => {
            document.querySelector('#putimportCompanyServiceDialog').show();
          });

          document.querySelector('#htmButton_searchpageCompanyService')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageCompanyServiceDialog').show();
          });

          // PATCH created
          document.querySelector('#fqCompanyService_created')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_created')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
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
                patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
                patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_name')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_name')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

          // PATCH description
          document.querySelector('#fqCompanyService_description')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_description')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_uri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_uri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_url')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_url')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
          document.querySelector('#fqCompanyService_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('CompanyService', event.target);
          });
          document.querySelector('#buttonFacetCompanyService_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('CompanyService', event.target);
          });
          document.querySelector('#pageFacetPivotCompanyService_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CompanyService', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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
              patchCompanyServiceVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
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

({
    init: function (component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Title', fieldName: 'Title', type: 'text'},
            
            {label: 'Last Activity Date', fieldName: 'LastActivityDate', type: 'date', 
				}
        ]);
    },
    
    getSelectedName: function (component, event, helper) {
        var selectedRows = event.getParam('selectedRows');
            component.set("v.contactsSelected", selectedRows); 
        	component.set("v.selectedRowsCount", selectedRows.length);
        	var lengthEvent = $A.get("e.c:CRA_ContactLengthEvent");
        	var len = component.get("v.selectedRowsCount");
        	lengthEvent.setParams({"length": len});
        	lengthEvent.fire();
    },
})
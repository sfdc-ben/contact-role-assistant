({
	selectRecord : function(component, event, helper) {
		var getSelectRecord = component.get("v.contactRecord");
        var selectEvent = component.getEvent("selectedContactEvent");
        selectEvent.setParams({"selectedContact" : getSelectRecord });
        selectEvent.fire();
	},
})
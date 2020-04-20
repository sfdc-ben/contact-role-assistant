({
    doInit : function(component, event, helper) {
        var con = component.get("v.activeContacts");
        console.log(JSON.stringify(con));
    },
    
    handleRemoveRole : function(component, event, helper) {
		var eventContact = event.getParam("contactToRemove");
        var eventIndicator = event.getParam("removeIndicator");
        component.set("v.contactToRemove", eventContact);
        console.log(eventContact);
        component.set("v.removeIndicator", eventIndicator);
        var navigate = component.get('v.navigateFlow');
        var flowStep = component.get("v.flowStep");
        navigate(flowStep);
	},
})
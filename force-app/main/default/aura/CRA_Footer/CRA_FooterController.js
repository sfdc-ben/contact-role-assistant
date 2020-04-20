({
	FlowNavigate : function(component, event, helper) {
		var navigate = component.get("v.navigateFlow");
        var flowStep = component.get("v.flowStep");
        navigate(flowStep);
	},
    
    refreshFlow : function(component, event, helper) {
		component.set("v.refreshIndicator", false);
        var navigate = component.get("v.navigateFlow");
        var flowStep = component.get("v.flowStep");
        navigate(flowStep);
	},
    
    handleLengthEvent: function(component, event, helper) {
        var eventLength = event.getParam("length");
        component.set("v.buttonCondition", eventLength);
    },
})
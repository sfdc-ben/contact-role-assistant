({
	doInit: function(component, event, helper) {
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "OpportunityContactRole",
            'field_apiname': "Role",
            'nullRequired': true
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS"){
                console.log(a.getReturnValue());
                component.set("v.rolePicklist", a.getReturnValue());
                helper.stripRolefromContactRoles(component);
                helper.identifyMissingRoles(component);
            } 
        });
        $A.enqueueAction(action);   
	},
    
})
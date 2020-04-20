({
	rolePicklist : function(component){
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
            } 
        });
        $A.enqueueAction(action);
    },
    
    stripRolefromContactRoles : function(component){
        var contactRoles = component.get("v.activeContacts")
        var activeRoles = []
        for(var i in contactRoles){
            var iterContact = contactRoles[i];
            var roleTemp = iterContact.Role;
            activeRoles.push(roleTemp);
    		}
        component.set("v.activeRoles", activeRoles);
    },
    
    identifyMissingRoles : function(component) {
        var activeRoles = component.get("v.activeRoles");
        var allRoles = component.get("v.rolePicklist");
        allRoles.splice(0,1);
        console.log(JSON.stringify(allRoles));
        for(var i in activeRoles){
            var aRole = activeRoles[i];
            for(var j in allRoles){
                var Role = allRoles[j];
                if (aRole === Role){
                    allRoles.splice(j,1);
                }
            }
        }
        console.log(allRoles);
        component.set("v.missingRoles", allRoles);
    },
})
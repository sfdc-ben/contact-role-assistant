({
	onRemoveClick : function(component, event, helper) {
        var removeRole = $A.get("e.c:CRA_RoleRemoveEvent");
        var contact = component.get("v.actContact.Id");
        removeRole.setParams({"contactToRemove": contact, "removeIndicator": true});
        removeRole.fire();
	},
    
    onEditClick : function(component, event, helper) {
        var editRecordEvent = $A.get("e.force:editRecord");
    	editRecordEvent.setParams({
        	"recordId": component.get("v.actContact.Id")
    	});
    	editRecordEvent.fire();
        var editRole = $A.get("e.c:CRA_RoleEditEvent");
        editRole.fire();
    },
})
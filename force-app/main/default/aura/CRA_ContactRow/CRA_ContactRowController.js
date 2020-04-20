({
	onRemoveClick : function(component, event, helper) {
        var removeContact = $A.get("e.c:CRA_RemoveContactEvent");
        var index = component.get("v.index");
        removeContact.setParams({"index": index});
        removeContact.fire();
	}
})
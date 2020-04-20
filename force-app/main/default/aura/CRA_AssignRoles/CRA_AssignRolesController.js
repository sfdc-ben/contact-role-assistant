({
	doInit: function(component, event, helper) {
        helper.rolePicklist(component);
        helper.createOppContRoles(component);
	},
    
    handleRemoveContact: function(component, event, helper){
        var eventIndex = event.getParam("index");
//        console.log(eventIndex);
        var oppContacts = component.get("v.opportunityContacts");
        oppContacts.splice(eventIndex, 1);
        component.set("v.opportunityContacts", oppContacts);
    },
})
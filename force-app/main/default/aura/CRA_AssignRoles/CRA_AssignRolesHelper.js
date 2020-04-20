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
                component.set("v.rolePicklist", a.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
    },
    
    createOppContRoles : function(component){
        var contactList = component.get("v.contactsAdded");
        var searchedContacts = component.get("v.searchedContacts");
        var combinedList = contactList.concat(searchedContacts);
        var newList = []
        for(var i in combinedList){
            var iterContact = combinedList[i];
            var contactTemp = { 'sobjectType': 'OpportunityContactRole','OpportunityId': '','ContactId': '',
                              'Role': '','Name': ''};
            contactTemp.ContactId = iterContact.Id;
            contactTemp.Name = iterContact.Name;
            contactTemp.OpportunityId = component.get("v.opportunity");
            newList.push(contactTemp);
        }
        component.set("v.opportunityContacts", newList);
    }
})
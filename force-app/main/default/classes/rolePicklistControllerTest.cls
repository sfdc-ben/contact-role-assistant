@isTest
private class rolePicklistControllerTest {
    @isTest static void testRolePicklistNullRequired(){
        List<String> retList = rolePicklistController.getPicklistvalues('OpportunityContactRole','Role',true);
        List<String> expList = new list<String>{'Choose a role', 'Business User', 'Decision Maker', 'Economic Buyer', 'Economic Decision Maker', 'Evaluator', 'Executive Sponsor', 'Influencer', 'Technical Buyer', 'Other'};
        System.assertEquals(expList,retList);
    }
    
    @isTest static void testRolePicklistNullNotRequired(){
        List<String> retList = rolePicklistController.getPicklistvalues('OpportunityContactRole','Role',false);
        List<String> expList = new list<String>{'Business User', 'Decision Maker', 'Economic Buyer', 'Economic Decision Maker', 'Evaluator', 'Executive Sponsor', 'Influencer', 'Technical Buyer', 'Other'};
        System.assertEquals(expList,retList);
    }
}
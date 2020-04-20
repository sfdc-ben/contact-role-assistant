@isTest
private class contactMultiSearchControllerTest {
	@isTest static void testSearchTermContact(){
        //Test data
        Contact cont = new Contact(FirstName='Henry', LastName='Smith');
        insert cont;
        
        //Perform test
        Test.startTest();
        List<sObject> exclList = new List<sObject>();
        List<sObject> retList = contactMultiSearchController.getSearchValues('ry','Contact', exclList);
        List<sObject> expList = new list<sObject>{cont};
        Test.stopTest();
        System.assertEquals(expList[0].Id, retList[0].Id);
        
    }
    
    @isTest static void testSearchTermContactExcluded(){
        //Test data
        Contact cont = new Contact(FirstName='Henry', LastName='Smith');
        insert cont;
        
        //Perform test
        Test.startTest();
        List<sObject> exclList = new List<sObject>{cont};
        List<sObject> retList = contactMultiSearchController.getSearchValues('ry','Contact', exclList);
        List<sObject> expList = new list<sObject>{};
        Test.stopTest();
        System.assertEquals(expList, retList);
        
    }
}
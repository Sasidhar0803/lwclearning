public with sharing class acc {
    @AuraEnabled
    public static void accreation(string accname, string phone, string lastname){
        Account acc = new account(Name = accname, Phone = phone);
        insert acc;
        Contact con = new contact(lastname = lastname, AccountId = acc.Id);
            insert con;
        
    }
}
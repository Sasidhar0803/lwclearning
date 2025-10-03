public with sharing class parentchild {
    @AuraEnabled  
     public static List<Account> accmethod( String Name) {
    return [
            SELECT Id, Name, Phone, Industry
            FROM Account
            WHERE Name LIKE :('%' + Name + '%')
            LIMIT 50
        ];
   }
}
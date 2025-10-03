public with sharing class comm {
    @AuraEnabled
    public static list<Account> accmethod(){
        return [select Id, Name, Phone from Account];
    }
}
global with sharing class AccountController {

    public AccountController() {

    }

    @AuraEnabled
    public static Account[] getAccounts() {
        List<Account> accounts = new List<Account>();
        accounts.add(new Account(Name = 'Account 1'));
        accounts.add(new Account(Name = 'Account 2'));
        accounts.add(new Account(Name = 'Account 3'));
        return accounts;
    }
}
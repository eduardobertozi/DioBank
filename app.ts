import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Edu', 10)
peopleAccount.showAccountDetails()
peopleAccount.deposit(100)
peopleAccount.withDrawn(3)

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20, 1235)
companyAccount.showAccountDetails()
companyAccount.deposit(50)
companyAccount.getLoan(500)
companyAccount.withDrawn(30)

const premiumAccount = new PremiumAccount('Pamela', 300, 14)
premiumAccount.showAccountDetails()
premiumAccount.deposit(100)
premiumAccount.withDrawn(50)

import React from 'react'

class AccountsCtrl {
  constructor(acctArr, acctName) {
    this.acctArr = []
    this.acctName = acctName
  }

  addAccount(i) {
    this.acctArr.push(i)
    return this.acctArr
  }

  removeAccount(i) {
    return this.acctArr.splice(i)
  }

  nameAccount(i) {
    return this.acctName = i
  }

  highestValue() {
    return Math.max(...this.acctArr)
  }

  lowestValue() {
    return Math.min(...this.acctArr)
  }
}

export default AccountsCtrl

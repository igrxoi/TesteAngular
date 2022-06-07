export interface Person {
  name: string,
  document: string,
  applicationAccount?: {
    number: string
  },
  checkingAccount?: {
    number: string
  }
}

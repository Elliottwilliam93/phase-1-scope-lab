var customerName = "bob"

function upperCaseCustomerName() {
    customerName = ("BOB")
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = ("maybe bob")
    return bestCustomer
}

const leastFavoriteCustomer = "billy"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = ("maybe not billy")
    return leastFavoriteCustomer
}
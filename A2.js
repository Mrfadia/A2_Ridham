var reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var formErrors = '';
var anythingRegex = /^.+$/; // would match one or more characters
var rsCreditCard = /^(\d{4})\s?(\d{4})\s?(\d{4})\s?(\d{4})|(\d{16})|(\d{4})\-?(\d{4})\-?(\d{4})\-?(\d{4})$/
var monthRegex = /^[A-Za-z][A-Za-z][A-Za-z]$/;
var yearendRegex = /^[0-9][0-9][0-9][0-9]$/;
//itam price declare
var tshirtPrise = 5;
var hoodiePrise = 20;
var shoePrise = 30;
var backpackPrise = 15;
var joggersPrise = 10;

var totalQuantity = 0;
var total = 0;
mimDonation = 10;
mustDonation = 0.1;

var myOutput = '';
formErrors = '';

function formSubmit() {
    //---------fetch all the values using id and send it to recipt---------------
    var fullname = document.getElementById('fullname').value;
    document.getElementById('customerName').innerHTML = fullname;
    var email = document.getElementById('email').value;
    document.getElementById('customerEmail').innerHTML = email;
    var creditcard = document.getElementById('creditcard').value;
    document.getElementById('customerCreditcard').innerHTML = creditcard;
    var creditMonth = document.getElementById('expmonth').value;
    var creditYear = document.getElementById('expyear').value;

    //----------sanitize------------------
    fullname = fullname.trim();
    email = email.trim();
    creditcard = creditcard.trim();
    creditMonth = creditMonth.trim();
    creditYear = creditYear.trim();

    // //---------fetch all the values of quantity added using id
    var tshirtQuantity = document.getElementById('tshirt').value;
    var hoodieQuantity = document.getElementById('hoodie').value;
    var shoesQuantity = document.getElementById('shoes').value;
    var backpackQuantity = document.getElementById('backpack').value;
    var joggersQuantity = document.getElementById('joggers').value;

    //validate Name and email is not empty
    //validate credit card, month and expriry date formate
    if (!anythingRegex.test(fullname)) {
        if (fullname == '') {
            formErrors += `Name is required <br>`;
        }
    }
    if (!anythingRegex.test(email)) {
        if (email == '') {
            formErrors += `Email is required <br>`;
        }
    }
    if (!rsCreditCard.test(creditcard)) {
        if (!creditcard == '' && !rsCreditCard.test(creditcard)) {
            formErrors += `Creditcard should be in correct format <br>`;
        }
    }
    if (!monthRegex.test(creditMonth)) {
        if (!monthRegex == '' && !monthRegex.test(creditMonth)) {
            formErrors += `Month should be in correct format<br>`;
        }
    }
    if (!yearendRegex.test(creditYear)) {
        if (!yearendRegex == '' && !yearendRegex.test(creditYear)) {
            formErrors += `Year should be in correct format <br>`;
        }
    }

    //claculate iteam price multiple with it's quantity
    if (tshirt != null) {
        tshirt = tshirtPrise * tshirtQuantity;
        myOutput += `<tr><td>${"Tshirt"}</td><td>${tshirtQuantity}</td><td>${"$" + tshirtPrise}</td><td>${"$" + tshirt}</td></tr>`;
        document.getElementById('result').innerHTML = myOutput;
    }
    if (hoodie != null) {
        hoodie = hoodiePrise * hoodieQuantity;
        myOutput += `<tr><td>${"Hoodie"}</td><td>${hoodieQuantity}</td><td>${"$" + hoodiePrise}</td><td>${"$" + hoodie}</td></tr>`;
        document.getElementById('result').innerHTML = myOutput;
    }
    if (shoes != null) {
        shoes = shoePrise * shoesQuantity;
        myOutput += `<tr><td>${"Shoes"}</td><td>${shoesQuantity}</td><td>${"$" + shoePrise}</td><td>${"$" + shoes}</td></tr>`;
        document.getElementById('result').innerHTML = myOutput;
    }
    if (backpack != null) {
        backpack = backpackPrise * backpackQuantity;
        myOutput += `<tr><td>${"Backpack"}</td><td>${backpackQuantity}</td><td>${"$" + backpackPrise}</td><td>${"$" + backpack}</td></tr>`;
        document.getElementById('result').innerHTML = myOutput;
    }
    if (joggers != null) {
        joggers = joggersPrise * joggersQuantity;
        myOutput += `<tr><td>${"Joggers"}</td><td>${joggersQuantity}</td><td>${"$" + joggersPrise}</td><td>${"$" + joggers}</td></tr>`;
        document.getElementById('result').innerHTML = myOutput;
    }

    //Check for itam quantity, if noting  add then it will show mesg in error or it will calcluate totalQantity amount
    if (tshirt == 0 && hoodie == 0 && shoes == 0 && backpack == 0 && joggers == 0) {
        formErrors += `Pleaae add quantity of iteam <br>`;
        total = 0;
        document.getElementById('total').innerHTML = total;
    }
    else {
        totalQuantity = tshirt + hoodie + shoes + backpack + joggers;
    }

    //Caluluate Donation amount
    if (totalQuantity < mimDonation && totalQuantity > 0) {
        document.getElementById('donationAmount').innerHTML = mimDonation
        var total = totalQuantity + mimDonation;
        document.getElementById('total').innerHTML = total;
    }
    else {
        var donation = totalQuantity * mustDonation
        document.getElementById('donationAmount').innerHTML = donation;
        var total = totalQuantity + donation;
        document.getElementById('total').innerHTML = total;
    }
    //---------check if there are errors and display them-------
    if (formErrors) {
        if (formErrors != '') {
            document.getElementById('errors').innerHTML = formErrors;
        }
    }
    else {
        document.getElementById('errors').innerHTML = '';

        return false;
    }
    return false;
    // Return false will stop the form from submitting and keep it on the current page.
}

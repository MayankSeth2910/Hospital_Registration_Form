
// Created By Mayank Seth on 6th August 2024



// Form Validation

function formvalidate() {

    // Form Variable

    var todaysdate = document.getElementById("todaysdate").value;
    var formnumber = document.getElementById("formnumber").value;
    var firstname = document.getElementById("firstname").value;
    var middlename = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var DOB = document.getElementById("DOB").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var maritalstatus = document.getElementById("maritalstatus").value;
    var bloodgroup = document.getElementById("bloodgroup").value;
    var aadharnum = document.getElementById("aadharnum").value;
    var ayushmannum = document.getElementById("ayushmannum").value;
    var emailid = document.getElementById("emailid").value;
    var addressline1 = document.getElementById("addressline1").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    var country = document.getElementById("country").value;
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var emergencynum = document.getElementById("emergencynum").value;
    var occupation = document.getElementById("occupation").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var physicianname = document.getElementById("physicianname").value;
    var physiciannumber = document.getElementById("physiciannumber").value;
    var medicalreport = document.getElementById("medicalreport").value;
    var personname = document.getElementById("personname").value;
    var insurancename = document.getElementById("insurancename").value;
    var policyname = document.getElementById("policyname").value;
    var insurancedocument = document.getElementById("insurancedocument").value;

    // Initalize all error as true

    var todaysdateErr = formnumberErr = firstnameErr = middlenameErr = lastnameErr = DOBErr = ageErr = sexErr = maritalstatusErr = bloodgroupErr = aadharnumErr = ayushmannumErr = emailidErr = addressline1Err = cityErr = stateErr = zipcodeErr = countryErr = number1Err = number2Err = emergencynumErr = occupationErr = heightErr = weightErr = physiciannameErr = physiciannumberErr = medicalreportErr = personnameErr = insurancenameErr = policynameErr = insurancedocumentErr = true;

    // Date and Form Number Validation

    if (todaysdate == "") {
        document.getElementById("todaysdate").style.backgroundColor = "red";
    } else {
        document.getElementById("todaysdate").style.backgroundColor = "transparent";
        todaysdateErr = false;
    }

    if (formnumber == "") {
        document.getElementById("formnumber").style.backgroundColor = "red";
    } else {
        document.getElementById("formnumber").style.backgroundColor = "transparent";
        formnumberErr = false;
    }

    // Personal Details Validation

    if (firstname == "" || /^[a-zA-Z\s]+$/.test(firstname) === false) {
        document.getElementById("firstname").style.backgroundColor = "red";
    } else {
        document.getElementById("firstname").style.backgroundColor = "transparent";
        firstnameErr = false;
    }

    if (middlename == "") {
        document.getElementById("middlename").style.backgroundColor = "transparent";
        middlenameErr = false;
    } else if (/^[a-zA-Z\s]+$/.test(middlename) === false) {
        document.getElementById("middlename").style.backgroundColor = "red";
    } else {
        document.getElementById("middlename").style.backgroundColor = "transparent";
        middlenameErr = false;
    }

    if (lastname == "") {
        document.getElementById("lastname").style.backgroundColor = "transparent";
        lastnameErr = false;
    } else if (lastname = "" || /^[a-zA-Z\s]+$/.test(lastname) === false) {
        document.getElementById("lastname").style.backgroundColor = "red";
    } else {
        document.getElementById("lastname").style.backgroundColor = "transparent";
        lastnameErr = false;
    }

    if (DOB == "") {
        document.getElementById("DOB").style.backgroundColor = "red";
    } else {
        document.getElementById("DOB").style.backgroundColor = "transparent";
        DOBErr = false;
    }

    if (age == "" || (age < 0 || age > 120)) {
        document.getElementById("age").style.backgroundColor = "red";
    } else {
        document.getElementById("age").style.backgroundColor = "transparent";
        ageErr = false;
    }

    if (sex == "select") {
        document.getElementById("sex").style.backgroundColor = "red";
    } else {
        document.getElementById("sex").style.backgroundColor = "transparent";
        sexErr = false;
    }

    if (maritalstatus == "select") {
        document.getElementById("maritalstatus").style.backgroundColor = "red";
    } else {
        document.getElementById("maritalstatus").style.backgroundColor = "transparent";
        maritalstatusErr = false;
    }

    if (bloodgroup == "select") {
        document.getElementById("bloodgroup").style.backgroundColor = "red";
    } else {
        document.getElementById("bloodgroup").style.backgroundColor = "transparent";
        bloodgroupErr = false;
    }

    if (aadharnum == "" || (/^[1-9]\d{11}$/.test(aadharnum) === false)) {
        document.getElementById("aadharnum").style.backgroundColor = "red";
    } else {
        document.getElementById("aadharnum").style.backgroundColor = "transparent";
        aadharnumErr = false;
    }

    if (ayushmannum == "") {
        document.getElementById("ayushmannum").style.backgroundColor = "transparent";
        ayushmannumErr = false;
    } else if (/^[1-9]\d{13}$/.test(ayushmannum) === false) {
        document.getElementById("ayushmannum").style.backgroundColor = "red";
    } else {
        document.getElementById("ayushmannum").style.backgroundColor = "transparent";
        ayushmannumErr = false;
    }

    if (emailid == "" || /^\S+@\S+\.\S+$/.test(emailid) === false) {
        document.getElementById("emailid").style.backgroundColor = "red";
    } else {
        document.getElementById("emailid").style.backgroundColor = "transparent";
        emailidErr = false;
    }

    if (occupation == "" || /^[a-zA-Z\s]+$/.test(occupation) === false) {
        document.getElementById("occupation").style.backgroundColor = "red";
    } else {
        document.getElementById("occupation").style.backgroundColor = "transparent";
        occupationErr = false;
    }

    // Address Infomation Validation

    if (addressline1 == "") {
        document.getElementById("addressline1").style.backgroundColor = "red";
    } else {
        document.getElementById("addressline1").style.backgroundColor = "transparent";
        addressline1Err = false;
    }

    if (city == "" || /^[a-zA-Z\s]+$/.test(city) === false) {
        document.getElementById("city").style.backgroundColor = "red";
    } else {
        document.getElementById("city").style.backgroundColor = "transparent";
        cityErr = false;
    }

    if (state == "select") {
        document.getElementById("state").style.backgroundColor = "red";
    } else {
        document.getElementById("state").style.backgroundColor = "transparent";
        stateErr = false;
    }

    if (zipcode == "" || zipcode < 0 || /^[1-9]\d*$/.test(zipcode) === false) {
        document.getElementById("zipcode").style.backgroundColor = "red";
    } else {
        document.getElementById("zipcode").style.backgroundColor = "transparent";
        zipcodeErr = false;
    }

    if (country == "select") {
        document.getElementById("country").style.backgroundColor = "red";
    } else {
        document.getElementById("country").style.backgroundColor = "transparent";
        countryErr = false;
    }

    // Contact Information Validation

    if (number1 == "" || number1 < 0 || /^[1-9]\d{9}$/.test(number1) === false) {
        document.getElementById("number1").style.backgroundColor = "red";
    } else {
        document.getElementById("number1").style.backgroundColor = "transparent";
        number1Err = false;
    }

    if (number2 == "") {
        document.getElementById("number2").style.backgroundColor = "transparent";
        number2Err = false;
    } else if (number2 < 0 || /^[1-9]\d{9}$/.test(number2) === false) {
        document.getElementById("number2").style.backgroundColor = "red";
    } else {
        document.getElementById("number2").style.backgroundColor = "transparent";
        number2Err = false;
    }

    if (emergencynum == "" || emergencynum < 0 || /^[1-9]\d{9}$/.test(emergencynum) === false) {
        document.getElementById("emergencynum").style.backgroundColor = "red";
    } else {
        document.getElementById("emergencynum").style.backgroundColor = "transparent";
        emergencynumErr = false;
    }

    // Medical Information Validation

    if (height == "" || (height < 0 || height > 300)) {
        document.getElementById("height").style.backgroundColor = "red";
    } else {
        document.getElementById("height").style.backgroundColor = "transparent";
        heightErr = false;
    }

    if (weight == "" || (weight < 0 || weight > 650)) {
        document.getElementById("weight").style.backgroundColor = "red";
    } else {
        document.getElementById("weight").style.backgroundColor = "transparent";
        weightErr = false;
    }

    if (physicianname == "") {
        document.getElementById("physicianname").style.backgroundColor = "transparent";
        physiciannameErr = false;
    } else if (/^[a-zA-Z\s]+$/.test(physicianname) === false) {
        document.getElementById("physicianname").style.backgroundColor = "red";
    } else {
        document.getElementById("physicianname").style.backgroundColor = "transparent";
        physiciannameErr = false;
    }

    if (physiciannumber == "") {
        document.getElementById("physiciannumber").style.backgroundColor = "transparent";
        physiciannumberErr = false;
    } else if (physiciannumber < 0 || /^[1-9]\d{9}$/.test(physiciannumber) === false) {
        document.getElementById("physiciannumber").style.backgroundColor = "red";
    } else {
        document.getElementById("physiciannumber").style.backgroundColor = "transparent";
        physiciannumberErr = false;
    }

    if (medicalreport == "") {
        document.getElementById("medicalreport").style.backgroundColor = "transparent";
        medicalreportErr = false;
    } else if (/(\.jpg|\.jpeg|\.png|\.pdf)$/.test(medicalreport) === false) {
        document.getElementById("medicalreport").style.backgroundColor = "red";
    } else {
        document.getElementById("medicalreport").style.backgroundColor = "transparent";
        medicalreportErr = false;
    }

    // Insurance Information Validation

    if (personname == "") {
        document.getElementById("personname").style.backgroundColor = "transparent";
        personnameErr = false;
    } else if (/^[a-zA-Z\s]+$/.test(personname) === false) {
        document.getElementById("personname").style.backgroundColor = "red";
    } else {
        document.getElementById("personname").style.backgroundColor = "transparent";
        personnameErr = false;
    }

    if (insurancename == "") {
        document.getElementById("insurancename").style.backgroundColor = "transparent";
        insurancenameErr = false;
    } else if (/^[a-zA-Z\s]+$/.test(insurancename) === false) {
        document.getElementById("insurancename").style.backgroundColor = "red";
    } else {
        document.getElementById("insurancename").style.backgroundColor = "transparent";
        insurancenameErr = false;
    }

    if (policyname == "") {
        document.getElementById("policyname").style.backgroundColor = "transparent";
        policynameErr = false;
    } else if (/^[a-zA-Z\s]+$/.test(policyname) === false) {
        document.getElementById("policyname").style.backgroundColor = "red";
    } else {
        document.getElementById("policyname").style.backgroundColor = "transparent";
        policynameErr = false;
    }

    if (insurancedocument == "") {
        document.getElementById("insurancedocument").style.backgroundColor = "transparent";
        insurancedocumentErr = false;
    } else if (/(\.jpg|\.jpeg|\.png|\.pdf)$/.test(insurancedocument) === false) {
        document.getElementById("insurancedocument").style.backgroundColor = "red";
    } else {
        document.getElementById("insurancedocument").style.backgroundColor = "transparent";
        insurancedocumentErr = false;
    }

    if ((todaysdateErr || formnumberErr || firstnameErr || middlenameErr || lastnameErr || DOBErr || ageErr || sexErr || maritalstatusErr || bloodgroupErr || aadharnumErr || ayushmannumErr || emailidErr || addressline1Err || cityErr || stateErr || zipcodeErr || countryErr || number1Err || number2Err || emergencynumErr || occupationErr || heightErr || weightErr || physiciannameErr || physiciannumberErr || medicalreportErr || personnameErr || insurancenameErr || policynameErr || insurancedocumentErr) === true) {
        return false;
    } else {
        alert("Your form is sucessfully submitted");
    }
}

// Generate Form Number

function formnumbergenerate() {
    let alphabet = '';
    for (let i = 0; i < 6; i++) {
        const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        alphabet += randomChar;
    }
    document.getElementById("formnumber").value = alphabet.substring(0, 3) + Math.floor(1000 + Math.random() * 9000) + alphabet.substring(3);
}

// Reset

function resetform() {
    document.getElementById("todaysdate").style.backgroundColor = "transparent";
    document.getElementById("formnumber").style.backgroundColor = "transparent";
    document.getElementById("firstname").style.backgroundColor = "transparent";
    document.getElementById("middlename").style.backgroundColor = "transparent";
    document.getElementById("lastname").style.backgroundColor = "transparent";
    document.getElementById("DOB").style.backgroundColor = "transparent";
    document.getElementById("age").style.backgroundColor = "transparent";
    document.getElementById("sex").style.backgroundColor = "transparent";
    document.getElementById("maritalstatus").style.backgroundColor = "transparent";
    document.getElementById("bloodgroup").style.backgroundColor = "transparent";
    document.getElementById("aadharnum").style.backgroundColor = "transparent";
    document.getElementById("ayushmannum").style.backgroundColor = "transparent";
    document.getElementById("emailid").style.backgroundColor = "transparent";
    document.getElementById("occupation").style.backgroundColor = "transparent";
    document.getElementById("addressline1").style.backgroundColor = "transparent";
    document.getElementById("city").style.backgroundColor = "transparent";
    document.getElementById("state").style.backgroundColor = "transparent";
    document.getElementById("zipcode").style.backgroundColor = "transparent";
    document.getElementById("country").style.backgroundColor = "transparent";
    document.getElementById("number1").style.backgroundColor = "transparent";
    document.getElementById("number2").style.backgroundColor = "transparent";
    document.getElementById("emergencynum").style.backgroundColor = "transparent";
    document.getElementById("height").style.backgroundColor = "transparent";
    document.getElementById("weight").style.backgroundColor = "transparent";
    document.getElementById("physicianname").style.backgroundColor = "transparent";
    document.getElementById("physiciannumber").style.backgroundColor = "transparent";
    document.getElementById("medicalreport").style.backgroundColor = "transparent";
    document.getElementById("personname").style.backgroundColor = "transparent";
    document.getElementById("insurancename").style.backgroundColor = "transparent";
    document.getElementById("policyname").style.backgroundColor = "transparent";
    document.getElementById("insurancedocument").style.backgroundColor = "transparent";
}



// © 2024 Mayank Seth. All rights reserved.

// This code is the intellectual property of Mayank Seth. It is protected by copyright law. Unauthorized copying, distribution, modification, or use of this code, in whole or in part, is strictly prohibited.

// Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
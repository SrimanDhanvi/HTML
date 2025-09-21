
function enterValue() {

    var personInfo1 = {
    name : document.getElementById('name1').value,
    dob : document.getElementById('dob1').value,
    email : document.getElementById('email1').value,
    phone : document.getElementById('phone1').value,
    address : document.getElementById('address1').value
    };
    
    
    document.getElementById('data1').innerHTML = `
    <td> ${personInfo1.name}</td>
    <td> ${personInfo1.dob}</td>
    <td> ${personInfo1.email}</td>
    <td> ${personInfo1.phone}</td>
    <td> ${personInfo1.address}</td>
    `;

    var personInfo2 = {
    name : document.getElementById('name2').value,
    dob : document.getElementById('dob2').value,
    email : document.getElementById('email2').value,
    phone : document.getElementById('phone2').value,
    address : document.getElementById('address2').value
    };
    
    
    document.getElementById('data2').innerHTML = `
    <td> ${personInfo2.name}</td>
    <td> ${personInfo2.dob}</td>
    <td> ${personInfo2.email}</td>
    <td> ${personInfo2.phone}</td>
    <td> ${personInfo2.address}</td>
    `;


    var personInfo3 = {
    name : document.getElementById('name3').value,
    dob : document.getElementById('dob3').value,
    email : document.getElementById('email3').value,
    phone : document.getElementById('phone3').value,
    address : document.getElementById('address3').value
    };
    
    
    document.getElementById('data3').innerHTML = `
    <td> ${personInfo3.name}</td>
    <td> ${personInfo3.dob}</td>
    <td> ${personInfo3.email}</td>
    <td> ${personInfo3.phone}</td>
    <td> ${personInfo3.address}</td>
    `;

    var personInfo4 = {
    name : document.getElementById('name4').value,
    dob : document.getElementById('dob4').value,
    email : document.getElementById('email4').value,
    phone : document.getElementById('phone4').value,
    address : document.getElementById('address4').value
    };
    
    
    document.getElementById('data4').innerHTML = `
    <td> ${personInfo4.name}</td>
    <td> ${personInfo4.dob}</td>
    <td> ${personInfo4.email}</td>
    <td> ${personInfo4.phone}</td>
    <td> ${personInfo4.address}</td>
    `;

    var personInfo5 = {
    name : document.getElementById('name5').value,
    dob : document.getElementById('dob5').value,
    email : document.getElementById('email5').value,
    phone : document.getElementById('phone5').value,
    address : document.getElementById('address5').value
    };
    
    
    document.getElementById('data5').innerHTML = `
    <td> ${personInfo5.name}</td>
    <td> ${personInfo5.dob}</td>
    <td> ${personInfo5.email}</td>
    <td> ${personInfo5.phone}</td>
    <td> ${personInfo5.address}</td>
    `;


    console.log(personInfo1.name);
    console.log(personInfo1.dob);
    console.log(personInfo1.email);
    console.log(personInfo1.phone);
    console.log(personInfo1.address);
};
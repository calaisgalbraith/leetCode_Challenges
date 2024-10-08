/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let re = /(\.)/g;
    return address.replaceAll(re, '[.]')
};

// First fix version 
// var defangIPaddr = function(address) {
//     return address.replaceAll('.', '[.]')
// };

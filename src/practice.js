function capitalize(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverse(str) {
    if (str==""){
    return '';
    }
    else{
        return reverse(str.substring(1)) +str.charAt(0);
    }
}
console.log(reverse('hello'));
export {capitalize, reverse};
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
class Calc{
    add(x,y){
        return x + y;
    }
    sub(x,y){
        return x - y;
    }
    mult(x,y){
        return x * y;
    }
    divide(x,y){
        return (x / y);
    }
}
class caesarModule{
    encrypt(text, shift) {
        // Create the alphabet.
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const upperalpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptedText = [];
        for (let i = 0; i < text.length; i++) {
            // Get the current character.
            const currentChar = text[i];
            if(upperalpha.includes(currentChar)){
                const index= upperalpha.indexOf(currentChar);

                const newIndex = (index + shift) % upperalpha.length;
          
                const encryptedChar = upperalpha[newIndex];
          
                encryptedText.push(encryptedChar);
            }
            else if(alphabet.includes(currentChar)) {
                // Get the index of the current character in the alphabet.
                const index = alphabet.indexOf(currentChar);
          
                // Shift the index by the shift value.
                const newIndex = (index + shift) % alphabet.length;
          
                // Get the letter at the new index in the alphabet.
                const encryptedChar = alphabet[newIndex];
          
                // Add the encrypted character to the encrypted text array.
                encryptedText.push(encryptedChar);
              }
            else {
              // as-is.
              encryptedText.push(currentChar);
            }
          }
        return encryptedText.join('');
    }
      
      

    code(shift){
        //const alpha = Array.from(Array(26)).map((e,i) => i +65);
         //const alphabet = alpha.map((x) => String.fromCharCode(x));
        const loweralpha =  Array.from(Array(26)).map((e,i) => (shift-97) % 26 +97 );
        const loweralphabet = loweralpha.map((x) => String.fromCharCode(x));
        return loweralphabet;

    }
}
function analyze(array){

}
export {capitalize, reverse,Calc,caesarModule,analyze};
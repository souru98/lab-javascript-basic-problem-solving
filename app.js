// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let Prograd_1 = "Sourabh";
console.log("The driver name is " + Prograd_1);
let Prograd_2 = "Risha";
console.log("The navigator name is " + Prograd_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let Prograd_1 = "Sourabh";
let Prograd_2 = "Risha";
var l = 0;
while (Prograd_1[l] != "undefined")
    l++;
var l2 = 0;
while (Prograd_2[l2] != "undefined")
    l2++;
if (l1 > l2) {
    console.log("The driver has the longest name, it has " + l + "characters");

}
esle
if (l < l2) {
    console.log("It seems that the navigator has the longest name, it has " + l2 + "characters");
} else
    console.log("Wow, you both have equally long names, XX characters!");




// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
var me = "Sourabh";
var vowel_count = 0;
for (var i = 0; i < me.length; i++) {
    if (me[i] == "a" || me[i] == "A" || me[i] == "e" || me[i] == "E" || me[i] == "i" || me[i] == "I" || me[i] == "o" || me[i] == "O" || me[i] == "u" || me[i] == "U") {
        console.log(me[i] + " ");
        vowel_count++;
    }
}
if (vowel_count != 0) {
    console.log("\n");
    console.log(vowel_count);
} else
    console.log("no vowels");




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let Prograd_2 = "Risha";
var uppercase_count_prograd_2 = 0;
var lowercase_count_prograd_2 = 0;
length = 0;
for (length = 0; length < length_Prograd_2; length++) {
    if (ProGrad_2 >= 'a' && ProGrad_2 <= 'z')
        lowercase_count_prograd_2++;
    else
        lowercase_count_prograd_2++;
}
console.log("upper_count_prograd_2" + uppercase_count_prograd_2);
console.log("lower_count_prograd_2" + lowercase_count_prograd_2);





// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let driver = "ProGrad";

var i = 0;
while (driver[i] != "undefined") {
    console.log(driver[i] + " ");
    i++;
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let nav = "ProGrad";
var length = o;
while (nav[length] != "undefined")
    length++;
for (var i = length - 1; i >= 0; i--)
    console.log(nav[i]);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
let driver = "ProGrad";
let navigator = "FACEPrep";
console.log("ProGrad" + "FACEPrep");
console.log("FACEPrep" + " " + "ProGrad");

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let ProGrad_1 = "ProGrad";
let ProGrad_2 = "FACEPrep";
var n = Prograd_1.localeCompare(Prograd_2);
if (n == 1) {
    console.log("The drivers's name goes first");

} else if (n == -1) {
    console.log("Yo,the navigator goes first definitely");
} else {

    console.log("what?! You both have the same name ");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Curabitur sodales ligula in libero.Sed dignissim lacinia nunc.Curabitur tortor.Pellentesque nibh.Aenean quam.In scelerisque sem at dolor.Maecenas mattis.Sed convallis tristique sem.Proin ut ligula vel nunc egestas porttitor.Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.Fusce ac turpis quis ligula lacinia aliquet.Mauris ipsum.Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in , nibh.Quisque volutpat condimentum velit.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Nam nec ante.Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.Nulla facilisi.Ut fringilla.Suspendisse potenti.Nunc feugiat mi a tellus consequat imperdiet.Vestibulum sapien.Proin quam.Etiam ultrices.Suspendisse in justo eu magna luctus suscipit.Sed lectus.Integer euismod lacus luctus magna.Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam " ;
var words = 0;
var i = 0;
var latin_count = 0;
var prev = 0;
while (s[i] != undefined) {
    if (s[i] == " ") {
        words++;
        let check = s.substring(prev, i);
        if (check == "Latin")
            latin++;
        prev = i + 1;
    }
}
console.log(words);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
length = 0;
let s2 = neveroddoreven;
while (s2[length] != undefined)
    length++;
var i = 0,
    j = length - 1;
for (i = 0, j = length - 1; i < j; i++, j--) {
    if (s2[i] != s2[j])
        console.log("not palindrome");
}
if (i > j) {
    console.log("Palindrome");
}



// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
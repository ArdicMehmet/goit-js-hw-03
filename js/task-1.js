function slugify(title){
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-'); // Küçük harfler ve rakamlar harici herşeyi değiştiricek
}
console.log("----------- Gorev 1 -------------");
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
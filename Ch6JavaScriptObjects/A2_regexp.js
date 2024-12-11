text = "Javascript  is  fun!";

regex1= /a/;
console.log(text.match(regex1));

regex2= /a/g;
console.log(text.match(regex2));

regex3= /java/gi;
console.log(text.match(regex3));


text = text.replace(/\s+/g, ";");
console.log(text);

 text2 = "hello hellooooo world!";
 console.log(text2.search(/lo+/));

//regex object

emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email="jdoe@abis.be";
console.log(emailRegex.test(email));


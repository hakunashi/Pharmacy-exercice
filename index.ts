import Client from "./Client";
import Doctor from "./Doctor";
import Pharmacy from "./Pharmacy";
import Drug from "./Drug";

// You will have to write classes

/**
 * EXO 1
 */
// firstname lastname money sickness
var client1 = new Client("JP", "BLOND", 1000, "stomack ache");
var client2 = new Client("Naivo", "RASOLOFO", 1500, "head ache");
console.log(client1, client2)

// firstname, lastname, price
var doc = new Doctor("toky", "RASOLOFO", 30);
console.log(doc)

/**
 * EXO 2
 */
// Order is a class with 3 fields, doctor, client, drugName (array of strings)
// if "stomack ache" -> spasfon
// if "head ache" -> paracetamol
var order1 = doc.treat(client1);
console.log(order1)

// client has a field order that can be set
client1.setOrder(order1);
console.log(client1.getOrder())

// drugName, price

var paracetamol = new Drug("paracetamol", 3);
var ibuprofene = new Drug("ibuprofene", 4);
var spasfon = new Drug("spasfon", 3.5);


/**
 * EXO 3
 */
// address
var pharma = new Pharmacy("25 rue Emile Raspail");

// drug, number of box
pharma.addToStock("paracetamol", 100);
pharma.addToStock("ibuprofene", 100);
pharma.addToStock("spasfon", 50);

console.log(pharma.getStock())

// after client paying doc
var payDoc = client1.getMoney(doc.getPrice()); // 970
console.log(payDoc)

/**
 * EXO 4
 */
// sell appropriate drug to Client
// take his money for drug price
// decreasing stock
pharma.treat(client1);

client1.getMoney(1); // 976.5

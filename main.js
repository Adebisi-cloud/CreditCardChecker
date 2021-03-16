// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
//Using the Luhn ALgorithm to check the credit card number
const credCardCheck = credNum => {
let numSum = 0;
for(i = 0; credNum.length-1; i >= 0, i--) {
  let currentNum = credNum[i];
}
//Easier to use the card length minis 1 in order to count the card numbers 0 when multiplication is needed
if((credNum.length-1 -i)%2 ===1){
currentNum * 2;
if(currentNum > 9)
currentNum -= 9;
}
numSum+= currentNum;
}
//return numSum;
//Checking if any credit card pass when it is valid credit card number
const validateCard = credCard => {
  return credCardCheck(credCard)% 10 === 0;
}
const validateCred = ([ ])=> {
  if(creditCardNumber === valid ) {
    return true ;
  } 
   else if (creditCardNumber === invalid) {
     return false;
   }
   //Using validate card to find invalid car numbers in anested array and return all the invalid number in a nested array
   const findInvalidCard = [];
   for(let i =0; i < credCards.length; i++){

   
   //if the card fails validation it gets added to the invlid card array
   if(!validateCred(credCards[i]))
   invalidateCards.push(credCard[i]);
   }
   return inValidCards;
//Going through a nested array of cred cards and attached the compamies in conjunction with the number base on the first digit
const inValidCardCopamy = inValidCards =>{
  let companiesArray = [];
  let company = " ";
}
//Going through each card number checking the first digit
for(let i=0; i < inValidCards.length; i++);
  if(inValidCards[i][0]===3);
company = "Amex(American Express)";
 if(inValidCards[i][0]===4);
company = "Visa";
 if (inValidCards[i][0]===5);
company = "MasterCard";
 if(inValidCards[i][0]===6)
 company ="Discover";
  console.log('Company not found');
//Checks if company name is already in the array before adding it
if(comapniesArray.IndexOf(company)=== -1);
companiesArray.push(company)
  return companyArray;
//Converting a string of a creditCard number into an array of digits
const credNumstring = credNumString=>{
  return Array.from(string(credNumString),Number);
}
//Taking an invalid credit card number and returning a new valid number while keeping the first digit
const fixInValidCard = inValidCard => {
  let newCard = [];
  //keeping the first digit
  newCard.push(inValidCard[0]);
  //generting a new number before the last digit
  for(let i = 0; i < inValidCard.length-2; i++){
    newCard.push(Math.floor(Math.random()*10));
  }
  //insert a zero to complete the Luhn algorith correctly and remove if its only card is inValid
 newCard.push(0);
 let lastDigit = creditCardCheck(new(Card));
 if(lastDigit % 10 === 0) 
 return newCard;
 newCard.pop();
 //Using the returned total to calculate the last digit needed in order to validate the new random credit card number 
 lastDigit = 10-(lastDigit % 10);
 newCard.push(lastDigit);
 return newcard;
}


};

  
  
  

  









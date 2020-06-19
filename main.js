let mainElement = document.querySelector('.katas-list')

//KATA 1 --Kahlil Enmond
let kata1Heading = document.createElement('h3')
mainElement.append(kata1Heading)
kata1Heading.append('KATA 1: ')

for (let counter = 1; counter <= 20; counter +=1) {
    kata1Heading.append(counter);
}

//KATA 2 --Khalil Enmond
let kata2Heading = document.createElement('h3')
mainElement.append(kata2Heading)
kata2Heading.append('KATA 2: ') 

for (let counter = 0; counter <= 20; counter += 2) {
    kata2Heading.append(counter);
}

//KATA 3 --Khalil Enmond
let kata3Heading = document.createElement('h3')
mainElement.append(kata3Heading)
kata3Heading.append('KATA 3: ')

for (let counter = 1; counter <= 19; counter += 2 ) {
    kata3Heading.append(counter);
    
}

//KATA 4 --Khalil Enmond
let kata4Heading = document.createElement('h3')
mainElement.append(kata4Heading)
kata4Heading.append('KATA 4: ')

for (let counter = 5; counter <= 100; counter += 5) {
    kata4Heading.append(counter);
    
}

//KATA 5 --me
let kata5Heading = document.createElement('h3')
mainElement.append(kata5Heading)
kata5Heading.append('KATA 5: ')

for (let counter = 1; counter <= 10 ; counter +=1) {
   kata5Heading.append(counter*counter) ;
    
}

//KATA 6 --me
let kata6Heading = document.createElement('h3')
mainElement.append(kata6Heading)
kata6Heading.append('KATA 6: ')

for (let counter = 20; counter >= 1; counter -= 1) {
    kata6Heading.append(counter);
    
}

//KATA 7 --me
let kata7Heading = document.createElement('h3')
mainElement.append(kata7Heading)
kata7Heading.append('KATA 7: ')

for (let counter = 20; counter >= 2; counter -= 2) {
   kata7Heading.append(counter) ;
    
}

//KATA 8 --me
let kata8Heading = document.createElement('h3')
mainElement.append(kata8Heading)
kata8Heading.append('KATA 8: ')

for (let counter = 19; counter >= 1; counter -= 2) {
    kata8Heading.append(counter);
    
}

//KATA 9 --Georgette Turner
let kata9Heading = document.createElement('h3')
mainElement.append(kata9Heading)
kata9Heading.append('KATA 9: ')

for (let counter = 100; counter >= 1 ; counter -= 5) {
   kata9Heading.append(counter) ;
    
}

//KATA 10 --Georgette Turner
let kata10Heading = document.createElement('h3')
mainElement.append(kata10Heading)
kata10Heading.append('KATA 10: ')

for (let counter = 10; counter >= 1; counter -= 1) {
    kata10Heading.append(counter*counter);
    
}

//KATA 11 --Georgette Turner
let kata11Heading = document.createElement('h3')
mainElement.append(kata11Heading)
kata11Heading.append('KATA 11: ')

let sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
 kata11Heading.append(sampleArray)
    
//KATA 12  --Lorne Jenkins
let kata12Heading = document.createElement('h3')
mainElement.append(kata12Heading)
kata12Heading.append('KATA 12: ')


let newArray = []  
for (let counter = 0; counter <= sampleArray.length; counter += 1) {
    let sampleArrayElement =  sampleArray[counter]
    if (sampleArrayElement %2 === 0){
        newArray.push(sampleArrayElement)
    }
}
kata12Heading.append(newArray)

//KATA 13
let kata13Heading = document.createElement('h3')
mainElement.append(kata13Heading)
kata13Heading.append('KATA 13: ')

let newArray13 = []
for (let counter = 0; counter <= sampleArray.length; counter += 1) {
    let sampleArrayElement = sampleArray[counter];
    if (sampleArrayElement %2 !== 0) {
        newArray13.push(sampleArrayElement)
    }
    
}
kata13Heading.append(newArray13)

//KATA 14 
let kata14Heading = document.createElement('h3')
mainElement.append(kata14Heading)
kata14Heading.append('KATA 14: ')

let kata14Array = []
for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let sampleArrayElement = sampleArray[counter];
    kata14Array.push(sampleArrayElement*sampleArrayElement)
}
kata14Heading.append(kata14Array)

//KATA 15 -- Lorne Jenkins
let kata15Heading = document.createElement('h3')
mainElement.append(kata15Heading)
kata15Heading.append('Kata 15: ')
let numSum = 0
for (let counter = 1; counter <= 20 ; counter += 1) {
    numSum=numSum+counter
}
    kata15Heading.append(numSum)

//KATA 16 --Lorne Jenkins
let kata16Heading = document.createElement('h3')
mainElement.append(kata16Heading)
kata16Heading.append('KATA 16: ')

let numSumKata16 = 0
for (let counter = 0; counter < sampleArray.length ; counter ++) {
    numSumKata16=numSumKata16+sampleArray[counter]
}
    kata16Heading.append(numSumKata16)

//KATA 17 --Lorne Jenkins
let kata17Heading = document.createElement('h3')
mainElement.append(kata17Heading)
kata17Heading.append('Kata 17: ')
let kata17Array = sampleArray.sort(function(a, b){return a-b})
 kata17Heading.append(kata17Array[0])




//KATA 18 --lorne Jenkins
let kata18Heading = document.createElement('h3')
mainElement.append(kata18Heading)
kata18Heading.append('KATA 18: ')

let kata18Array = sampleArray.sort(function(a, b){return a-b})
 kata18Heading.append(kata18Array[sampleArray.length -1])




function printString(someString){
  if (someString.length > 1){
    	console.log(someString[0])
      printString(someString.substring(1,someString.length))
	} else {
    	console.log(someString)
	}
}

function reverseString(someString){
	if (someString.length > 1){
    	return (someString[someString.length - 1]) + reverseString(someString.substring(0,someString.length - 1))
	} else {
    	return someString
	}
}

function isPalindrome(someString){
  if (someString[0] === someString[someString.length - 1]){
    if (someString.length > 1){
      return isPalindrome(someString.slice(1,-1))
    } else {
      return true
    }
  } else {
    return false
  }
}

function addUpTo(array, givenIndex, addendum, currentIndex){
  if (!currentIndex){
    addendum = array[0]
    currentIndex = 1
  }
  if (currentIndex <= givenIndex){
    addendum += array[currentIndex]
    return addUpTo(array, givenIndex, addendum, currentIndex + 1)
  } else {
    return addendum
  }
}

function maxOf(array, i, currentMax){
  if(!i){
    currentMax = array[0]
    i = 1
  }
  if (i < array.length){
    if (array[i] > currentMax){
      currentMax = array[i]
    }
    return maxOf(array, i + 1, currentMax)
  } else {
    return currentMax
  }
}

function includesNumber(array, num, i=0){
  if (num == array[i]){
    return true
  } else if(i < array.length){
    return includesNumber(array, num, i + 1)
  } else {
    return false
  }
}

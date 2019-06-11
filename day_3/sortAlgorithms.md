## Insertion Sort

function inSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let save = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > save; j--){
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = save;
  }
  return arr;
}

console.log(inSort([8, 9, 1]) // [1, 8, 9]


const insertionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

console.log(inSort([8, 9, 1]) // [1, 8, 9]


let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

console.log(inSort([8, 9, 1]) // [1, 8, 9]

# Selection Sort

function selSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minNum = arr[i];
    let swap = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (minNum > arr[j]) {
        minNum = arr[j];
        swap = j;
      }
    }
   	if (i !== swap) {
    	const tmp = arr[i];
      arr[i] = minNum;
      arr[swap] = tmp;
  	}
  }
  return arr
}
 console.log(selSort([2, 7, 1, 9])) // [1, 2, 7, 9]


function SelectionSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if(newArr[i] - arr[j] > 0){
        newArr[i + 1] = newArr[i];
        newArr[i] = arr[j];
        arr.splice(j, 1)
      } else {
        newArr[i + 1] = arr[j];
        arr.splice(j, 1)
      }
    }
  }
  return newArr;
}

console.log(selSort([2, 7, 1, 9])) // [1, 2, 7, 9]

# Bubble sort


# Merge sort

function mergeSort(arr){
 	if (arr.length === 1) {
    return arr
  }

	let mitad = Math.floor(arr.length/2) // 2
  let izq = arr.slice(0, mitad) // [6, 2] -> 6 -> 4
  let der = arr.slice(mitad) // [4, 1] -> 2 -> 1

  return merge (
  mergeSort(izq),
  mergeSort(der)
  )
}

function merge(izq, der) {
  result = []; // 1, 2, 4
  inIzq = 0
  inDer = 0

  while (inIzq < izq.length && inDer < der.length) {
    if (izq[inIzq] < der[inDer]){
      result.push(izq[inIzq]);
      inIzq++
    } else {
      result.push(der[inDer]);
      inDer++
    }
  }
  //return result.concat(izq).concat(der)
  return result.concat(izq.slice(inIzq).concat(der.slice(inDer)))
}

console.log(mergeSort([6, 2, 4, 1]);

# Buble sort (bonus)

// Ejercicio Fila           

function bubble(arr){

	obj = {};
  for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] += 1;
      }
      let aux=arr[i]
      arr[i]=arr[j]
      arr[j]=aux
    }
  }
 }
  keys = Object.keys(obj)
  for (keys in obj) {
    if(obj[keys] > 2) {
    return -1
    }
  }
	return 1
}

console.log(bubble([2, 1, 3, 5, 4])) // 1
console.log(bubble([2, 5, 1, 4, 3])) // -1
console.log(bubble([5, 1, 2, 3, 6, 4])) // -1

function bubbleSort(arr){

  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let aux=arr[i]
        arr[i]=arr[j]
        arr[j]=aux
      }
    }
  }
  return arr
}

console.log(bubbleSort([2, 1, 3, 5, 4])) // 1
console.log(bubbleSort([2, 5, 1, 4, 3])) // -1
console.log(bubbleSort([5, 1, 2, 3, 6, 4])) // -1
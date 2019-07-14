function bubble(arr) {

	obj = {};
  for (let i=0;i<arr.length-1;i++) {
	  for (let j=i+1;j<arr.length;j++) {
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

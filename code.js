function miniMaxSum(arr) {
    // Write your code here
   
    arr.sort()
    let maxFilter = arr.slice(1).reduce((acc,n)=>acc+n,0)
    arr.reverse()
    let minFilter = arr.slice(1).reduce((acc,n)=>acc+n,0)
    
    let output = (`${minFilter},${maxFilter}`)
    return output
    
}
//document.write(`[1,3,4,7,8] = ${miniMaxSum([1,3,4,7,8])}`)
let heading = document.querySelector("h1")
let results = document.querySelector("div")
results.innerHTML = `[1,3,4,7,8] = ${miniMaxSum([1,3,4,7,8])} 
[1,2,3,4,5] = ${miniMaxSum([1,2,3,4,5])}
[5,5,5,5,5] = ${miniMaxSum([5,5,5,5,5])}`
heading.append(results)

// [1,2,3,4,5] 10,14
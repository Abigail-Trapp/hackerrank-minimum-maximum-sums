function miniMaxSum(arr) {
    // Write your code here
    
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    
    let maxFilter = arr.filter(arr => arr !== max).reduce((acc,n)=>acc+n)
    let minFilter = arr.filter(arr => arr !== min).reduce((acc,n)=>acc+n)
    
    let output = (`${maxFilter},${minFilter}`)
    return output
    
}
//document.write(`[1,3,4,7,8] = ${miniMaxSum([1,3,4,7,8])}`)
let heading = document.querySelector("h1")
let results = document.querySelector("div")
results.innerHTML = `[1,3,4,7,8] = ${miniMaxSum([1,3,4,7,8])} 
[2,4,6,10,15] = ${miniMaxSum([2,4,6,10,15])}`
heading.append(results)


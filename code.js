function miniMaxSum(arr) {
    // Write your code here
    
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    
    let maxFilter = arr.filter(arr => arr !== max).reduce((acc,n)=>acc+n)
    let minFilter = arr.filter(arr => arr !== min).reduce((acc,n)=>acc+n)
    
    console.log(`${maxFilter} ${minFilter}`)
    
}
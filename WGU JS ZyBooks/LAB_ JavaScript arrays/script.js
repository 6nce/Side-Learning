// Put your solution here

function divideArray(nums) {
    let evenNums = [];
    let oddNums = [];
    for(let i = 0; i <= nums.length - 1; i++){
        if(nums[i] % 2 === 0) {
            evenNums.push(nums[i])
        } else {
            oddNums.push(nums[i])
        }
    }

    evenNums = evenNums.sort((a, b) => a - b)
    oddNums = oddNums.sort((a, b) => a - b)

    console.log("Even numbers:")
    if (evenNums.length != 0) {
        for(number in evenNums) {
            console.log(evenNums[number])
        }
    } else{
        console.log("None")
    }
    console.log("Odd numbers:")
    if (oddNums.length != 0) {
        for(number in oddNums) {
            console.log(oddNums[number])
        }
    } else{
        console.log("None")
    }
}
arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    if (i == 2) {
        arr.splice(2, 0, "100")
    }
    console.log(i + ": " + arr[i])
}

// console.log(arr)
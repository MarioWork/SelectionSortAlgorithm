function sort(numbers){
    var currentMin = 0;
    var currentMinPos = 0;


    for(var i = 0; i < numbers.length; i++){
        currentMin = numbers[i];

        for(var j = i+1; j < numbers.length; j++){
            if(currentMin>numbers[j]){
                currentMin = numbers[j];
                currentMinPos = j;
            }
        }

        if(numbers[i]!== currentMin){
            numbers[currentMinPos] = numbers[i];
            numbers[i]=currentMin;
        }
    }

    return numbers;
}

console.log(sort([100,5,99,3,4,1,0,8,2,1]));


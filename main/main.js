module.exports = function main(inputs) {
    console.log("Debug Info");
    var num=inputs.split("");
    var mArray = [["...","...","..."],["...","...","..."],["...","...","..."]];
    switch (num):
    {case 0:
             mArray[0][1]="_";
             mArray[1][0]="|";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
             mArray[2][2]="|";
            break;
     case 1:
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 2:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
            break;
     case 3:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 4:
            mArray[1][0]="|";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 5:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][0]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 6:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][0]="|";
            mArray[2][0]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 7:
             mArray[0][1]="_";
            mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 8:
            mArray[0][1]="_";
             mArray[1][0]="|";
            mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
             mArray[2][2]="|";
            break;
     case 9:
            mArray[0][1]="_";
             mArray[1][0]="|";
            mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
      }
    
    return 'Hello World!';
};

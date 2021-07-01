/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var sum = 0
    var romanObj = {
       I : 1,
       V : 5,
       X : 10,
       L : 50,
       C : 100,
       D : 500,
       M : 1000
   }
    
    for(var i = 0 ; i<s.length; i++)
    {
        var firstIndex = romanObj[s[i]];
        var secondIndex = romanObj[s[i+1]];
            
    if(firstIndex < secondIndex)
        {
        sum = sum + secondIndex - firstIndex
            i++
        }
    else
        {
         sum = sum + firstIndex   
        }
    }
    
        return sum
};
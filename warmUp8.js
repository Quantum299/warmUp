//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
<<<<<<< HEAD
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false




function isSubset(array1, array2) { 
      
    
    for(var i = 0; i < array1.length; i++) { 
         for(var j = 0; j < array2.length; j++) { 
            if(array1[i] === array2[j]) { 
             return true; 
            } 
        } 
       
       }          
         return false;     
      
  }  
     
=======
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
>>>>>>> 0ecd7df7ca8e85f13dd252f86764ccfb45b5a967

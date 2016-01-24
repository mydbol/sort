
describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        // test the merging algorithm
        expect(merge([99,100,201],[3,20,91])).toEqual( [3,20,91,99,100,201] )
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    
    expect(split([99,100,201,3,20,91])).toEqual( [[99,100,201],[3,20,91]] ) 
  });
});


describe('Performs a mergeSort', function() {
  it('is able to take an unsorted array and completed all step for a merge sort', function() {
    expect(mergeSort([10,2,6,9,4,5,6,8,1,3,7])).toEqual( [1,2,3,4,5,6,7,8,9,10] ) 
  });
});
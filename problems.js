/*
1.
[1,2,3,4]
2.
'ref'
3.
{Array(3) => true}
{Array(3) => false}
**/

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;


function vowelCount(string){
    vowel = 'aeiou';
    const vowelMap =new Map();

    for(let char of string){
        if(vowel.indexOf(char)!==-1){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char)+1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}

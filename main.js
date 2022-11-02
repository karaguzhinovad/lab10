
let lab1=[5,5,0,5,5,10,10]
let lab2=[5,5,5,5,5,5,10]
let lab3=[5,10,10,15]
let lab4_5=[10,5,5,5,5,5,8,10,10,10,0]
let lab6=[5,5,9,0,5,10]
let lab8=[5,10,10,10,5]
let lab=[lab1,lab2,lab3,lab4_5,lab6,lab8]
let quiz1=40

function get_sum(lab) {
    final_sum = 0;
    for (let i = 0; i < lab.length; i++) {
final_sum += lab[i];
}
return final_sum;
}


let sum1=get_sum(lab1);
let sum2=get_sum(lab2);
let sum3=get_sum(lab3);
let sum4=get_sum(lab4_5);
let sum6=get_sum(lab6);
let sum8=get_sum(lab8);
let sums=[sum1,sum2,sum3,sum4,sum6,sum8,quiz1];
let total_score=((sums[0]+sums[1]+sums[2]+sums[4]+sums[5]+sums[3])/280*60+(sums[6]/40)*40);
    
    function main(lab) 
{
    const_results = {
    lab1: [5,5,0,5,5,10,10], // array of scores for lab1
    lab2: [5,4,5,5,5,5,10], // array of scores for lab2
    lab3: [5,10,10,15], // array of scores for lab3
    lab4_5: [10,5,5,5,5,5,8,10,10,10,0], // array of scores for lab4 and 5
    lab6: [5,5,9,0,5,10], // array of scores for lab6
    lab8: [5,10,10,10,5], // array of scores for lab8
    quiz1: 40 , // score of quiz1
    sums: [sum1,sum2,sum3,sum4,sum6,sum8,quiz1], // array of sums of each lab
    total_score: total_score,
}
    return const_results
}  
    obj=main(lab)
console.log(obj)

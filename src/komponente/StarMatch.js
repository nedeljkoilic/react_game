import React,{useState, useEffect} from 'react';
import './StarMatch.css'
import Button from './Button';
import StarList from './StarList';
import PlayAgain from './PlayAgain';
function StarMatch(props) {
      // Color Theme
    const [stars, setStars]=useState(utils.random(1,9));
    const [availableNums,setAvailableNums]=useState([1,2,3,4,5,6,7,8,9]); 
    const [candidateNums,setCandidateNums]=useState([]);

    const [seconds, setSeconds] = useState(15);

  useEffect( ()=>{
    if (seconds>0 && gameStatus==='active') {
      const timer = setTimeout(() => {
        setSeconds(seconds-1);
      }, 1000);
     return () => clearTimeout(timer);
    }
   
  });

    
    const candidatesAreWrong = utils.sum(candidateNums)>stars;
    const gameStatus = availableNums.length===0 ? 'won' : seconds===0 ? 'lose' : 'active'; 

    const numStatus=(number)=>{
        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {

            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        
        return 'available'
    }
    const onNumClick=(status, number)=>{

        if (status==='used' || gameStatus!=='active') {
            return;
        }
        const newcandidateNums = status ==='available'? candidateNums.concat(number) : candidateNums.filter(n => n!== number);
        if (utils.sum(newcandidateNums) !== stars) {
            setCandidateNums(newcandidateNums);
        }else
        {
            const newavailableNums = availableNums.filter(
                n=> !newcandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newavailableNums,9));
            setAvailableNums(newavailableNums);
            setCandidateNums([]);

        }
    }
    return (
    <div>
      <div className='body'>
        <div className='lijevi'>
          {gameStatus!=='active' ? (
             <PlayAgain status = {gameStatus} onReset ={props.onReset}/>  
             
           ) : ( <StarList 
            utils = {utils} 
            stars={stars}
            />    )}
            
        </div>
        <div className='desni'>
            {utils.range(1,9).map(numId =><Button
                                         key={numId} 
                                         name={numId}
                                         status = {numStatus(numId)}
                                         onNumClick={onNumClick}
                                         />)}

        </div>
        
      </div>
      <h3>Time to solve: {seconds}</h3>
    </div>
    );
}
export default StarMatch;
 // Math science
 const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };
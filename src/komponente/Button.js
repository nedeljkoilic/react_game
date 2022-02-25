import './StarMatch.css';
function Button(props){
return(
    <button 
    className='number' 
    style={{backgroundColor :  colors[props.status]}}
    onClick={()=>props.onNumClick(props.status,props.name)}
    >{props.name}</button>
)
}
export default Button;

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
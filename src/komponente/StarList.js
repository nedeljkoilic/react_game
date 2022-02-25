import './StarMatch.css';
function StarList(props){
return(
    <>
    {props.utils.range(1,props.stars).map(starId =><div key={starId} className='star' />)}
    </>
)
}
export default StarList;
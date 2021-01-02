
const ValidationComponent = (props) =>{
  const numberText = props.lengthnumber <= 5 ? 'Text too Short' : 'Text Long Enough'
 
  return <>
    {numberText}  
  </>
}

export default ValidationComponent;
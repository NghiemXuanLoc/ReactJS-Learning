
function Heading(props){
  console.log(props)
  return (
    <h1>{props.name} - {props.address} - {props.age}</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = {
  name: 'Nghiem Xuan Loc',
  age: 21,
  address: 'Phu Xuyen'
}

root.render(<Heading {...user}>abc</Heading>);
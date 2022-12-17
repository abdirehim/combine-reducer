import { useSelector } from 'react-redux'
import './about.js'




const firstname = () => {
    const fname = useSelector(state=>state.firstname)

  return (
    <div>
         <button onClick={fname}>display</button>
        
    </div>

  )
}

export default firstname
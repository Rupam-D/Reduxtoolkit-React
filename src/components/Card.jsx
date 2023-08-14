
import { useSelector } from "react-redux/es/hooks/useSelector"
function Card() {
     const data = useSelector((state) => {
          return state.items
     })

     return (
          <div className="container">
               {
                    data.map((item) => (
                         <div className="card" key={item}>
                              <div className="card-body">
                                   {item}
                              </div>
                         </div>
                    ))
               }

          </div>
     )
}

export default Card

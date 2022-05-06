

 function Card(props){

  return(
     
       <div className="col-lg-4 col-md-6">
      <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.priceData.plan}</h5>
            <h6 className="card-price text-center">${props.priceData.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
             {
               props.priceData.features.map((feature)=>{
               return <li className={`${feature.bold ? 'fw-bold':''} ${feature.mute ? 'text-muted' : ''}`}>
                 <span className="fa-li">
                   <i className={`${feature.mute ? 'fas fa-times' : 'fas fa-check'}`}></i>
                   </span>  <strong>{feature.domain}</strong> {feature.name} </li>
              })
             }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
     </div>
    
 )
}

export default Card;

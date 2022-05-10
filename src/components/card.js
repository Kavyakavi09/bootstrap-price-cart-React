

 function Card({priceData:{plan,price,features}}){
      
  return(
     
       <div className="col-lg-4 col-md-6">
      <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{plan}</h5>
            <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
             {
               features.map(({bold,mute,name,domain})=>{
               return <li className={`${bold ? 'fw-bold':''} ${mute ? 'text-muted' : ''}`} key={{bold,mute,name,domain}}>
                 <span className="fa-li">
                   <i className={`${mute ? 'fas fa-times' : 'fas fa-check'}`}></i>
                   </span>  <strong>{domain}</strong> {name} </li>
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

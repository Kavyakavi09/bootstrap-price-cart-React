import './App.css';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css'



function App(){   
  let cardData=[
    {
     plan:"FREE",
     price: 0,
     features:[
       {
         name:"Single User",
         
       },
       {
         name:"5GB Storage",
       },
       {
         name:"Unlimited Public Projects",
       },
       {
         name:"Community Access"
       },
       {
         name:"Unlimited Private Projects",
         mute:true
       },
       {
        name:"Dedicated Phone Support",
        mute:true
      },
      {
        name:"Free Subdomain",
        mute:true
      },
      {
        name:"Monthly Status Reports",
        mute:true
      }
     ]
    },

    {
    plan:"PLUS",
    price: 9,
    features:[
      {
        name:"5 Users",
        bold:true
      },
      {
        name:"50GB Storage",
      },
      {
        name:"Unlimited Public Projects"
      },
      {
        name:"Community Access"
      },
      {
        name:"Unlimited Private Projects",
   
      },
      {
        name:"Dedicated Phone Support",
       
      },
      {
        name:"Free Subdomain",
   
      },
      {
        name:"Monthly Status Reports",
        mute:true
      }
    ]
    },

    {
    plan:"PRO",
    price: 49,
    features:[
      {
        name:"Unlimited Users",
        bold:true
      },
      {
        name:"150GB Storage",
      },
      {
        name:"Unlimited Public Projects"
      },
      {
        name:"Community Access"
      },
      {
        name:"Unlimited Private Projects"
      },
      {
        name:"Dedicated Phone Support"
      },
      {
        domain:"Unlimited",
        name:"Free Subdomains"
      },
      {
        name:"Monthly Status Reports"
      }
    ]
    },

  ]
  return (
  <div className="container-fluid pb-5 pt-3">
    <h2 className="text-center mb-3">Bootstrap Responsive Pricing Table</h2>
   <div className="row">
     <div className="col">
     <section className="pricing py-5">
     <div className="container">
    <div className="row">
       {
         cardData.map(card=>{
           return <Card priceData={card} key={card}></Card>
         })
       }
      </div>
     </div>
    </section>
     </div>
   </div>
  </div>
  );
}

export default App;

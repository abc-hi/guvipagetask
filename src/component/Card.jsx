import React from 'react';

const Card = ({item,index}) => {
    return (
        
            
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.head} />
                            <div className="card-body">
                                <h5 className="card-title">{item.head}</h5>
                                <h2 className="card-text" style={{fontsize:'100px'}}>{item.content}</h2><br />
                                <h4 className="card-text">{item.information}</h4>
                                <a class="elementor-post__read-more" href="https://www.guvi.in/blog/backend-development-roadmap/">
Read More » </a>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">{item.date}</h6>
                                <h6 className="text-muted">{item.month}</h6>
                                <h6 className="text-muted">{item.year}</h6>

                            </div>
                        </div>
                    </div>
        
    );
};

export default Card;
// <div key={index}>
{/* or  <div key={SVGTextContentElement.id}></div> */}
 
//    <img src={item.image} />
//    <h1>{item.head}</h1>
//    <h1>{item.content}</h1>
//    <h1>{item.information}</h1>
//    <h1>{item.date}</h1>
//    <h1>{item.month}</h1>

    

     

  // </div>
import React from 'react';




const Cybersecurity = ({ data }) => {
    // Filter data for Cybersecurity category
    const CybersecurityData = data.filter(item => item.head === 'Cybersecurity Development');

    return (
        <div className='d-flex flex-wrap'>

        <div>
            {/* <h1>Cybersecurity</h1> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {CybersecurityData.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.head} />
                            <div className="card-body">
                                <h5 className="card-title">{item.head}</h5>
                                <h2 className="card-text" >{item.content}</h2>
                                <h3 className="card-text">{item.information}</h3>
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
                ))}
            </div>
        </div>
        </div>
    );

}


export default Cybersecurity;
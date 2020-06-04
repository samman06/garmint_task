import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BusinessesData extends Component {

    render() {
        const {businesses} = this.props;
        const businessesInfo = businesses.map(business => (
            <div key={business.id} className="card card-body col-12 col-md-5 col-lg-5 m-3 bg-light mb-3">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-5">
                            <img src={business.image_url} alt={business.image_url} width="150px" height="100px" className="rounded-circles"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <Link to={`/${business.id}`}> <h3>{business.name}</h3></Link>
                        <h3>
                            <span>
                                price: {business.price} and {" "}
                            </span>
                            <span>
                                reviews: {business.review_count}
                            </span>
                        </h3>
                        <h4>{business.location.display_address.join(" ")}</h4>
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="row justify-content-around">
                {businessesInfo}
            </div>
        )
    }
}

export default BusinessesData;

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBusinessesData} from "../../actions/businessesActions";

class BusinessesData extends Component {
    componentDidMount =async ()=> {
        console.log(this.props.history.location.pathname);
        await this.props.getBusinessesData(this.props.history.location.pathname);
        console.log(1);
    }

    render() {
        let {business} = this.props.business;
        console.log(this.props.business);
        let businessesInfo;
        if(business){
            businessesInfo =  (
                <div key={business.id} className="card justify-content-around card-body col-12 m-3 bg-light mb-3">
                    <div className="row">
                        <div className="col-3">
                            <div className="mb-5">
                                <img src={business.image_url} alt={business.image_url} width="100%" height="200px" className="rounded-circles"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <Link to={`/${business.id}`}> <h3>{business.name}</h3></Link>
                            <h3>
                                <span>
                                    price: {business.price} and {" "}
                                </span>
                                <span>
                                    reviews: {business.review_count}
                                </span>
                            </h3>
                            <h3>rating : {business.rating}</h3>
                            <h3>phone : {business.phone}</h3>
                            <h3>display_phone: : {business.display_phone}</h3>
                            <h4>{business.location.display_address.join(" ")}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="row justify-content-around">
                {businessesInfo}
            </div>
        )
    }
}


BusinessesData.protoTypes = {
    getBusinessesData: PropTypes.func.isRequired,
    business: PropTypes.object.isRequired,
};
const mapStateToProps = ({business}) => ({business});

export default connect(mapStateToProps, {getBusinessesData})(BusinessesData);

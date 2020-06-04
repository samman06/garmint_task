import React, {Component} from 'react';
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {GetData,sort,filterPrice} from "../../actions/businessesActions"
import SearchDate from "./SearchDate";
import BusinessesData from "./BusinessesData";
class Businesses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}, name: "", location: "",price:"",businesses:[],
        };
    };
    onChange = async (event) => {
        const {name,value} = event.target;
        await this.setState({[name]: value});
        if (name==="price") await this.filterPrice(value);
    };
    search = async () => {
        const {name,location}= this.state;
        if(name && location){
            let businesses = await this.props.GetData(name,location);
            this.setState({errors:{},businesses})
        }else {
            let nameErr,locationErr;
            if(!name)  nameErr="the name is required";
            if(!location)  locationErr="the name is required";
            this.setState({errors:{nameErr,locationErr}})
        }
    };
    sort = async () => {
        let {businesses} = this.props.business;
        console.log(businesses);
        this.props.sort(businesses);
    };
    filterPrice = async (price) => {
        let {businesses} = this.state;
        console.log(businesses);
        this.props.filterPrice(price,businesses);
    };

    render() {
        let { name, location,errors} = this.state;
        let {businesses,allPrice} = this.props.business;
        let businessesData;
        if (businesses.length === 0) {
            businessesData = <h3 className="m-5">businesses are loading or there is no business</h3>
        } else {
            businessesData = <BusinessesData businesses={businesses}/>
            allPrice = allPrice.map((price,index )=> <option key={index} value={price}>{price}</option>);

        }
        return (
            <div className="container">
                <SearchDate
                    name={name} location={location}
                    onChange={this.onChange}
                    search={this.search}
                    errors={errors}
                />
                <div className="row">
                    <div className="form-group col-2">
                        <select className="form-control " name="price" onChange={this.onChange}>
                            <option value="0">Select Category</option>
                            {allPrice}
                        </select>
                    </div>
                    <div className="form-group col-2">
                        <button  className="form-control btn btn-warning mr-4"
                                onClick={() => this.sort("name")}>
                            Sort
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 border m-2">

                        {businessesData}
                    </div>
                </div>
            </div>
        );
    }
}

Businesses.protoTypes = {
    getData: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    filterPrice: PropTypes.func.isRequired,
    business: PropTypes.object.isRequired,
};
const mapStateToProps = ({business,allPrice}) => ({business,allPrice});

export default connect(mapStateToProps, {GetData,sort,filterPrice})(Businesses);

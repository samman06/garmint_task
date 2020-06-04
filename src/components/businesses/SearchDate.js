import React from 'react';

class SearchDate extends React.Component {

    onChange = (event) => this.props.onChange(event);
    search = () => this.props.search();

    render() {
        const {name, location} = this.props;
        const {nameErr,locationErr} = this.props.errors;
        return (
            <div className="row">
                <div className="col-12 col-md-5 col-lg-5 m-1">
                        <input value={name} placeholder="name" name="name" type="text" className="form-control"
                               onChange={this.onChange}/>
                        {nameErr && <h5 style={{color: 'red'}}>{nameErr}</h5>}
                </div>
                <div className="col-12 col-md-5 col-lg-5 m-1 ">
                        <input value={location} placeholder="location" name="location" type="text" className="form-control" onChange={this.onChange}/>
                        {locationErr && <h5 style={{color: 'red'}}>{locationErr}</h5>}
                </div>
                <div className="col-12 col-md-1 col-lg-1 m-1 " >
                    <button className="offset-1 btn btn-success" onClick={this.search}>Search</button>
                </div>
            </div>
        );
    };
}

export default SearchDate

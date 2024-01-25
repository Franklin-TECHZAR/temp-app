import { Component } from "react";

class Form extends Component {
    temp_user = {
        name: "",
        email: "",
        mobile: ""
    }
    state = this.temp_user;

    input_changed()
    {

    }


    render() {
        return (
            <>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onClick={this.input_changed} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" onClick={this.input_changed} />
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" className="form-control" name="email" onClick={this.input_changed} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </>
        )
    }

}

export default Form;
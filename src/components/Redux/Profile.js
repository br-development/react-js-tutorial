import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
    render(){
        return (
            <div>
                {this.props.user === null ? 'Not logged' : this.props.user.username}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { user } = state;
    return { user };
};

export default connect(
    mapStateToProps,
    null
)(Profile);
import React from "react";
import PropTypes from "prop-types"

const Counter = (props) => {
    const {one, two, three, four, five, six} = props
    return (
        <div className="container">
            <div className="row d-flex justify-content-center bg-dark font p-20">
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded py-3"><i class="fa-solid fa-clock"></i></div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{six}</div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{five}</div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{four}</div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{three}</div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{two}</div>
                <div className="col-1 bg-number my-5 mx-1 d-flex justify-content-center align-items-center border text-align-center rounded p-0">{one}</div>
            </div>
        </div>
    )
}
Counter.propTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,
    five: PropTypes.number,
    six: PropTypes.number
}

export default Counter
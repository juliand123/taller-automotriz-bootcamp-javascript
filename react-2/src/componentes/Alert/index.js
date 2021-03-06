
import React from "react";
import "./Alert.css";

function Alert({alertSwitch = ()=>{}}) {
 return (<div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Opps!</strong> Algo esta muy mal, por favor vuelve a intentarlo!.
        <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={alertSwitch}
        >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    )
}
export default Alert;
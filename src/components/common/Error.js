import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import error_img from "../../assets/images/error.gif";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="error-main">
            <div className="error-message text-center">
              <img src={error_img} alt="error-img" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

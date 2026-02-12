import "./index.css";
export function Login() {
  return (
    <>
      <div className="parent">
        <div className="square">
          <div className="column_1">
            <div>Login</div>
            <div>
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvNbGSLJppIHT_6Myu81FBF4cgvxT5H7YiqWy3HBq42Z6ElrEz-6YF-oknuVHD7nSYog&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7k7398iqzuzv1DOyAulGskFOxolex7gmeVBk-X7eKfHVG1l6GNZqGOe0rG-iw9NSv--Y&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="content_1">or use your account</div>
            <div className="rectangle">Email</div>
            <div className="rectangle">Password</div>
            <div className="content_2">Forgot your password?</div>
            <div>LOG IN</div>
          </div>

          <div className="column_2">
            <div>HTML CSS</div>
            <div>Facebook login page Clone using HTML and CSS</div>
          </div>
        </div>

        <div className="child">Open Sandbox</div>
      </div>
    </>
  );
}

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const SignIn = () => {
    const {signInUser,signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
            if (result) {
                swal("success!", "You successfully login here,Thank You!", "success");
              }
             e.target.reset();
             navigate(location?.state ? location.state : '/'); 
              
        })
        .catch(error =>{
            if (error) {
                swal("Oops!", "This Email and Password does not match !", "error");
              }
        })

    }

    const handleSignInGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }


    return (
        <div className="hero py-8 bg-base-200">
            <div>
                <div className="text-center mb-7">
                    <h1 className="text-5xl font-bold">SignIn now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold">SignIn</button>
                        </div>
                        <div>
                            <p>New User ? Please <Link to="/signUp" className="text-2xl text-blue-700 font-bold ml-2">SignUp</Link> </p>
                        </div>
                        <p className="text-xl text-center font-bold">OR</p>
                        <p>SignIn With 
                            <Link><button
                            onClick={handleSignInGoogle} 
                            className="btn btn-primary ml-3 font-bold">Google</button></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
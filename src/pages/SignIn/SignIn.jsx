import { Link } from "react-router-dom";

const SignIn = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <button className="btn btn-primary">SignIn</button>
                        </div>
                        <div>
                            <p>New User ? Please <Link to="/signUp" className="text-2xl text-blue-700 font-bold ml-2">SignUp</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
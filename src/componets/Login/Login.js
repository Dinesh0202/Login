import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import UserContext from "../../contexts/UserContext";



function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    const onSubmit = (data) => {
        console.log(data)
        axios.post(`http://localhost:4000/api/auth//login`,data).then((res)=>{

        localStorage.setItem('userData', JSON.stringify(res.data));
        setUserData(res.data);
        navigate('/home', { replace: true }, res.data)
       /// alertify.success('Successfully Login');     
       })
    }


    return (
        <>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter">


                        <div class="col-md-12 bg-lights">
                            <div class="login d-flex align-items-center py-5">

                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8 col-xl-4 mx-auto mb-6">
                                            <h3 class="display-4 heading-h3">Sign in</h3>
                                            <p class="heading-p mb-4">Create a login split page using Reactjs & Bootstrap 5.</p>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div class="mb-4">
                                                    <input id="inputEmail" type="email" placeholder="Email address" autofocus="" class="form-control border-0 shadow-sm px-4" {...register("email", { required: "Email Address is required" })}
                                                        aria-invalid={errors.email ? "true" : "false"}
                                                    />
                                                    {errors.email && <p className="valid-txt">{errors.email?.message}</p>}

                                                </div>
                                                <div class="mb-4">
                                                    <input id="inputPassword" type="password" placeholder="Password" class="form-control  border-0 shadow-sm px-4 text-primary"
                                                        {...register("password", { required: "Password is required" })}
                                                        aria-invalid={errors.password ? "true" : "false"}
                                                    />
                                                    {errors.password && <p className="valid-txt">{errors.password?.message}</p>}
                                                </div>
                                                <div class="form-check">
                                                    <input id="customCheck1" type="checkbox" checked class="form-check-input" />
                                                    <label for="customCheck1" class="form-check-label">Remember password</label>

                                                </div>

                                                <div class="d-grid gap-2 mt-2">
                                                    <button type="submit" class="btn btn-success btn-block text-uppercase mb-2  shadow-sm">Sign in</button>
                                                </div>


                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
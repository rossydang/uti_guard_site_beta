'use client'
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            console.error(error);
        } else {
            console.log(result);
            router.push("/admin");
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="mb-4">Sign In</h1>
                            <form onSubmit={handleForm}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;

import { useContext, useState } from "react";
import { cn } from "../lib/utils";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        await loginUser(email, password);
    };

    return (

        <div className="bg-card p-8 rounded-lg shadow-xs" id='login' onSubmit={submitHandler}>
            <h2 className="text-2xl font-semibold mb-6">Login</h2>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">{" "} Your Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus-outlind-hidden focus:ring-2 focus:ring-primary'
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        id = "password"
                        name = "password"
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus-outlind-hidden focus:ring-2 focus:ring-primary'
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button 
                type="submit"
                className={cn("button w-full flex items-center justify-center gap-2")}>Login</button>
            </form>
        </div>
    );

};
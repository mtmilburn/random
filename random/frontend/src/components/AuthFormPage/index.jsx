import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { signUp, logIn } from "../../../utils/backend"


export default function AuthFormPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { formType } = useParams()
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    
async function handleSubmit(event) {
    // prevent the page from refreshing when the form is submitted
    event.preventDefault()
    // check what the URL parameter is to determine what request to make
    if (formType === 'login') {
        const { token } = await logIn(formData)
        localStorage.setItem('userToken', token)
    } else {
        const { token } = await signUp(formData)
        localStorage.setItem('userToken', token)
    }
    // redirect to the home page after signing/logging in
    navigate('/')
}


    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'

    return (
        <div className="flex items-center justify-center h-[90vh]">
            <div className="bg-blue-950 shadow-xl p-8 w-full max-w-md">
            <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">
                {actionText} 
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-yellow-300 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full p-2 text-gray-900 focus:outline-none focus:ring focus:border-blue-600"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-yellow-300 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full p-2 text-gray-900  focus:outline-none focus:ring focus:border-blue-600"
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                    <button type="submit"
                    className="w-full py-2 px-4 bg-yellow-300 text-black hover:bg-yellow-500 transition duration-300">
                    {actionText}
                    </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

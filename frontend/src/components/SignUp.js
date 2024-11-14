import React from 'react';
import { useForm, Controller } from 'react-hook-form';  // Importing useForm and Controller from react-hook-form
import axios from 'axios';

const SignUp = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();  // Using useForm for form management

    const onSubmit = async (data) => {
        // Destructuring data from the form
        const { username, password, role } = data;

        try {
            // Sending data to the backend
            const response = await axios.post('http://localhost:8000/register/', {
                username, 
                password, 
                role
            });
            alert('User created successfully');
        } catch (error) {
            alert('Error creating user');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: "Username is required" }}
                        render={({ field }) => <input {...field} type="text" />}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Password is required" }}
                        render={({ field }) => <input {...field} type="password" />}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div>
                    <label>Role</label>
                    <Controller
                        name="role"
                        control={control}
                        defaultValue="Student"
                        render={({ field }) => (
                            <select {...field}>
                                <option value="Student">Student</option>
                                <option value="Counselor">Counselor</option>
                                <option value="Psychometrician">Psychometrician</option>
                            </select>
                        )}
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
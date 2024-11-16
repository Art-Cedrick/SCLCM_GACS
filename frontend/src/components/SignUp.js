import React from 'react';
import { useForm, Controller } from 'react-hook-form';  // Importing useForm and Controller from react-hook-form
import axios from 'axios';

const SignUp = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm();  // Using useForm for form management

    const onSubmit = async (data) => {
        const { username, password, role } = data;
        console.log('Data being sent:', { username, password, role });  // Check data being sent
    
        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                password,
                role: role.toLowerCase()  // Ensure the role is always lowercase
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            alert('User created successfully');
            reset();
        } catch (error) {
            console.error('Error:', error.response ? error.response : error.message);  // Log full error response
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
                        defaultValue=""  // Explicitly setting defaultValue to avoid uncontrolled to controlled transition
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
                        defaultValue=""  // Explicitly setting defaultValue to avoid uncontrolled to controlled transition
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
                        defaultValue="Student"  // default value for role
                        render={({ field }) => (
                            <select {...field}>
                                <option value="student">student</option>
                                <option value="counselor">counselor</option>
                                <option value="psychometrician">psychometrician</option>
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

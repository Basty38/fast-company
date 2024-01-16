import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator.js";
import TextField from "../common/form/textField.jsx";
import CheckBoxField from "../common/form/checkBoxField.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const { logIn } = useAuth();
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);
    const history = useHistory();

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        setEnterError(null);
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValidBtn = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        try {
            await logIn(data);
            history.push("/");
        } catch (error) {
            setEnterError(error.message);
        }
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна к заполнению"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен к заполнению"
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            {enterError && <p className="text-danger">{enterError}</p>}
            <button
                type="submit"
                disabled={!isValidBtn || enterError}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default LoginForm;

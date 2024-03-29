import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator.js";
import TextField from "../common/form/textField.jsx";
import SelectField from "../common/form/selectField.jsx";
import RadioField from "../common/form/radioField.jsx";
import MultiSelectField from "../common/form/multiSelectField.jsx";
import CheckBoxField from "../common/form/checkBoxField.jsx";
import { useQualities } from "../../hooks/useQualities.jsx";
import { useProfessions } from "../../hooks/useProfession.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });

    const { signUp } = useAuth();
    const { qualities } = useQualities();
    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id
    }));

    const { professions } = useProfessions();
    const professionsList = professions.map((prof) => ({
        label: prof.name,
        value: prof._id
    }));

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
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
        const newData = {
            ...data,
            qualities: data.qualities.map((qual) => qual.value)
        };
        try {
            await signUp(newData);
            history.push("/");
        } catch (error) {
            setErrors(error);
        }
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна к заполнению"
            },
            isEmail: {
                message: "Почта введена не корректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен к заполнению"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать минимум одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без лицензионного соглашения"
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

            <SelectField
                label="Выберите вашу профессию"
                defaultOption="Choose..."
                name="profession"
                options={professionsList}
                value={data.profession}
                onChange={handleChange}
                error={errors.profession}
            />

            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualitiesList}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Выберите ваши качества"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Подтвердите <a>лицензионное соглашение</a>
            </CheckBoxField>

            <button
                type="submit"
                disabled={!isValidBtn}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;

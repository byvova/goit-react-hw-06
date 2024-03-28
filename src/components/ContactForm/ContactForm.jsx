import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import css from './ContactForm.module.css'

export const ContactForm = ({ setContacts }) => {

    const updateContacts = (name, number) => {
        setContacts(prevContacts => ([
            ...prevContacts,
            {
                id: nanoid(),
                name: `${name}`,
                number: `${number}`
            }
        ]));
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name cannot exceed 50 characters'),
        number: Yup.string()
            .required('Number is required')
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number cannot exceed 50 characters')
    });

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                updateContacts(values.name, values.number);
                actions.resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form
                    className={css.formContainer}>
                    <p className={css.formText}>Name</p>
                    <Field name="name" />
                    {errors.name && touched.name && <p>{errors.name}</p>}
                    <p className={css.formText}>Number</p>
                    <Field name="number" />
                    {errors.number && touched.number && <p>{errors.number}</p>}
                    <button className={css.formBtn} type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    );
};

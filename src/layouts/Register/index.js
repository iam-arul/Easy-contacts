import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react';
import Header from '../../components/Header';

const RegisterForm = ({formData : {form, onChange, isRegisterFormValid, onSubmit, loading, fieldErrors}}) => {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style={{maxWidth:500}}>
                    <SemanticHeader>Register Form</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input value={form.uName || ""} name="uName" onChange={onChange} type="text" label="User name" placeholder="User name" error={fieldErrors.username && {
                                    content : fieldErrors.username,
                                    pointing : "below"
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.fName || ""} name="fName" onChange={onChange} type="text" label="First name" placeholder="First name" error={fieldErrors.first_name && {
                                    content : fieldErrors.first_name,
                                    pointing : "below"
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.lName || ""} name="lName" onChange={onChange} type="text" label="Last name" placeholder="Last name" error={fieldErrors.last_name && {
                                    content : fieldErrors.last_name,
                                    pointing : "below"
                                }}/> 
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.email || ""} name="email" onChange={onChange} type="email" label="Email" placeholder="Email" error={fieldErrors.email && {
                                    content : fieldErrors.email,
                                    pointing : "below"
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.password || ""} name="password" onChange={onChange} type="password" label="Password" placeholder="Password" error={fieldErrors.password && {
                                    content : fieldErrors.password,
                                    pointing : "below"
                                }}/>
                            </Form.Field>
                            <Button loading={loading} onClick={onSubmit} disabled={isRegisterFormValid || loading} type='submit' fluid primary>Submit</Button>
                            <Segment>Already have an account? <Link to="/auth/login">Login</Link></Segment>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>     
      </div>
    )
}

export default RegisterForm;

import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header as SemanticHeader, Message, Segment } from 'semantic-ui-react';
import Header from '../../components/Header';

const LoginForm = ({formData : {form, onChange, isLoginFormValid, onSubmit, loading, error}}) => {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style={{maxWidth:500}}>
                    <SemanticHeader>Login Form</SemanticHeader>
                    <Segment>
                        {error &&  <Message negative content={error?.detail} /> }
                        <Form>
                            <Form.Field>
                                <Form.Input value={form.username || ""} name="username" onChange={onChange} type="text" label="User name" placeholder="User name" />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input value={form.password || ""} name="password" onChange={onChange} type="password" label="Password" placeholder="Password" />
                            </Form.Field>
                            <Button loading={loading} onClick={onSubmit} disabled={isLoginFormValid || loading} type='submit' fluid primary>Submit</Button>
                            <Segment>Need an account? <Link to="/auth/register">Register</Link></Segment>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>     
      </div>
    )
}

export default LoginForm;

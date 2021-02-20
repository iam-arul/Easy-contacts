import React, { useRef } from 'react'
import { Prompt } from 'react-router-dom';
import { Button, Card, Form, Grid, Header as SemanticHeader, Icon, Image, Input, Select } from 'semantic-ui-react';
import Header from '../../../components/Header'
import countryCodes from '../../../utils/countryCodes';
import './index.css';

function CreateContactForm({formData : {form,onSubmit, onChange,onClear,isFormInvalid, loading, formIsHalfFilledOut, imageOnChange, tempFile}}) {
    const imageRef = useRef(null);
    
    const chooseImage = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    }

    return (
        <div>
            <Prompt when={formIsHalfFilledOut} message={JSON.stringify({
                header : 'You have unsaved changes',
                content : 'Are you sure you want to discard your unsaved changes?'
            })} />
            <Header/>
            <Grid centered>
                <Grid.Column className='form-column'>
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            {tempFile &&
                            <>
                                <div className='contact-picture-thumb'>
                                    <Image src={tempFile} /> 
                                    <Button content='Edit' icon='edit' onClick={chooseImage} labelPosition='left' />
                                </div> 
                            </> }
                            <input ref={imageRef}  onChange={imageOnChange} type='file' hidden/>
                            {!tempFile &&
                            <div className='contact-picture' onClick={chooseImage}>
                                <span>Choose file</span>
                            </div>
                            }
                            
                            <Form unstackable>
                            <Form.Group widths={2}>
                                <Form.Input onChange={onChange} value={form.firstName || ''} label='First name' name='firstName' placeholder='First name' />
                                <Form.Input onChange={onChange} value={form.lastName || ''} label='Last name' name='lastName' placeholder='Last name' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input onChange={onChange}  value={form.country || ''} control={Select} options={countryCodes} label='Country' name='country' placeholder='Country' />
                                <Form.Input onChange={onChange}  value={form.phoneNumber || ''} label='Phone Number' name='phoneNumber' placeholder='Phone Number' />
                            </Form.Group>
                            <Form.Checkbox checked={form.isFavourite || false} onChange={(e, data) => {
                                onChange(e, {name : 'isFavourite', value : data.checked})
                            }} name='isFavourite'label='Is Favorite' />
                            <Button  onClick={onSubmit} loading={loading} disabled={isFormInvalid} primary type='submit' >Submit</Button>
                            <Button onClick={onClear} secondary type='submit'>Clear</Button>
                            </Form>
                        </Card.Content>
                    </Card>

                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CreateContactForm;

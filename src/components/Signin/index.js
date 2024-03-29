import React from 'react'
import { 
    Container, 
    FormButton, 
    FormInput, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    Text
 } from './SigninElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Yisuax</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}
<FormWrap>
    <Icon to="/">

    </Icon>
</FormWrap>
export default SignIn;
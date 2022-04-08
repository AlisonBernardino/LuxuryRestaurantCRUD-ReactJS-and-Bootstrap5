import {React, useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginScreen = (props) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="usernameLabel">
                        Username:
                    </Label>
                    <Input id="usernameInput" name="usernameField" placeholder="Insert it here..." type="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="passwordLabel"> 
                        Password:
                    </Label>
                    <Input id="passwordInput" name="passwordField" type="password"/>
                </FormGroup>
            </Form>
            <Button color="primary" outline>
                Login
            </Button>
            <Button color="warning" outline>
                Clear
            </Button>
            <Button color="danger" outline>
                Exit
            </Button>
        </div>
    )
}

export default LoginScreen;
import React, {useRef,useState} from 'react'

import {Form,Button,Card,Alert} from "react-bootstrap"
import {useAuth} from "../src/contexts/AuthContext"

import {Link, useHistory} from "react-router-dom"

export default function SignUp() {
    
    const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef=useRef()
const {signup, currentUser} = useAuth()
const [error, setError] = useState("")
const [loading, setLoading]= useState(false)
const history = useHistory()
 async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){

        return setError("Password do not match")
    }
   
   try{ 
    setError("")  
    setLoading(true) 
    await signup(emailRef.current.value,passwordRef.current.value)
    history.push("/")}
   catch{setError("Failed to create an account")}

   setLoading(false)
}
    return (
        <div>

          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {currentUser && currentUser.email}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id="password-confirm">
                          <Form.Label>Confirm password</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                          <Button disabled={loading} className="w-100" type="submit"> Sign Up</Button>
                      </Form.Group>
                  </Form>
              </Card.Body>
          </Card>
                <div className="w-100 text-center mt-2">


                    Alredy have an account? <Link to="./login">Log in</Link>
                </div>

          
            
        </div>
    )
}

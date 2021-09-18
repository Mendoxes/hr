import React, {useState} from 'react'
import {Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../src/contexts/AuthContext"
import {useHistory} from "react-router-dom"
function Dashboard() {

    const [error, setError]= useState("")
    const {currentUser,logout}= useAuth()
const history = useHistory()

    async function handleLogout(){
        setError("")
        try{
await logout()
history.push("/")



        }
        catch{
            setError("cannot log out")
        }

    }


    async function bookHoliday(){
    
history.push("/book-holiday")



  


    }
    return (
        <div>
            <Card>
<Card.Body>

    <h2 className="text-center mb-4"> Profile</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <strong>Email:</strong> {currentUser.email}
</Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">


                 <Button variant="link" onClick={handleLogout}>Log Out</Button>
                 <Button variant="link" onClick={bookHoliday}>Book your holidays</Button>
                </div>
        </div>
    )
}

export default Dashboard

import { Container, Box, Center, Heading, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LoginComponent } from '@/AppComponents/LoginComponent';
import { SignupComponent } from '@/AppComponents/SignupComponent';

function Auth() {
    const [currentTab, setCurrentTab] = useState("Signup");
    const handleSignupTab = () => {
        setCurrentTab("Signup")
    }
    const handleLoginTab = () => {
        setCurrentTab("Login")
    }
    return (
        <Container minH={"100vh"} maxW={"full"} display="flex"
            alignItems="center"
            justifyContent="space-evenly" flexDirection={"column"}>
            <Heading size={"4xl"} textShadow={"2px 2px  #9E9E9E"}>{currentTab}</Heading>
            <Center flexDirection={"column"} borderRadius={"10px"} border={"0.5px solid #dadada5b"} minW={{ base: "320px", md: "500px", lg: "600px" }} minH={{ base: "500px", md: "520px", lg: "540px" }}>
                <Flex justifyContent={"space-evenly"} w="100%" h="100px" >
                    <Button w="48%" h="98%" mt="4px" color={currentTab === "Signup" ? "#03A9F4" : ""} onClick={handleSignupTab} border={currentTab === "Signup" ? "3px solid #1976D2" : "none"}><Text letterSpacing="1.5px">Signup</Text></Button>
                    <Button w="48%" h="98%" mt="4px" color={currentTab === "Login" ? "#03A9F4" : ""} onClick={handleLoginTab} border={currentTab === "Login" ? "3px solid #1976D2" : "none"}><Text letterSpacing="1.5px" >Login</Text></Button>
                </Flex>
                {
                    currentTab === "Login" ? <LoginComponent /> : <SignupComponent />
                }
            </Center>
        </Container >
    )
}
export default Auth

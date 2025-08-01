import { Container, Box, Center, Heading, Button, Flex, Text, Field, Input, Spacer } from '@chakra-ui/react'
import { useState } from 'react';
export const SignupComponent = () => {
    const initState = {
        phone: "",
        email: "",
        password: "",
    }
    const [signup, setSignup] = useState(initState);
    const handleInputChnage = (e) => {
        const { name, value } = e.target;
        setSignup({ ...signup, [name]: value })
    }
    function signUpSubmit(e) {
        e.preventDefault()
        console.log(signup)
    }
    return (
        <Box minW={{ base: "320px", md: "500px", lg: "600px" }} borderBottomRadius={"10px"} minH={{ base: "400px", md: "420px", lg: "440px" }} >
            <Center w="100%" h={{ base: "400px", md: "420px", lg: "440px" }} flexDirection={"column"}>
                <Flex as="form" onSubmit={signUpSubmit} direction="column" align="center" gap={4}>

                    <Field.Root required w={{ base: "300px", md: "480px", lg: "580px" }}>
                        <Field.Label>
                            Phone
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="phone" value={signup.phone} onChange={handleInputChnage} placeholder="+91 9999999999" />
                    </Field.Root>


                    <Field.Root required w={{ base: "300px", md: "480px", lg: "580px" }}>
                        <Field.Label>
                            Email
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="email" value={signup.email} onChange={handleInputChnage} placeholder="me@example.com" />
                    </Field.Root>

                    <Spacer /> {/* Adds flexible space */}

                    <Field.Root required w={{ base: "300px", md: "480px", lg: "580px" }}>
                        <Field.Label>
                            Password
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="password" value={signup.password} onChange={handleInputChnage} placeholder="*********" />
                    </Field.Root>
                    <Button
                        type="submit"
                        mt="25px"
                        w="80%"
                        bg="#4FC3F7"
                        _hover={{ color: "#fff", bg: "#0288D1" }}
                    >
                        Sign Up
                    </Button>
                </Flex>
            </Center>
        </Box>
    )
}
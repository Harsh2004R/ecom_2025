import { Container, Box, Center, Heading, Button, Flex, Text, Field, Input, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

export const LoginComponent = () => {
    const initState = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(initState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value })
    }

    function loginSubmit(e) {
        e.preventDefault()
        console.log(login)
    }

    return (
        <Box minW={{ base: "320px", md: "500px", lg: "600px" }} borderBottomRadius={"10px"} minH={{ base: "400px", md: "420px", lg: "440px" }} >
            <Center w="100%" h={{ base: "400px", md: "420px", lg: "440px" }} flexDirection={"column"}>
                <Flex as="form" onSubmit={loginSubmit} direction="column" align="center" gap={4}>

                    <Field.Root required w={{ base: "300px", md: "480px", lg: "580px" }}>
                        <Field.Label>
                            Email
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="email" value={login.email} onChange={handleInputChange} placeholder="me@example.com" />
                    </Field.Root>

                    <Spacer /> {/* Adds flexible space */}

                    <Field.Root required w={{ base: "300px", md: "480px", lg: "580px" }}>
                        <Field.Label>
                            Password
                            <Field.RequiredIndicator />
                        </Field.Label>
                        <Input name="password" value={login.password} onChange={handleInputChange} placeholder="*********" />
                    </Field.Root>
                    <Button type='submit' mt="25px" w="80%" bg="#4FC3F7" _hover={{ color: "#fff" }}>Login</Button>
                </Flex>
            </Center>
        </Box>
    )
}
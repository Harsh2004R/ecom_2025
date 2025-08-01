import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { loginRequest } from "../Redux/Auth/action.js"
import { authRequestAction } from "../Redux/Auth/action.js"
import { Box, Center, Button, Flex, Field, Input, Spacer, Spinner, Text } from '@chakra-ui/react';


export const LoginComponent = () => {
    const dispatch = useDispatch();
    const { token, errorMessage, isLoading } = useSelector((store) => {
        return {
            token: store.authReducer.token,
            isLoading: store.authReducer.isLoading,
            errorMessage: store.authReducer.errorMessage,
        }
    }, shallowEqual)

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
        dispatch(authRequestAction());
        dispatch(loginRequest(login)).then((res) => {
            //    console.log(token, isError, isLoading)
            // we will show a toast here....
        }).catch((err) => {
            console.log("error from line 24", err)
        })
    }

    return (
        <Box minW={{ base: "320px", md: "500px", lg: "600px" }} borderBottomRadius={"10px"} minH={{ base: "400px", md: "420px", lg: "440px" }} >
            <Center w="100%" h={{ base: "400px", md: "420px", lg: "440px" }} flexDirection={"column"}>
                <Flex as="form" onSubmit={loginSubmit} direction="column" align="center" gap={4}>
                    {errorMessage && (
                        <Box borderTopRightRadius={"20px"} borderTopLeftRadius={"20px"} borderBottomLeftRadius={"20px"} w={"auto"} bg="#2b2b2bff" p={2} >
                            <Text color="#EF5350" textAlign="center">{errorMessage}</Text>
                        </Box>
                    )}
                    {token && (
                        <Box borderTopRightRadius={"20px"} borderTopLeftRadius={"20px"} borderBottomLeftRadius={"20px"}  w={"auto"} bg="#2b2b2bff" p={2} >
                            <Text color="#029d43ff" textAlign="center">{"Login Successful"}</Text>
                        </Box>
                    )}
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
                    <Button type='submit' mt="25px" w="80%" bg="#4FC3F7" _hover={{ color: "#fff" }}>
                        {isLoading ? <Spinner size="sm" /> : "Login"}
                    </Button>
                </Flex>
            </Center>
        </Box>
    )
}
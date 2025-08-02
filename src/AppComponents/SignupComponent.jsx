import { useState } from 'react';
import { signupRequest, authRequestAction } from "../Redux/Auth/action";
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { Box, Center, Button, Flex, Field, Input, Spacer, Text } from '@chakra-ui/react'

export const SignupComponent = ({ redirect }) => {

    const dispatch = useDispatch();
    const { errorMessage, isLoading, } = useSelector((store) => {
        return {
            isLoading: store.authReducer.isLoading,
            errorMessage: store.authReducer.errorMessage,
        }
    }, shallowEqual)
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
        // console.log(signup)
        dispatch(authRequestAction);
        dispatch(signupRequest(signup)).then((res) => {
            redirect("Login")
            // we will show a toast here....
        }).catch((err) => {
            console.log("error from line 24", err.message)
        })

    }
    return (
        <Box minW={{ base: "320px", md: "500px", lg: "600px" }} borderBottomRadius={"10px"} minH={{ base: "400px", md: "420px", lg: "440px" }} >
            <Center w="100%" h={{ base: "400px", md: "420px", lg: "440px" }} flexDirection={"column"}>
                <Flex as="form" onSubmit={signUpSubmit} direction="column" align="center" gap={4}>
                    {errorMessage && (
                        <Box borderTopRightRadius={"20px"} borderTopLeftRadius={"20px"} borderBottomLeftRadius={"20px"} w={"auto"} bg="#2b2b2bff" p={2} >
                            <Text color="#EF5350" textAlign="center">{errorMessage}</Text>
                        </Box>
                    )}
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
                        {isLoading ? <Spinner size="sm" /> : "Signup"}
                    </Button>
                </Flex>
            </Center>
        </Box>
    )
}
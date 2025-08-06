import React, { useState } from 'react'
import { logout } from "../Redux/Auth/action.js"
import { Container, Flex, Text, Image, Box, Center, Menu, Portal } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


function Navigator() {
    const isAuth = useSelector((store) => store.authReducer.isAuth)
    const dispatch = useDispatch();
    console.log("isAuth", isAuth)
    const [toggle, setToggle] = useState(false)
    // console.log(toggle);
    const handleLogout = () => {
        dispatch(logout);
    }

    const Links = [
        {
            name: "Home",
            path: "/",

        }, {
            name: "Auth",
            path: "/auth",
        },
        {
            name: "Product",
            path: "/product",

        }
        , {
            name: "Private Page",
            path: "/private",
        }
        , {
            name: "...",
            path: "/auth2568",
        }, {
            name: "...",
            path: "/auth24",
        }
        , {
            name: "...",
            path: "/auth22",
        }


    ]


    return (
        <Container
            // border={"1px solid red"}
            borderBottom={"1px solid #DADADA"}
            maxW={"full"}
            minH={"60px"}
            px="2"
            pos={"relative"}
            zIndex={"1000"}

        >


            <Box display={{ base: "none", md: "block", lg: "block" }}>

                <Flex>
                    <Box w={{ base: "40%", md: "40%", lg: "40%" }} h="60px" flex="1">
                        <Center borderRadius={"full"} w="60px" h="60px" border={"1px solid lime"}>
                            <Menu.Root>
                                <Menu.Trigger asChild>
                                    <Image borderRadius={"full"} w="90%" h="90%" src="https://avatar.iran.liara.run/public/1" alt="" />

                                </Menu.Trigger>
                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <Menu.ItemGroup>
                                                <Link to="/profile"> <Menu.ItemGroupLabel>Profile</Menu.ItemGroupLabel></Link>
                                                <Link to="/auth"> <Menu.ItemGroupLabel>Login</Menu.ItemGroupLabel></Link>
                                                <Menu.ItemGroupLabel onClick={handleLogout}>Logout</Menu.ItemGroupLabel>
                                            </Menu.ItemGroup>
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>
                        </Center>
                    </Box>
                    <Flex w={{ base: "60%", md: "60%", lg: "60%" }} h="60px">
                        {
                            Links.map((el) => (
                                <Center ml="20px" key={el.path}>
                                    <Link to={el.path}><Text >{el.name}</Text></Link>
                                </Center>
                            ))
                        }
                    </Flex>
                </Flex>
            </Box>


            {/*  Mobile Navigator from scratch... */}
            <Box w="100%" h="60px" justifyContent={"space-between"} display={{ base: "flex", md: "none", lg: "none" }}>
                <Center w="10%" h="100%">
                    <GiHamburgerMenu onClick={() => setToggle((prev) => !prev)} size="25px" />

                </Center>
                {
                    toggle && <Box bg="#18191aff" zIndex={"1001"} pos={"absolute"} top={"0"} left={"0"} borderRight={"1px solid #DADADA"} w="80%" minH={"100vh"}>
                        <Center w="16%" flexDir={"column"} h="60px">
                            <IoMdClose onClick={() => setToggle((prev) => !prev)} size="35px" />
                        </Center>
                        <Flex flexDir={"column"} w={"100%"} h="100%">
                            {
                                Links.map((el) => (
                                    <Box mt="25px" padding={"2"} key={el.path} borderBottom={"0.5px solid #a5a5a5ff"}>

                                        <Link to={el.path}><Text  >{el.name}</Text></Link>
                                    </Box>
                                ))
                            }
                        </Flex>
                    </Box>
                }

                <Center borderRadius={"full"} w="60px" h="60px" border={"1px solid lime"}>
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Image borderRadius={"full"} w="90%" h="90%" src="https://avatar.iran.liara.run/public/1" alt="" />

                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content>
                                    <Menu.ItemGroup>
                                        <Link to="/profile"> <Menu.ItemGroupLabel>Profile</Menu.ItemGroupLabel></Link>
                                        <Link to="/auth"> <Menu.ItemGroupLabel>Login</Menu.ItemGroupLabel></Link>
                                        <Menu.ItemGroupLabel onClick={handleLogout}>Logout</Menu.ItemGroupLabel>
                                    </Menu.ItemGroup>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                </Center>
            </Box>
        </Container>
    )
}
export default Navigator

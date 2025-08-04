import React from 'react'
import { Container, Flex, Text, Button, Image, Box, Avatar, Center, Menu, Portal } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Links = [
    {
        name: "Home",
        path: "/",

    }, {
        name: "Auth",
        path: "/auth",
    },
    {
        name: "...",
        path: "/1",

    }, {
        name: "...",
        path: "/auth1",
    },
    {
        name: "...",
        path: "/2",

    }, {
        name: "...",
        path: "/auth2",
    },


]


function Navigator() {
    return (
        <Container
            border={"1px solid red"}
            maxW={"full"}
            minH={"60px"}
            px="2"
        >






            <Box display={{ base: "none", md: "block", lg: "block" }}>


                <Flex>
                    <Box w={{ base: "40%", md: "40%", lg: "40%" }} h="60px" flex="1">
                        <Center borderRadius={"full"} w="60px" h="60px" >
                            <Menu.Root>
                                <Menu.Trigger asChild>
                                    <Image borderRadius={"full"} w="90%" h="90%" src="https://avatar.iran.liara.run/public/1" alt="" />

                                </Menu.Trigger>
                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <Menu.ItemGroup>
                                                <Menu.Item value="underline">Profile</Menu.Item>
                                                <Menu.ItemGroupLabel>Login</Menu.ItemGroupLabel>
                                                <Menu.Item value="bold">Logout</Menu.Item>
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
                                    <Link to={el.path}><Text>{el.name}</Text></Link>

                                </Center>

                            ))
                        }
                    </Flex>
                </Flex>
            </Box>

        </Container>
    )
}
{/* <GiHamburgerMenu /> */ }
export default Navigator

import { Box, Text, Grid, Button, Card, Image, } from '@chakra-ui/react'
import React from 'react'

function ProductCard() {
    return (
        <>
            <Grid padding={{ base: "2.5", md: "4.5", lg: "5.5" }} gap="10px" w="100%" h="auto" border={"1px solid #999"} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" }}>
                <Box transition={"0.45s ease-in"} _hover={{ transform: "scale(1.01)" }} padding={{ base: "1.5", md: "2.5", lg: "3.5" }} w={{ base: "100%", md: "100%", lg: "100%" }} borderRadius={"md"} minH={{ base: "300px", md: "320px", lg: "380px" }}>
                    <Card.Root>
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                        />
                        <Card.Body gap="2">
                            <Card.Title>Living room Sofa</Card.Title>
                            <Card.Description>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces.
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                $450
                            </Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid">Buy now</Button>
                            <Button variant="ghost">Add to cart</Button>
                        </Card.Footer>
                    </Card.Root>
                </Box>




            </Grid>
        </>
    )
}

export default ProductCard

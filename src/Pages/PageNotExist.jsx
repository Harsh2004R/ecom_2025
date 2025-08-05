import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function PageNotExisit() {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                as="h2"
                size="2xl"
                backgroundClip="text"
                color="teal.400"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you&apos;re looking for does not seem to exist
            </Text>

            <Button
            >
                <Link to="/"> Go to Home</Link>
            </Button>
        </Box>
    )
}
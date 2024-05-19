import { Container, Text, VStack, Box, Heading, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Ram Charan Reddy
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Python Developer
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="md">
            Email:{" "}
            <Link href="mailto:mr.ramcharanreddy@gmail.com" color="teal.500">
              mr.ramcharanreddy@gmail.com
            </Link>
          </Text>
          <Text fontSize="md">
            Phone:{" "}
            <Link href="tel:+916385655711" color="teal.500">
              6385655711
            </Link>
          </Text>
        </Box>
        <HStack spacing={4}>
          <IconButton as="a" href="mailto:mr.ramcharanreddy@gmail.com" aria-label="Email" icon={<FaEnvelope />} size="lg" />
          <IconButton as="a" href="tel:+916385655711" aria-label="Phone" icon={<FaPhone />} size="lg" />
          <IconButton as="a" href="https://github.com/your-github-username" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton as="a" href="https://linkedin.com/in/your-linkedin-username" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;

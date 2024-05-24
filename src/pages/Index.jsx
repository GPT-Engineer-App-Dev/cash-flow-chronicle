import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Markets
          </Link>
          <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
            World
          </Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/more" _hover={{ textDecoration: "none", color: "gray.400" }}>
            More
          </Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Top News Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Top News
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                News Headline 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/600x400" alt="News Image" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                News Headline 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar for Market Data */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h3" size="sm">
                Stock Price 1
              </Heading>
              <Text>123.45 USD</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Stock Price 2
              </Heading>
              <Text>678.90 USD</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Index 1
              </Heading>
              <Text>2345.67</Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">
                Index 2
              </Heading>
              <Text>8901.23</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
import { Container, Text, Image, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">Vatn Slektside</Text>
        <Image src="/images/garden-vatn-2005.jpg" alt="Gården Vatn" />
        <Text>Slektside for etterkommere til Lovise og Peder Vatn, Gården Vatn, Inderøy, Norge</Text>
        <Text>Contact Email: pervatn@hotmail.com</Text>
        <Text fontSize="xl" fontWeight="bold">News</Text>
        <Text>August 12, 2018 - Forhåndsinformasjon om kommende slektstreff 2019</Text>
        <Link as={RouterLink} to="/slektstreff2019">Slektstreff 2019</Link>
        <Link as={RouterLink} to="/tidigereslektstreffer">Tidigere slektstreffer</Link>
        <Link as={RouterLink} to="/historie">Historie</Link>
        <Link as={RouterLink} to="/kontakt">Kontakt</Link>
      </VStack>
    </Container>
  );
};

export default Index;
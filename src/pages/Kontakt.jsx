import { Container, Text, Input, Button, VStack } from "@chakra-ui/react";

const Kontakt = () => {
  return (
    <Container centerContent maxW="container.md" p={4}>
      <Text fontSize="2xl" mb={4}>Kontakt</Text>
      <VStack spacing={4}>
        <Input placeholder="Ditt navn" />
        <Input placeholder="Din e-post" />
        <Input placeholder="Emne" />
        <Input placeholder="Melding" type="textarea" />
        <Button colorScheme="blue">Send inn</Button>
      </VStack>
    </Container>
  );
};

export default Kontakt;
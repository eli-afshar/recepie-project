import { Image, Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Flex padding={4} minWidth="max-content" alignItems="center" gap="2">
      <Image borderRadius="full" boxSize="50px" src={Logo} color={"darkgray"} />
      <SearchInput />
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;

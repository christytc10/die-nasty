import { Heading } from "@chakra-ui/layout";
import { Flex, Spacer } from "@chakra-ui/react"
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <Flex
      p={3}
      borderBottom="2px"
      borderColor="red.200"
      cursor="pointer">
      <Heading as="h1" size="lg" m={1} onClick={() => router.push("/")}>Die Nasty</Heading>
      <Spacer />
      <Heading as="h4" size="sm" m={1} onClick={() => router.push("/rosters")}>Rosters</Heading>
      <Heading as="h4" size="sm" m={1} onClick={() => router.push("/trades")}>Trades</Heading>
  </Flex>
  );
}

import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

import RockImage from "../src/assets/real_rock.webp";

import Container from "./Container";
import "./animation.css";

export default function Home() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    document.startViewTransition(() =>
      navigate("/stadium", {
        state: { name: inputRef.current?.value },
      })
    );
  };

  return (
    <Container>
      <Text
        as={"h1"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        paddingY={5}
      >
        가위바위보 게임
      </Text>
      <Flex w={"100%"} justifyContent={"center"}>
        <Image src={RockImage} w={"150px"} display={"flex"} />
      </Flex>
      <Box paddingX={5}>
        <Text mb={1}>이름을 입력하세요.</Text>
        <Flex as={"form"} onSubmit={handleSubmitForm}>
          <Input placeholder={"이름 입력"} ref={inputRef} />
          <Button type={"submit"}>확인</Button>
        </Flex>
      </Box>
    </Container>
  );
}

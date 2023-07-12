import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Rock from "../src/assets/rock.webp";
import Paper from "../src/assets/paper.webp";
import Scissor from "../src/assets/Scissor.webp";

import Container from "./Container";
import "./animation.css";

const ROCK = "rock";
const SCISSOR = "scissor";
const PAPER = "paper";
const WIN = "win";
const LOSE = "lose";
const TIE = "tie";

type RPSType = typeof ROCK | typeof SCISSOR | typeof PAPER;

export default function Stadium() {
  const [isWaiting, setIsWaiting] = useState(true);
  const [imageCount, setImageCount] = useState<number>(0);
  const [winningCount, setWinningCount] = useState(0);

  const toast = useToast();

  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentImage = (count: number) => {
    const remainCount = count % 3;
    if (remainCount === 0) {
      return ROCK;
    }

    if (remainCount === 1) {
      return PAPER;
    }

    return SCISSOR;
  };

  const handleRSP = (userValue: RPSType) => {
    const currentImage = getCurrentImage(imageCount);
    if (currentImage === userValue) {
      return TIE;
    }

    if (userValue === ROCK) {
      return currentImage === SCISSOR ? WIN : LOSE;
    }

    if (userValue === SCISSOR) {
      return currentImage === PAPER ? WIN : LOSE;
    }

    if (userValue === PAPER) {
      return currentImage === ROCK ? WIN : LOSE;
    }
  };

  const addImageCount = () => {
    setImageCount((prev) => prev + 1);
  };

  const onClickRPSButton = (value: RPSType) => {
    setIsWaiting(false);

    const result = handleRSP(value);

    if (result === WIN) {
      setWinningCount((prev) => prev + 1);

      toast({
        status: "success",
        title: "이겼습니다!",
        description: "2초 후에 게임이 재시작됩니다.",
        position: "top",
      });

      setTimeout(() => {
        setIsWaiting(true);
      }, 2000);

      return;
    }

    toast({
      status: "warning",
      title: result === TIE ? "비겼습니다." : "졌습니다.",
      description: "2초 후에 홈 화면으로 돌아갑니다.",
      position: "top",
    });

    setTimeout(() => {
      setIsWaiting(true);
      setWinningCount(0);
      document.startViewTransition(() => navigate("/", {}));
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          new Notification(
            `방금 ${location.state.name}님이 ${winningCount}연승을 했습니다.`
          );
        }
      });
    }, 2000);
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  return (
    <Container h={"450px"} w={"350px"}>
      <Box paddingY={2}>
        <Text
          textAlign={"center"}
          color={"green.400"}
          fontWeight={"bold"}
          fontSize={"lg"}
        >
          {winningCount}연승 중
        </Text>
      </Box>
      <RockScissorPaper
        isWaiting={isWaiting}
        addImageCount={addImageCount}
        imageCount={imageCount}
      />
      <Text paddingY={3} pl={2} textAlign={"center"}>
        원하는 버튼을 눌러주세요.
      </Text>
      <Flex justifyContent={"space-around"}>
        <Button
          w={"100px"}
          height={"100px"}
          borderRadius={"50%"}
          backgroundColor={"gray.200"}
          _hover={{ backgroundColor: "gray.300" }}
          onClick={() => onClickRPSButton(ROCK)}
        >
          <Image w={"100%"} src={Rock} />
        </Button>
        <Button
          w={"100px"}
          height={"100px"}
          backgroundColor={"gray.200"}
          borderRadius={"50%"}
          _hover={{ backgroundColor: "gray.300" }}
          onClick={() => onClickRPSButton(PAPER)}
        >
          <Image w={"100px"} src={Paper} />
        </Button>
        <Button
          w={"100px"}
          height={"100px"}
          borderRadius={"50%"}
          backgroundColor={"gray.200"}
          _hover={{ backgroundColor: "gray.300" }}
          onClick={() => onClickRPSButton(SCISSOR)}
        >
          <Image w={"100px"} src={Scissor} />
        </Button>
      </Flex>
    </Container>
  );
}

interface RockScissorPaperProps {
  isWaiting: boolean;
  addImageCount: () => void;
  imageCount: number;
}

function RockScissorPaper({
  isWaiting,
  addImageCount,
  imageCount,
}: RockScissorPaperProps) {
  const currentImageCount = imageCount % 3;
  const intervalRef = useRef<number>();

  useEffect(() => {
    if (isWaiting) {
      intervalRef.current = setInterval(() => {
        addImageCount();
      }, 150);
    }

    if (!isWaiting) {
      clearInterval(intervalRef.current);
    }
  }, [isWaiting]);

  return (
    <Box h={"230px"}>
      <VStack paddingY={10}>
        {currentImageCount === 0 && <Image w={"170px"} src={Rock} />}
        {currentImageCount === 1 && <Image w={"170px"} src={Paper} />}
        {currentImageCount === 2 && <Image w={"170px"} src={Scissor} />}
      </VStack>
    </Box>
  );
}

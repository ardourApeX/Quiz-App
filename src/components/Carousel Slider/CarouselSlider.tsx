import "./CarouselSlider.css";
import Carousel from "react-elastic-carousel";
import { TimeIcon, InfoIcon } from "@chakra-ui/icons";
import {
	Stack,
	useColorMode,
	Box,
	Button,
	Image,
	Divider,
	Avatar,
	Flex,
	Text,
	Tag,
	Heading,
} from "@chakra-ui/react";

import {
	CAROUSELSLIDERHEADINGSETTING,
	QUIZDATA,
	CAROUSELSLIDERSETTING,
} from "../../Types";
import { randomColor } from "../../utils/randomColor";
import { textColor } from "../../utils/constants.js";
import low from "../../images/low.png";
import med from "../../images/med.png";
import high from "../../images/high.png";
export function CarouselSlider({
	quizData,
	sliderSetting,
	sliderHeadingSetting,
}: {
	quizData: QUIZDATA;
	sliderSetting: CAROUSELSLIDERSETTING;
	sliderHeadingSetting: CAROUSELSLIDERHEADINGSETTING;
}): JSX.Element {
	function difficultyCheck(level: string): string {
		return level === "easy" ? low : level === "med" ? med : high;
	}
	const { colorMode } = useColorMode();

	return (
		<div>
			<Heading {...sliderHeadingSetting}>Join public quizzes...</Heading>
			<Carousel
				className={
					colorMode === "dark"
						? "dark-mode carousel-parent"
						: "light-mode carousel-parent"
				}
				{...sliderSetting}
			>
				{quizData.map((quiz) => (
					<Stack
						justifyContent="space-between"
						h={["550px"]}
						w={["25rem"]}
						className="quiz-card"
					>
						<div className="image-container">
							{" "}
							<Image
								maxH="100%"
								borderRadius="50%"
								m="auto"
								className="carousel-image"
								src={quiz.cover}
							></Image>
						</div>
						<Flex justifyContent="space-between" alignItems="center">
							<Heading>{quiz.name}</Heading>
							<Image h="30px" src={difficultyCheck(quiz.difficulty)}></Image>
						</Flex>

						<Flex w="100%" justifyContent="space-between" alignItems="center">
							<Flex alignItems="center">
								<InfoIcon mr="10px" />
								<Heading fontWeight="light" size="md">
									{quiz.createdBy}
								</Heading>
							</Flex>
							<Stack>
								<Flex>
									<TimeIcon />
									<Heading size="sm">{quiz.duration}</Heading>
								</Flex>
								<Heading size="sm">{quiz.questions} Questions</Heading>
							</Stack>
						</Flex>
						<Flex w="100%" justifyContent="space-between">
							<Heading size="md">Tags : </Heading>
							<Flex width="70%" justifyContent="space-evenly">
								{quiz.topics.map((topic, key) => (
									<Tag
										color="white"
										fontWeight="bold"
										cursor="pointer"
										backgroundColor={randomColor(topic)}
										key={key}
									>
										{topic}
									</Tag>
								))}
							</Flex>
						</Flex>
						<Button boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;">
							Join Now
						</Button>
					</Stack>
				))}
			</Carousel>
		</div>
	);
}

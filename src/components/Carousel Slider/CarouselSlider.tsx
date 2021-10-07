import "./CarouselSlider.css";
import Carousel from "react-elastic-carousel";
import consts from "react-elastic-carousel";
import { TimeIcon, EditIcon } from "@chakra-ui/icons";
import {
	Stack,
	useColorMode,
	Button,
	Image,
	Flex,
	Tag,
	extendTheme,
	Heading,
	Box,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
	CAROUSELSLIDERHEADINGSETTING,
	QUIZDATA,
	CAROUSELSLIDERSETTING,
	BREAKPOINTS,
} from "../../Types";
import { randomColor } from "../../utils/randomColor";
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

	const breakPoints: BREAKPOINTS = [
		{
			width: 1,
			itemsToShow: 1,
			showArrows: true,
		},
		{
			width: 550,
			itemsToShow: 2,
			showArrows: true,
		},
		{
			width: 640,
			itemsToShow: 2.2,
			showArrows: true,
		},
		{
			width: 830,
			itemsToShow: 2,
			showArrows: true,
		},

		{
			width: 800,
			itemsToShow: 2.5,
			showArrows: true,
		},
		{
			width: 1130,
			itemsToShow: 3,
			showArrows: true,
		},
		{
			width: 1400,
			itemsToShow: 3.6,
			showArrows: true,
		},
		{
			width: 1750,
			itemsToShow: 4,
			showArrows: true,
		},
	];

	const breakpoints = createBreakpoints({
		xm: "250px",
		sm: "500px",
		md: "903px",
		lg: "1004px",
		xl: "1200px",
	});
	const theme = extendTheme({ breakpoints });

	return (
		<div id="parent" style={{ border: "1px solid red" }}>
			<Heading {...sliderHeadingSetting}>Join public quizzes...</Heading>
			<Carousel
				className={
					colorMode === "dark"
						? "dark-mode carousel-parent"
						: "light-mode carousel-parent"
				}
				{...sliderSetting}
				breakPoints={breakPoints}
				pagination={false}
			>
				{quizData.map((quiz) => (
					<Stack
						justifyContent="space-between"
						h={["380px", "450px", "470px", "450px", "500px"]}
						w={["12.6rem", "16rem", "18rem", "20rem", "23rem"]}
						className="quiz-card"
					>
						<Box
							h={["160px", "200px", "250px", "250px"]}
							className="image-container"
						>
							{" "}
							<Image
								h={["50%", "70%", "60%", "70%", "100%"]}
								borderRadius="50%"
								m="auto"
								className="carousel-image"
								src={quiz.cover}
							></Image>
						</Box>

						{/* Quiz name and difficulty level */}
						<Flex justifyContent="space-between" alignItems="center">
							<Heading fontSize={["18px", "md", "23px", "20px", "25px"]}>
								{quiz.name}
							</Heading>
							<Image
								h={["20px", "30px", "30px", "30px", "30px"]}
								src={difficultyCheck(quiz.difficulty)}
							></Image>
						</Flex>

						{/* Created by, duration and number of questions */}
						<Flex
							w="100%"
							fontSize={["10px", "14px", "13px", "16px", "lg", "lg"]}
							justifyContent="space-between"
							alignItems="center"
						>
							<Flex alignItems="center">
								<EditIcon mr="10px" />
								<Heading
									fontWeight="light"
									fontSize={["10px", "14px", "13px", "16px", "lg", "lg"]}
								>
									{quiz.createdBy}
								</Heading>
							</Flex>
							{/* Duration and difficulty level */}
							<Stack>
								<Flex
									fontSize={["10px", "14px", "13px", "16px", "lg", "lg"]}
									w="100%"
									fontWeight="light"
									style={{
										alignItems: "center",
										justifyContent: "flex-end",
									}}
								>
									<TimeIcon />
									<Heading
										ml="4px"
										fontSize={["10px", "14px", "16px", "md", "lg"]}
										fontWeight={["light", "light", "light", "light", "bold"]}
									>
										{quiz.duration}
									</Heading>
								</Flex>
								<Heading
									fontSize={["10px", "14px", "16px", "md", "lg"]}
									fontWeight={["light", "light", "light", "light", "bold"]}
								>
									{quiz.questions} Questions
								</Heading>
							</Stack>
						</Flex>

						{/* Tags */}
						<Flex w="100%" justifyContent="space-between">
							<Heading fontSize={["10px", "14px", "13px", "16px", "lg", "lg"]}>
								Tags :{" "}
							</Heading>

							{/* Actual tags */}
							<Flex width="70%" justifyContent="space-evenly">
								{quiz.topics.map((topic, key) => (
									<Box
										fontSize={["9px", "12px", "14px", "14px", "14px"]}
										borderRadius="10px"
										color="white"
										fontWeight="bold"
										cursor="pointer"
										backgroundColor={randomColor(topic)}
										key={key}
										padding="2px 4px"
										className="tagname"
									>
										{topic}
									</Box>
								))}
							</Flex>
						</Flex>
						<Button
							h={["30px", "35px", "35px", "30px", "40px"]}
							fontSize={["10px", "14px", "14px", "14px", "14px"]}
							boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
						>
							Join Now
						</Button>
					</Stack>
				))}
			</Carousel>
		</div>
	);
}

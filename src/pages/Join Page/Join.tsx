import "./Join.css";
import {
	Stack,
	useColorMode,
	Box,
	Button,
	Divider,
	Text,
	Heading,
} from "@chakra-ui/react";
import { data } from "../../utils/mockData";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import { bgColor, textColor, fontColor } from "../../utils/constants";
import { Carousel } from "../../components/Carousel/Carousel";
import { CarouselSlider } from "../../components/Carousel Slider/CarouselSlider";
export function Join() {
	const { colorMode } = useColorMode();
	return (
		<div className="join-page">
			<Stack>
				<Box mb="1rem" className="carousel">
					<Carousel
						carouselSettings={{ controls: false, indicators: false }}
						imageSettings={{
							h: ["160px", "210px", "auto", "auto"],
							w: "auto",
						}}
						images={[carousel1, carousel2, carousel3]}
					/>
					<div
						className={`carousel-overlay ${
							colorMode === "light" ? "light-overlay" : "dark-overlay"
						}`}
					></div>
					<Heading
						color={fontColor[colorMode]}
						fontSize={["7vw", "5.6vw", "4vw", "auto"]}
						fontWeight="light"
						style={{ fontFamily: "Courgette, cursive" }}
						className="carousel-heading"
					>
						Willing to create a quiz?
					</Heading>
					<div className="carousel-button">
						<Button
							w={["80px", "120px"]}
							h={["30px", "37px"]}
							variant="solid"
							colorScheme={fontColor[colorMode]}
							m={"auto"}
							mb={["10px", "auto"]}
						>
							<Text fontSize="xs" as="em">
								Create Quiz
							</Text>
						</Button>
					</div>
				</Box>
				<Divider />
				<Box className="testing">
					<CarouselSlider
						sliderSetting={{
							pagination: false,
							itemsToShow: 3,
							ease: "ease-in-out",
							itemsToScroll: 1,
							isRTL: false,
							outerSpacing: 0,
						}}
						sliderHeadingSetting={{
							mt: "1rem",
							mb: "2rem",
						}}
						quizData={data}
					/>
				</Box>
				<div style={{ marginTop: "10rem", border: "1px solid red" }}></div>
			</Stack>
		</div>
	);
}

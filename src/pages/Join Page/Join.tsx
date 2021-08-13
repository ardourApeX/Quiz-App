import "./Join.css";
import {
	Flex,
	Stack,
	useColorMode,
	IconButton,
	Box,
	Button,
	Image,
	MenuItem,
	Text,
	MenuList,
	Menu,
	MenuButton,
	Avatar,
	Tooltip,
	Heading,
} from "@chakra-ui/react";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import { bgColor, textColor, fontColor } from "../../utils/constants";
import { Carousel } from "react-bootstrap";
export function Join() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div className="join-page">
			<Stack>
				<Box className="carousel">
					<Carousel controls={false}>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src={carousel1}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src={carousel2}
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src={carousel3}
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
					<div
						className={`carousel-overlay ${
							colorMode === "light" ? "light-overlay" : "dark-overlay"
						}`}
					></div>
					<Heading
						color={fontColor[colorMode]}
						fontSize={["4vw"]}
						fontWeight="light"
						style={{ fontFamily: "Courgette, cursive" }}
						className="carousel-heading"
					>
						Willing to create a quiz?
					</Heading>
					<div className="carousel-button">
						<Button
							w="auto"
							variant="solid"
							colorScheme={fontColor[colorMode]}
							m={"auto"}
						>
							<Text fontSize="xs" as="em">
								Create Quiz
							</Text>
						</Button>
					</div>
				</Box>
				<Box className="testing"></Box>
				<Box className="testing"></Box>
			</Stack>
		</div>
	);
}

import "./Home.css";
import {
	Text,
	Stack,
	useColorMode,
	Box,
	Image,
	Grid,
	Heading,
	Button,
} from "@chakra-ui/react";
import bg from "../../images/bg.png";
import { bgColor, textColor } from "../../utils/constants";
export function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Stack
			display="flex"
			h="100%"
			alignItems="center"
			justifyContent="center"
			flexWrap="wrap"
			className="join-page"
			padding="20px"
		>
			<Grid
				templateColumns={[
					"repeat(1,1fr)",
					"repeat(1,1fr)",
					"repeat(2,fr)",
					"repeat(2, 1fr)",
				]}
				gap={6}
			>
				<Box p={3}>
					<Image w={["100%", "80%", "74%", "70%"]} mx="auto" src={bg} />
				</Box>
				<Stack align="center" justify="center" spacing="2em" p={3}>
					<Heading
						style={{
							textAlign: "center",
							fontFamily: "Quicksand, sans-serif",
						}}
						className="banner-heading"
						w="100%"
						as="h1"
						fontSize={["20px", "3vw", "3vw"]}
					>
						An Online Community for Musketeeeeers.
					</Heading>
					<Text
						w="80%"
						fontSize={["20px", "20px", "25px", "24px"]}
						className="quote"
					>
						<strong>Sociify</strong> is an online platform which helps its users
						to get closer and remain updated on their likeable topics thorugh
						quizzes.
					</Text>
					<Box display="flex" justifyContent="center" w="100%">
						<Button
							w={["95px", "100px ", "110px", "120px"]}
							colorScheme="teal"
							fontSize={["sm", "md", "md", "md"]}
							variant="solid"
						>
							Take a Quiz
						</Button>
					</Box>
				</Stack>
			</Grid>
		</Stack>
	);
}

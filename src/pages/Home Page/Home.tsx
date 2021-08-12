import "./Home.css";
import {
	Flex,
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
		<div className="join-page">
			<div className="join-content">
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
						<Image w={["100%", "100%", "74%", "100%"]} mx="auto" src={bg} />
					</Box>
					<Stack align="center" justify="center" spacing="2em" p={3}>
						<Heading
							style={{ fontFamily: "Quicksand, sans-serif" }}
							className="banner-heading"
							as="h1"
							fontSize="3vw"
						>
							An Online Community for Musketeeeeers.
						</Heading>
						<p className="quote">
							<strong>Sociify</strong> is an online platform which helps its
							users to get closer and remain updated on their likeable topics
							thorugh quizzes.
						</p>
						<Box w="100%">
							<Button w="150px" colorScheme="teal" variant="solid">
								Take a Quiz
							</Button>
						</Box>
					</Stack>
				</Grid>
			</div>
		</div>
	);
}

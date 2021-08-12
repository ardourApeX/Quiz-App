import "./Home.css";
import {
	Flex,
	Stack,
	useColorMode,
	IconButton,
	Box,
	Image,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	Grid,
	Heading,
	Avatar,
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
						"repeat(2,0.5fr)",
						"repeat(2, 1fr)",
					]}
					gap={6}
				>
					<Box p={3} style={{ border: "1px solid red" }}>
						<Image src={bg} />
					</Box>
					<Stack
						align="center"
						justify="center"
						style={{ border: "1px solid red" }}
						spacing="2em"
						p={3}
					>
						<Heading className="banner-heading" as="h1" size="3xl">
							An Online Community of Musketeeeeers.
						</Heading>
						<p>
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

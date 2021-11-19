//Dependencies
import LazyLoad from "react-lazyload";

// Chakra Components
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

//Custom Stylesheet
import styles from "./Home.module.css";

//Assests
import homeAvatar from "../../images/bg.png";

export function Home(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Stack
			display="flex"
			h="100%"
			alignItems="center"
			justifyContent="center"
			flexWrap="wrap"
			className={styles.joinPage}
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
				<LazyLoad>
					<Box p={3}>
						<Image
							w={["100%", "80%", "74%", "80%"]}
							mx="auto"
							src={homeAvatar}
						/>
					</Box>
				</LazyLoad>
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
						className={styles.quote}
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

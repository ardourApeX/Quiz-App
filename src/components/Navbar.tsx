import "./Navbar.css";
import {
	AddIcon,
	EditIcon,
	ExternalLinkIcon,
	HamburgerIcon,
	LockIcon,
	MoonIcon,
	RepeatIcon,
	SearchIcon,
	SunIcon,
} from "@chakra-ui/icons";
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
	Avatar,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import { bgColor, textColor } from "../utils/constants";
import icon from "../images/icon.png";
export function Navbar() {
	const { pathname } = useLocation();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div
			style={{
				minHeight: "100vh",
				width: "100vw",
			}}
		>
			<Flex
				bg={bgColor[colorMode]}
				align="center"
				justifyContent="center"
				color={textColor[colorMode]}
				fontSize={["md", "lg", "lg", "md"]}
				h={["3em", "3em", "3em", "4em"]}
				boxShadow="md"
			>
				<Flex mx={3} w="100%" justify="space-between" align="center">
					<Box>
						<Image
							h={["2em", "2.1em", "2.1em", "2.5em"]}
							src={icon}
							alt="Logo of Chakra-ui"
						/>
					</Box>
					<Stack
						spacing={[3, 5, 8, 8]}
						color={textColor[colorMode]}
						align="center"
						isInline
					>
						<Box
							display={["none", "inherit", "inherit", "inherit"]}
							className="nav-route"
							position="relative"
							opacity={pathname !== "/" ? 0.4 : 1}
						>
							<Link to={{ pathname: "/" }}>Home</Link>
						</Box>
						<Box
							display={["none", "inherit", "inherit", "inherit"]}
							className="nav-route"
							position="relative"
							opacity={pathname !== "/card" ? 0.4 : 1}
						>
							<Link to={{ pathname: "/card" }}>Create</Link>
						</Box>
						<Box
							display={["none", "inherit", "inherit", "inherit"]}
							className="nav-route"
							position="relative"
							opacity={pathname !== "/list" ? 0.4 : 1}
						>
							<Link to={{ pathname: "/list" }}>Join</Link>
						</Box>
						<Box
							display={["none", "inherit", "inherit", "inherit"]}
							className="nav-route"
							position="relative"
							opacity={pathname !== "/form" ? 0.4 : 1}
						>
							<Link to={{ pathname: "/form" }}>Profile</Link>
						</Box>
						<Box>
							<IconButton
								rounded="full"
								aria-label="Send email"
								onClick={toggleColorMode}
								justifySelf="center"
								fontSize={["15px", "13px", "14px", "10px"]}
								h={["2.6em", "2.7em", "2.8em", "3.7em"]}
								px="0px"
								w={["2em", "3em", "3em", "4em"]}
								icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
							>
								Change Color Mode
							</IconButton>
						</Box>
						<Box display={["inherit", "none", "none", "none"]}>
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label="Options"
									icon={<HamburgerIcon />}
									variant="outline"
								/>
								<MenuList>
									<MenuItem icon={<AddIcon />}>Create Quiz</MenuItem>
									<MenuItem icon={<ExternalLinkIcon />}>
										Join Public Quiz
									</MenuItem>
									<MenuItem icon={<LockIcon />}>Join Private Quiz</MenuItem>
									<MenuItem
										marginLeft="-5px"
										icon={<Avatar size="xs" name="Joy Gupta"></Avatar>}
									>
										Profile
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>
					</Stack>
				</Flex>
			</Flex>
		</div>
	);
}

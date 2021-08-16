import { Image } from "@chakra-ui/react";
import { Carousel as ReactCarousel } from "react-bootstrap";
import { CAROUSELSETTING, IMAGESETTING } from "../../Types/Carousel.type";
export function Carousel({
	carouselSettings,
	imageSettings,
	images,
}: {
	carouselSettings: CAROUSELSETTING;
	imageSettings: IMAGESETTING;
	images: Array<string>;
}): JSX.Element {
	return (
		<ReactCarousel {...carouselSettings}>
			{images.map((image, id) => (
				<ReactCarousel.Item>
					<Image {...imageSettings} src={image} alt={`image${id}`}></Image>
				</ReactCarousel.Item>
			))}
		</ReactCarousel>
	);
}

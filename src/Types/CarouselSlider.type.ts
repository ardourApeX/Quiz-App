export type BREAKPOINTS = Array<{
	width: number;
	itemsToShow: number;
	showArrows: boolean;
}>;

export type CAROUSELBREAKPOINTS = {
	width?: number;
	itemsToShow: number;
	pagination: boolean;
	isRTL: boolean;
	outerSpacing: number;
};
export type CAROUSELSLIDERSETTING = {
	pagination: boolean;
	itemsToShow: number;
	itemsToScroll: number;
	isRTL: boolean;
	outerSpacing: number;
};
export type CAROUSELSLIDERHEADINGSETTING = {
	mb?: string;
	mr?: string;
	mt?: string;
	ml?: string;
};
export type QUIZCONTENT = {
	id: number;
	createdBy: string;
	name: string;
	questions: number;
	duration: string;
	cover: string;
	topics: Array<string>;
	difficulty: string;
};
export type QUIZDATA = Array<QUIZCONTENT>;

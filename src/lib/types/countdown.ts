export interface SplitFlapProps {
	letter: string;
	flipTime?: boolean;
	fontSize?: 'sm' | 'lg';
}

export interface CountdownDisplayProps {
	countdownEnded: boolean;
	fontSize?: 'sm' | 'lg';
}

export interface HeaderProps {
	countdownEnded: boolean;
	subtitle: string;
	subtitleUrl: string;
}

export interface LayoutProps {
	countdownEnded?: boolean;
}

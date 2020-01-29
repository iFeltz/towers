export interface RootState {
	towers?: [TowerIndicator];
}

export interface TowerIndicator {
	id: string;
	title: string;
	value: number;
	minValue: number;
	maxValue: number;
}

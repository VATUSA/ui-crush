export interface IV2Response {
	data: IV2Event[];
	testing: boolean;
}

export interface IV2Event {
	id_event: number;
	start_date: string;
	end_date: string;
	id_board: number;
	id_topic: number;
	title: string;
	id_member: string
}

export interface IV2EventResponse {
	data: IV2Event[];
	testing: boolean;
}

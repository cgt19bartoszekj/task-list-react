import { Wrapper, Button } from "./styled";

const Buttons = ({
	tasks,
	hideDone,
	toggleHideDone,
	toggleAllDone
}) => (
	<Wrapper>
		{tasks.length > 0 && (
			<>
				<Button
					onClick={toggleHideDone}
				>
					{hideDone ? "Pokaż" : "Ukryj"} ukończone
				</Button>
				<Button
					onClick={toggleAllDone}
					disabled={tasks.every(({ done }) => done)}
				>
					Ukończ wszystkie
				</Button>
			</>
		)}
	</Wrapper>
);

export default Buttons;

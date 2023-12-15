import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "./Button";

export const QuizCards = ({
	question,
	clickAnswer,
	nextButton,
	previousAnswer,
    currentQuestion,
    allQuestions
}) => {
	const [selectedAnswer, setSelectedAnswer] = useState("");
    const [required, setRequired] = useState(false);

	const handlesSelected = (option) => {
		setSelectedAnswer(option);
        setRequired(false); 
	};

	const handleNext = () => {
        if (!selectedAnswer) {
				setRequired(true);
				return;
			}

		clickAnswer(selectedAnswer);
		setSelectedAnswer("");
	};

	const handlePrevious = () => {
		previousAnswer();
	};

	return (
		<div className="flex flex-col gap-4 md:gap-6 text-center p-10 lg:w-[50%] mx-auto rounded-2xl shadow-xl text-black justify-center items-center">
			<h2 className="font-medium text-xl">
				Question {question.questionNumber}
			</h2>
			<p className="self-start">{question.question}</p>
			<div className="flex flex-col gap-3 self-start">
				{question.options.map((option, index) => (
					<div className="flex flex-row gap-2" key={index}>
						<input
							type="radio"
							id={`option${index}`}
							name="answer"
							value={option}
							checked={selectedAnswer === option}
							onChange={() => handlesSelected(option)}
						/>
						<label htmlFor={`option${index}`}>{option}</label>
					</div>
				))}
			</div>
			<div>
				{nextButton && (
					<div className="flex flex-row items-center justify-center gap-6">
						{question.questionNumber > 1 && (
							<SecondaryButton
								onClick={handlePrevious}
								text="Previous"
							/>
						)}
						<PrimaryButton
							onClick={handleNext}
							text={
								currentQuestion < allQuestions.length - 1
									? "Next"
									: "Submit"
							}
						/>
					</div>
				)}
				{required && (
					<span className="text-red-600 py-2 text-sm">
						Please select an answer before moving to the next question.
					</span>
				)}
				
			</div>
		</div>
	);
};

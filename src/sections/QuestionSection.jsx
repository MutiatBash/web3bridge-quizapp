import React, { useState } from "react";
import { questions } from "../data";
import { QuizCards } from "../components/QuizCards";
import { PrimaryButton } from "../components/Button";
PrimaryButton;

const QuestionSection = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	const showScores = () => {
		setModalOpen(true);
		console.log("User Answers:", userAnswers);
	};

	const handleSelectedAnswer = (selectedAnswer) => {
		setUserAnswers([
			...userAnswers,
			{ question: currentQuestion, selectedAnswer },
		]);
		setCurrentQuestion(currentQuestion + 1);
	};

	const handlePreviousQuestion = () => {
		setCurrentQuestion(currentQuestion - 1);
	};

	return (
		<section className="flex flex-col justify-center my-auto">
			<div className="flex flex-col justify-center  gap-6">
				<h1 className="text-semibold text-4xl">
					Welcome to Techies Quiz !!!
				</h1>
				<div>
					{currentQuestion < questions.length ? (
						<QuizCards
							question={questions[currentQuestion]}
							clickAnswer={handleSelectedAnswer}
							previousAnswer={handlePreviousQuestion}
							nextButton={true}
							currentQuestion={currentQuestion}
							allQuestions={questions}
						/>
					) : (
						<div>
							<h3 className="text-semibold text-2xl">Quiz completed!</h3>
							<PrimaryButton onClick={showScores} text="Show scores" />

							{modalOpen && (
								<div>
									<div>
										<h2>Your Quiz Scores</h2>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default QuestionSection;

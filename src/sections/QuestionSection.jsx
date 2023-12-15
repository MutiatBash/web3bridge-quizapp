import React, { useState } from "react";
import { questions } from "../data";
import { QuizCards } from "../components/QuizCards";

const QuestionSection = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);

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
				<h1 className="text-semibold text-4xl">Welcome to Techies Quiz !!!</h1>
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
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default QuestionSection;

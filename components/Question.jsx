import { React, useState } from 'react';

const Question = ({ question, answer, choices }) => {
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleChoiceSelect = (choice) => {
        if (!showResult) {
            setSelectedChoice(choice);
        }
    };

    const handleSubmit = () => {
        setShowResult(true);
    };

    return (
        <div className="question">
            <h3>{question}</h3>
            <ul>
                {choices.map((choice, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                name="choice"
                                value={choice}
                                checked={selectedChoice === choice}
                                onChange={() => handleChoiceSelect(choice)}
                            />
                            {choice}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={handleSubmit}>Submit</button>
                {showResult && (
                    <p className={`mt-2 ${selectedChoice === answer ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedChoice === answer
                            ? 'Correct! Well done!'
                            : `Nice try! The correct answer is: ${answer}.`}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Question;
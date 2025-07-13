import React from "react"
import { useState, useMemo } from "react"
import { QUIZ_QUESTIONS, QUIZ_RESULTS, WHATSAPP_URL } from "./constants"
import type { AnswerValue, Question } from "./types"

type QuizState = "start" | "in-progress" | "finished"

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-1.344-.687 15.247 15.247 0 0 1-1.344.687c-.071.033-.139.065-.209.095l-.008.004-.018.007-.022.01-.003.002A4.5 4.5 0 0 1 5.05 15.95a4.5 4.5 0 0 1 6.364-6.364l.707.707.707-.707a4.5 4.5 0 0 1 6.364 6.364 4.5 4.5 0 0 1-7.072 5.05l-.002-.001Z" />
  </svg>
)

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
)

// --- UI Components (Defined outside App to prevent re-renders) ---

interface StartScreenProps {
  onStart: () => void
}
const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="text-center p-8 max-w-2xl mx-auto">
    <HeartIcon className="w-16 h-16 text-pink-400 mx-auto mb-4" />
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Sua Autoestima e Amor-Próprio Estão em Equilíbrio?
    </h1>
    <p className="text-lg text-gray-600 mb-6">
      Descubra como você se relaciona consigo mesma(o) e com o mundo! Responda
      com sinceridade.
    </p>
    <p className="text-md text-gray-500 mb-8">
      Escolha a opção que melhor te representa para cada pergunta. Ao final,
      clique em 'Ver Meu Resultado' para uma avaliação personalizada.
    </p>
    <button
      onClick={onStart}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Começar o Quiz
    </button>
  </div>
)

interface QuizViewProps {
  question: Question
  onAnswer: (value: AnswerValue) => void
  currentQuestion: number
  totalQuestions: number
}
const QuizView: React.FC<QuizViewProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100
  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-pink-700 font-semibold">
            Pergunta {currentQuestion + 1} de {totalQuestions}
          </p>
        </div>
        <div className="w-full bg-pink-100 rounded-full h-2.5">
          <div
            className="bg-pink-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          {question.questionText}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className="w-full bg-white border-2 border-pink-200 text-gray-700 font-semibold p-4 rounded-xl text-left hover:bg-pink-100 hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all duration-200"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ResultsViewProps {
  resultKey: AnswerValue | null
  onRestart: () => void
}
const ResultsView: React.FC<ResultsViewProps> = ({ resultKey, onRestart }) => {
  if (!resultKey) return null

  const result = QUIZ_RESULTS[resultKey]

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 space-y-8">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Sua Avaliação de Autoestima e Amor-Próprio
        </h2>
        <p className="text-md text-gray-600 mb-6">
          Com base nas suas respostas, veja a seguir uma análise sobre sua
          autoestima e amor-próprio, e como você pode trilhar o caminho para uma
          vida mais plena e confiante.
        </p>
        <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
          <h3 className="text-xl font-bold text-pink-700 mb-3">
            {result.title}
          </h3>
          <p className="text-gray-700">{result.text}</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100 text-left">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Chega de aceitar menos do que você merece!
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          Independentemente do seu resultado, a verdade é que elevar sua
          autoestima depende de você! A psicóloga Pâmela Magalhães, com sua
          vasta experiência e um método comprovado, pode te guiar nessa jornada
          de transformação.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl border">
          <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Imagine:
          </h4>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{" "}
              Ter relacionamentos mais saudáveis e respeitosos.
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{" "}
              Alcançar o sucesso profissional e ser reconhecida(o) por suas
              habilidades.
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{" "}
              Viver com mais confiança e sem inseguranças.
            </li>
            <li className="flex items-start">
              <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />{" "}
              Realizar seus maiores sonhos e objetivos.
            </li>
          </ul>

          <p className="text-gray-600 mb-4">
            A{" "}
            <span className="font-bold text-pink-600">
              Super Aula 4A's da Autoestima Elevada
            </span>{" "}
            da Pâmela Magalhães é o mapa que você precisa para essa
            transformação. Ela vai te ensinar os 4 pilares fundamentais para
            você:
          </p>
          <ul className="space-y-2 font-semibold text-gray-800">
            <li>
              <span className="text-pink-500">Autoconceito:</span> Reconhecer a
              pessoa incrível que você é.
            </li>
            <li>
              <span className="text-pink-500">Autoimagem:</span> Ressignificar
              sua relação com o espelho e perceber sua beleza única.
            </li>
            <li>
              <span className="text-pink-500">Auto Reforço:</span> Tratar-se com
              o mesmo cuidado e carinho que você dedica aos outros.
            </li>
            <li>
              <span className="text-pink-500">Autoeficácia:</span> Tomar posse
              de toda a sua capacidade e realizar a vida que sempre sonhou.
            </li>
          </ul>
        </div>

        <p className="text-center mt-8 text-lg font-semibold text-gray-800">
          Não espere mais para viver a vida que você merece!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full md:w-auto md:mx-auto mt-6 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Quero Transformar Minha Autoestima Agora!
        </a>
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="text-gray-600 hover:text-pink-600 font-semibold py-2 px-4 rounded-full transition-colors duration-200"
        >
          Refazer o Quiz
        </button>
      </div>
    </div>
  )
}

// --- Main App Component ---

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>("start")
  const [answers, setAnswers] = useState<AnswerValue[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleStartQuiz = () => setQuizState("in-progress")

  const handleRestartQuiz = () => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setQuizState("start")
  }

  const handleAnswerSelect = (value: AnswerValue) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizState("finished")
    }
  }

  const resultKey = useMemo<AnswerValue | null>(() => {
    if (quizState !== "finished") return null

    const counts: Record<AnswerValue, number> = { a: 0, b: 0, c: 0, d: 0 }
    answers.forEach((answer) => {
      counts[answer]++
    })

    let majority: AnswerValue = "d"
    let maxCount = 0

    // Use a defined order to handle ties predictably
    const sortedKeys: AnswerValue[] = ["a", "b", "c", "d"]

    for (const key of sortedKeys) {
      if (counts[key] > maxCount) {
        maxCount = counts[key]
        majority = key
      }
    }

    return majority
  }, [quizState, answers])

  const renderContent = () => {
    switch (quizState) {
      case "in-progress":
        return (
          <QuizView
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswerSelect}
            currentQuestion={currentQuestionIndex}
            totalQuestions={QUIZ_QUESTIONS.length}
          />
        )
      case "finished":
        return (
          <ResultsView resultKey={resultKey} onRestart={handleRestartQuiz} />
        )
      case "start":
      default:
        return <StartScreen onStart={handleStartQuiz} />
    }
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center py-10 px-4">
      {renderContent()}
    </main>
  )
}

export default App

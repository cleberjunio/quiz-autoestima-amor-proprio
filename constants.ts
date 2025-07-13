
import { Question, Result, AnswerValue } from './types';

export const WHATSAPP_URL = "https://wa.me/5531990805259";

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: "Quando você recebe um elogio, qual é a sua reação mais comum?",
    options: [
      { text: "Aceito com gratidão e me sinto bem.", value: 'a' },
      { text: "Fico um pouco sem jeito, mas agradeço.", value: 'b' },
      { text: "Desconfio e penso que a pessoa está sendo gentil por educação.", value: 'c' },
      { text: "Desqualifico o elogio ou me sinto indigna(o) dele.", value: 'd' },
    ],
  },
  {
    id: 2,
    questionText: "Em um relacionamento (amoroso, amizade, familiar), você sente que suas necessidades são tão importantes quanto as do outro?",
    options: [
      { text: "Sim, minhas necessidades são valorizadas e expressas.", value: 'a' },
      { text: "Na maioria das vezes sim, mas às vezes hesito em me priorizar.", value: 'b' },
      { text: "Geralmente coloco as necessidades dos outros em primeiro lugar.", value: 'c' },
      { text: "Constantemente sacrifico minhas necessidades para agradar o outro.", value: 'd' },
    ],
  },
  {
    id: 3,
    questionText: "Como você reage a críticas construtivas (ou até mesmo destrutivas)?",
    options: [
      { text: "Avalio a crítica e uso o que for útil para meu crescimento.", value: 'a' },
      { text: "Fico um pouco chateada(o), mas tento entender o ponto de vista.", value: 'b' },
      { text: "Levo para o lado pessoal e me sinto profundamente atingida(o).", value: 'c' },
      { text: "Me defendo imediatamente ou evito qualquer tipo de crítica.", value: 'd' },
    ],
  },
  {
    id: 4,
    questionText: "Você se compara frequentemente com outras pessoas nas redes sociais ou no dia a dia?",
    options: [
      { text: "Raramente ou nunca. Foco na minha própria jornada.", value: 'a' },
      { text: "Às vezes me pego comparando, mas tento me desvincular.", value: 'b' },
      { text: "Sim, com bastante frequência, e isso me deixa insegura(o).", value: 'c' },
      { text: "Constantemente, e sinto que nunca sou boa(o) o suficiente.", value: 'd' },
    ],
  },
  {
    id: 5,
    questionText: "Ao tomar decisões importantes na sua vida, o que mais pesa para você?",
    options: [
      { text: "Minha intuição, meus valores e o que é melhor para mim.", value: 'a' },
      { text: "Uma mistura do que eu quero e do que os outros esperam.", value: 'b' },
      { text: "A opinião dos outros e o medo de desapontá-los.", value: 'c' },
      { text: "Sinto muita dificuldade em decidir, geralmente paralisando.", value: 'd' },
    ],
  },
    {
    id: 6,
    questionText: "Quando você comete um erro, como você lida com isso?",
    options: [
      { text: "Reconheço o erro, aprendo com ele e sigo em frente.", value: 'a' },
      { text: "Fico frustrada(o), mas tento não me culpar excessivamente.", value: 'b' },
      { text: "Me culpo muito e remoo o erro por um longo tempo.", value: 'c' },
      { text: "Sinto vergonha e tento esconder o erro de todos.", value: 'd' },
    ],
  },
  {
    id: 7,
    questionText: "Você dedica tempo para atividades que te dão prazer e te fazem sentir bem consigo mesma(o), mesmo que não sejam 'produtivas'?",
    options: [
      { text: "Sim, priorizo momentos de autocuidado e lazer.", value: 'a' },
      { text: "Faço isso de vez em quando, quando tenho tempo livre.", value: 'b' },
      { text: "Raramente, sinto que sempre há algo mais importante para fazer.", value: 'c' },
      { text: "Não, sinto culpa em 'perder tempo' comigo mesma(o).", value: 'd' },
    ],
  },
  {
    id: 8,
    questionText: "Você se sente confortável em expressar suas opiniões e limites, mesmo que isso possa gerar desacordo?",
    options: [
      { text: "Sim, expresso minhas opiniões e limites de forma clara e respeitosa.", value: 'a' },
      { text: "Tenho um pouco de receio, mas tento me posicionar.", value: 'b' },
      { text: "Geralmente evito conflitos e guardo o que penso para mim.", value: 'c' },
      { text: "Tenho medo de ser rejeitada(o) ou de piorar a situação.", value: 'd' },
    ],
  },
];

export const QUIZ_RESULTS: Record<AnswerValue, Result> = {
    a: {
        title: "Parabéns! Sua autoestima e amor-próprio parecem estar bem desenvolvidos.",
        text: "Você demonstra autoconfiança, valoriza suas necessidades e busca relacionamentos saudáveis e respeitosos. Continue cultivando essa essência e inspire as pessoas ao seu redor!"
    },
    b: {
        title: "Você está no caminho certo para desenvolver sua autoestima e amor-próprio!",
        text: "Já reconhece a importância de se priorizar, mas ainda pode haver momentos de hesitação ou insegurança. O próximo passo é fortalecer ainda mais seus pilares internos para viver com mais liberdade e confiança."
    },
    c: {
        title: "É provável que você esteja enfrentando desafios com sua autoestima e amor-próprio.",
        text: "Sentir-se insuficiente, priorizar os outros e buscar validação externa são sinais de que há um potencial incrível adormecido em você. Saiba que é possível transformar essa realidade e construir uma relação muito mais saudável consigo mesma(o). Você não está sozinha(o) nessa jornada."
    },
    d: {
        title: "Seus resultados indicam que a baixa autoestima pode estar impactando significativamente diversas áreas da sua vida.",
        text: "É compreensível que você se sinta assim, mas é fundamental buscar ferramentas para romper esse ciclo de autossabotagem e insegurança. A boa notícia é que a autoestima elevada é algo que se aprende e se desenvolve, e você pode sim se tornar a protagonista da sua própria história!"
    }
};

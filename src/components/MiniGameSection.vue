<script setup lang="ts">
import { computed, ref } from 'vue'
import { Brain, Code2, Zap, Target, Keyboard, Calculator, X, Trophy } from 'lucide-vue-next'

type GameType = 'memory' | 'quiz' | 'pattern' | 'reaction' | 'typing' | 'math'

const activeGame = ref<GameType | null>(null)
const totalScore = ref(0)

const games = [
  {
    id: 'memory' as GameType,
    title: 'Memory Match',
    description: 'Find matching cards as fast as possible.',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'quiz' as GameType,
    title: 'Tech Quiz',
    description: 'Answer programming questions correctly.',
    icon: Code2,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'pattern' as GameType,
    title: 'Pattern Master',
    description: 'Repeat the color sequence correctly.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'reaction' as GameType,
    title: 'Reaction Test',
    description: 'Click as fast as possible when it turns green.',
    icon: Target,
    color: 'from-emerald-500 to-cyan-600',
  },
  {
    id: 'typing' as GameType,
    title: 'Typing Speed',
    description: 'Type the sentence before time runs out.',
    icon: Keyboard,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'math' as GameType,
    title: 'Math Rush',
    description: 'Solve quick math challenges.',
    icon: Calculator,
    color: 'from-rose-500 to-red-600',
  },
]

const activeGameData = computed(() => games.find((game) => game.id === activeGame.value))

const openGame = (game: GameType) => {
  activeGame.value = game
}

const closeGame = () => {
  activeGame.value = null
}

/* MEMORY GAME */
const memoryIcons = ['⚡', '🤖', '💻', '🚀']
const memoryCards = ref<string[]>([])
const flippedCards = ref<number[]>([])
const matchedCards = ref<number[]>([])
const memoryMoves = ref(0)

const startMemory = () => {
  memoryCards.value = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - 0.5)
  flippedCards.value = []
  matchedCards.value = []
  memoryMoves.value = 0
}

const flipCard = (index: number) => {
  if (flippedCards.value.includes(index) || matchedCards.value.includes(index)) return
  if (flippedCards.value.length === 2) return

  flippedCards.value.push(index)

  if (flippedCards.value.length === 2) {
    memoryMoves.value++

    const [first, second] = flippedCards.value

    if (memoryCards.value[first] === memoryCards.value[second]) {
      matchedCards.value.push(first, second)
      flippedCards.value = []

      if (matchedCards.value.length === memoryCards.value.length) {
        totalScore.value += 100
      }
    } else {
      setTimeout(() => {
        flippedCards.value = []
      }, 700)
    }
  }
}

/* QUIZ GAME */
const quizQuestions = [
  {
    question: 'Which framework is used for Vue routing?',
    options: ['Vue Router', 'React Router', 'Next Router', 'Express Router'],
    answer: 'Vue Router',
  },
  {
    question: 'What language adds types to JavaScript?',
    options: ['Python', 'TypeScript', 'PHP', 'Java'],
    answer: 'TypeScript',
  },
  {
    question: 'Which CSS framework uses utility classes?',
    options: ['Bootstrap', 'Tailwind CSS', 'Bulma', 'Foundation'],
    answer: 'Tailwind CSS',
  },
]

const quizIndex = ref(0)
const quizScore = ref(0)
const quizFinished = ref(false)

const startQuiz = () => {
  quizIndex.value = 0
  quizScore.value = 0
  quizFinished.value = false
}

const answerQuiz = (answer: string) => {
  if (answer === quizQuestions[quizIndex.value].answer) {
    quizScore.value += 10
  }

  if (quizIndex.value < quizQuestions.length - 1) {
    quizIndex.value++
  } else {
    quizFinished.value = true
    totalScore.value += quizScore.value
  }
}

/* PATTERN GAME */
const patternColors = ['cyan', 'purple', 'yellow', 'emerald']
const pattern = ref<string[]>([])
const userPattern = ref<string[]>([])
const patternMessage = ref('Click Start Pattern')
const patternLevel = ref(0)

const startPattern = () => {
  pattern.value = []
  userPattern.value = []
  patternLevel.value = 0
  patternMessage.value = 'Watch the pattern'
  nextPattern()
}

const nextPattern = () => {
  userPattern.value = []
  patternLevel.value++
  pattern.value.push(patternColors[Math.floor(Math.random() * patternColors.length)])
  patternMessage.value = `Level ${patternLevel.value}: Repeat the pattern`
}

const clickPattern = (color: string) => {
  if (!pattern.value.length) return

  userPattern.value.push(color)

  const index = userPattern.value.length - 1

  if (userPattern.value[index] !== pattern.value[index]) {
    patternMessage.value = 'Wrong pattern! Try again.'
    return
  }

  if (userPattern.value.length === pattern.value.length) {
    totalScore.value += 20
    setTimeout(nextPattern, 600)
  }
}

/* REACTION GAME */
const reactionState = ref<'idle' | 'waiting' | 'ready' | 'done'>('idle')
const reactionMessage = ref('Click Start')
const reactionStartTime = ref(0)
const reactionResult = ref<number | null>(null)
let reactionTimeout: number | null = null

const startReaction = () => {
  reactionState.value = 'waiting'
  reactionResult.value = null
  reactionMessage.value = 'Wait for green...'

  reactionTimeout = window.setTimeout(() => {
    reactionState.value = 'ready'
    reactionStartTime.value = Date.now()
    reactionMessage.value = 'CLICK NOW!'
  }, Math.random() * 2500 + 1200)
}

const clickReaction = () => {
  if (reactionState.value === 'waiting') {
    if (reactionTimeout) clearTimeout(reactionTimeout)
    reactionState.value = 'idle'
    reactionMessage.value = 'Too soon! Start again.'
    return
  }

  if (reactionState.value === 'ready') {
    reactionResult.value = Date.now() - reactionStartTime.value
    reactionState.value = 'done'
    reactionMessage.value = `${reactionResult.value}ms`

    if (reactionResult.value < 350) totalScore.value += 50
  }
}

/* TYPING GAME */
const typingText = 'Code the future with creativity and intelligence'
const typingInput = ref('')
const typingFinished = ref(false)

const startTyping = () => {
  typingInput.value = ''
  typingFinished.value = false
}

const checkTyping = () => {
  if (typingInput.value === typingText) {
    typingFinished.value = true
    totalScore.value += 80
  }
}

/* MATH GAME */
const numA = ref(0)
const numB = ref(0)
const mathAnswer = ref('')
const mathScore = ref(0)
const mathMessage = ref('Solve the question')

const generateMath = () => {
  numA.value = Math.floor(Math.random() * 20) + 1
  numB.value = Math.floor(Math.random() * 20) + 1
  mathAnswer.value = ''
  mathMessage.value = 'Solve the question'
}

const submitMath = () => {
  if (Number(mathAnswer.value) === numA.value + numB.value) {
    mathScore.value += 10
    totalScore.value += 10
    mathMessage.value = 'Correct!'
    generateMath()
  } else {
    mathMessage.value = 'Wrong answer!'
  }
}

startMemory()
startQuiz()
startTyping()
generateMath()
</script>

<template>
  <section class="relative overflow-hidden bg-[#020617] px-4 py-20 text-white lg:py-28">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="mb-14 text-center" data-aos="fade-up">
        <h2 class="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
          MINI GAMES
        </h2>

        <p class="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg lg:text-xl">
          Play small interactive games, collect points, and enjoy the portfolio experience.
        </p>

        <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-300">
          <Trophy :size="20" />
          Total Score: {{ totalScore }}
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(game, index) in games"
          :key="game.id"
          class="game-card group text-left"
          :data-aos="'zoom-in-up'"
          :data-aos-delay="index * 120"
          @click="openGame(game.id)"
        >
          <div class="absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100">
            <div class="h-full w-full rounded-[28px] bg-linear-to-br" :class="game.color" style="opacity: .25" />
          </div>

          <div class="relative z-10">
            <div class="mb-6 flex items-center justify-between">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                <component :is="game.icon" :size="30" />
              </div>

              <span class="rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300">
                PLAY
              </span>
            </div>

            <h3 class="mb-3 text-2xl font-black group-hover:text-cyan-300">
              {{ game.title }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-300">
              {{ game.description }}
            </p>
          </div>

          <div class="shine" />
        </button>
      </div>
    </div>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeGame"
          class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
        >
          <div class="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
            <button
              class="absolute right-5 top-5 rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-red-500 hover:text-white"
              @click="closeGame"
            >
              <X :size="22" />
            </button>

            <div class="mb-8 pr-10">
              <div class="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                Mini Game
              </div>

              <h3 class="text-3xl font-black sm:text-4xl">
                {{ activeGameData?.title }}
              </h3>
            </div>

            <!-- MEMORY -->
            <div v-if="activeGame === 'memory'">
              <div class="mb-5 flex items-center justify-between">
                <p class="text-slate-300">Moves: {{ memoryMoves }}</p>
                <button class="btn" @click="startMemory">Restart</button>
              </div>

              <div class="grid grid-cols-4 gap-3">
                <button
                  v-for="(card, index) in memoryCards"
                  :key="index"
                  class="h-24 rounded-2xl border border-cyan-400/20 bg-slate-900 text-4xl transition hover:border-cyan-400"
                  @click="flipCard(index)"
                >
                  <span v-if="flippedCards.includes(index) || matchedCards.includes(index)">
                    {{ card }}
                  </span>
                  <span v-else>?</span>
                </button>
              </div>
            </div>

            <!-- QUIZ -->
            <div v-if="activeGame === 'quiz'">
              <button class="btn mb-5" @click="startQuiz">Restart Quiz</button>

              <div v-if="!quizFinished">
                <h4 class="mb-6 text-2xl font-black">
                  {{ quizQuestions[quizIndex].question }}
                </h4>

                <div class="grid gap-3">
                  <button
                    v-for="option in quizQuestions[quizIndex].options"
                    :key="option"
                    class="game-option"
                    @click="answerQuiz(option)"
                  >
                    {{ option }}
                  </button>
                </div>
              </div>

              <div v-else class="rounded-3xl bg-slate-900 p-8 text-center">
                <h4 class="mb-3 text-3xl font-black text-cyan-300">
                  Quiz Finished!
                </h4>
                <p class="text-xl">Score: {{ quizScore }}</p>
              </div>
            </div>

            <!-- PATTERN -->
            <div v-if="activeGame === 'pattern'">
              <div class="mb-6 flex items-center justify-between">
                <p class="font-bold text-cyan-300">{{ patternMessage }}</p>
                <button class="btn" @click="startPattern">Start Pattern</button>
              </div>

              <div class="mb-6 rounded-2xl bg-slate-900 p-4 text-center">
                Pattern:
                <span class="font-black text-cyan-300">
                  {{ pattern.join(' → ') || '-' }}
                </span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <button class="pattern-btn bg-cyan-500" @click="clickPattern('cyan')">Cyan</button>
                <button class="pattern-btn bg-purple-500" @click="clickPattern('purple')">Purple</button>
                <button class="pattern-btn bg-yellow-500 text-slate-950" @click="clickPattern('yellow')">Yellow</button>
                <button class="pattern-btn bg-emerald-500" @click="clickPattern('emerald')">Emerald</button>
              </div>
            </div>

            <!-- REACTION -->
            <div v-if="activeGame === 'reaction'">
              <button class="btn mb-5" @click="startReaction">Start</button>

              <button
                class="h-64 w-full rounded-3xl text-3xl font-black transition"
                :class="{
                  'bg-slate-800': reactionState === 'idle',
                  'bg-red-500': reactionState === 'waiting',
                  'bg-emerald-500': reactionState === 'ready',
                  'bg-cyan-500': reactionState === 'done',
                }"
                @click="clickReaction"
              >
                {{ reactionMessage }}
              </button>
            </div>

            <!-- TYPING -->
            <div v-if="activeGame === 'typing'">
              <button class="btn mb-5" @click="startTyping">Restart Typing</button>

              <div class="mb-5 rounded-2xl bg-slate-900 p-5 text-lg text-cyan-300">
                {{ typingText }}
              </div>

              <textarea
                v-model="typingInput"
                class="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-900 p-5 outline-none focus:border-cyan-400"
                placeholder="Type here..."
                @input="checkTyping"
              />

              <p v-if="typingFinished" class="mt-4 text-xl font-black text-emerald-400">
                Completed! +80 points
              </p>
            </div>

            <!-- MATH -->
            <div v-if="activeGame === 'math'">
              <div class="mb-6 flex items-center justify-between">
                <p class="text-cyan-300">Score: {{ mathScore }}</p>
                <button class="btn" @click="generateMath">New Question</button>
              </div>

              <h4 class="mb-6 text-center text-5xl font-black">
                {{ numA }} + {{ numB }} = ?
              </h4>

              <input
                v-model="mathAnswer"
                type="number"
                class="mb-4 w-full rounded-2xl border border-white/10 bg-slate-900 p-5 text-center text-2xl outline-none focus:border-cyan-400"
                placeholder="Your answer"
                @keyup.enter="submitMath"
              >

              <button class="btn w-full" @click="submitMath">
                Submit Answer
              </button>

              <p class="mt-4 text-center font-bold text-cyan-300">
                {{ mathMessage }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.game-card {
  position: relative;
  overflow: hidden;
  min-height: 230px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(15, 23, 42, .72);
  padding: 28px;
  transition:
    transform 500ms ease,
    border-color 500ms ease,
    box-shadow 500ms ease;
}

.game-card:hover {
  transform: translateY(-10px) rotateX(4deg) rotateY(-4deg);
  border-color: rgba(103, 232, 249, .55);
  box-shadow: 0 0 40px rgba(34, 211, 238, .16);
}

.shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.shine::before {
  content: '';
  position: absolute;
  top: -120%;
  left: -120%;
  width: 70%;
  height: 260%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,.18), transparent);
  transform: rotate(25deg);
  transition: all 1000ms ease;
}

.game-card:hover .shine::before {
  left: 180%;
}

.btn {
  border-radius: 14px;
  background: linear-gradient(to right, #06b6d4, #2563eb);
  padding: 12px 20px;
  font-weight: 800;
  transition: .3s;
}

.btn:hover {
  transform: scale(1.04);
  box-shadow: 0 0 30px rgba(34, 211, 238, .25);
}

.game-option {
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(15,23,42,.9);
  padding: 18px;
  text-align: left;
  transition: .3s;
}

.game-option:hover {
  border-color: #22d3ee;
  color: #67e8f9;
  transform: translateX(8px);
}

.pattern-btn {
  height: 110px;
  border-radius: 24px;
  font-weight: 900;
  transition: .3s;
}

.pattern-btn:hover {
  transform: scale(1.04);
  filter: brightness(1.15);
}

.modal-enter-active,
.modal-leave-active {
  transition: all .35s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(.96);
}

@media (max-width: 768px) {
  .game-card:hover {
    transform: translateY(-6px);
  }
}
</style>
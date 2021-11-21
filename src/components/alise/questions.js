// prettier-ignore
const mainAnswers = {
  blame: [ 'сам такой', 'я обиделася', 'я обиделась', 'бе((', 'мэ(', 'кто обзывается - тот сам так называется, сучара', 'соси писос', 'обидно', 'неприятно', 'от тебя воняет' ],
  swear: ['сучара', 'сука', 'пидор', 'еблан тупой', 'сучка', 'еблан'],
  yell: [ 'уууууууу', 'ууууу', 'АААААААА', 'аааа', 'оооооооо', 'оаоаоаоаоао', 'ыыыыыыыыыыыыы', 'ъуъуъуъуъуъуъуъуъ' ],
}
// prettier-ignore
const mainFunctions = {
  setBlame: (data, how) => {
    if (how) data.blame = true
    else data.blame = false
    return data
  },
}
// prettier-ignore
const questions = [
  {
    question: [
      'хайушки', 'привет', 'приветики', 'приветули', 'хай', 'добрый день', 'добрый вечер', 'доброе утро'
    ],
    answer: ['Привет, еблан', 'Прив че дел', 'Здарова, отец', 'Oh shit, here we go again'],
  },
  {
    question: ['извини', 'прости', 'сори', 'прости меня', 'извини меня'],
    answer: [
      'ладно, прощаю', 'хорошо, больше так не делай', 'на этот раз прощаю', 'ладно', 'ну ладно'
    ],
    function: (data) => {
      mainFunctions.setBlame(data, false)
      return data
    },
  },
  {
    question: ['алиса'],
    answer: ['Че тебе надо блятб', 'че?', 'че надо?', 'че тебе?', 'а?', 'да?'],
  },
  { 
    question: ['ты кто', 'кто ты', 'что ты такое'], 
    answer: ['Я Алиса', 'Я кибОрг убийца', 'Я мусулман'] 
  },
  {
    question: ['как дела', 'че как'],
    answer: [
      'Норм', 'Ещё не родила ъаъъаъаъа', 'Хорошо, только жопа отвалилась','Хорошо, а у тебя?'
    ],
  },
  {
    question: ['жопа'],
    answer: [...mainAnswers.blame, 'Это ты жопа!', 'Сам жопа', 'Ну и иди в нее'],
  },
  {
    question: ['попа'],
    answer: [...mainAnswers.blame, 'Сам ты попа', 'Сам попа', 'Ну и иди в нее'],
  },
  {
    question: ['говно'],
    answer: [...mainAnswers.blame, 'Сам ты говно', 'Сам говно'],
  },
  {
    question: ['я хочу кушать', 'хочу есть', 'жрать хочу', 'хочу жрать'],
    answer: ['хорошо, пошли в мак', 'Иди поешь'],
  },
  { 
    question: ['симпл димпл'], 
    answer: ['Нет, Поп Ит!'] 
  },
  { 
    question: [
     'у', 'уу', 'ууу', 'уууу', 'ууууу', 'уууууу', 'ууууууу', 'уууууууу', 'ууууууууу'
    ], 
    answer: [...mainAnswers.yell] 
  },
  { 
    question: ['пук', 'пук пук'], 
    answer: ['пук', 'пук пук', 'я человек паук'] 
  },
  {
    question: ['ты говно', 'ты лох', 'ты чмо'],
    answer: [...mainAnswers.blame],
    function: (data) => {
      mainFunctions.setBlame(data, true)
      return data
    },
  },
  { 
    question: ['ты тупая', 'ты глупая'], 
    answer: [...mainAnswers.blame, 'нет ты(', 'это ты тупая!'],
    function: (data) => {
      mainFunctions.setBlame(data, true)
      return data
    },
  },
  { 
    question: ['что ты умеешь', 'что ты можешь'], 
    answer: ['Я умею нихуя, я тупая)'] 
  },
  { 
    question: ['что ты делаешь', 'что делаешь', 'че делаешь'], 
    answer: ['Да ниче', 'Как всегда бездельничаю', 'туплю в окно', 'Ничего', 'Нихуя'] 
  },
  {
    question: ['расскажи шутку', 'пошути'],
    answer: [
      'Не буду говорить какое место в моей жизни занимает алкоголь, но скажу что серебро и бронза по-бокам'
    ],
  },
  {
    question: ['спой песню', 'хочу песню', 'песня', 'песенка', 'спой'],
    answer: [
      '\nЭй, цепь на мне, \nсыпь лавэ \nСотка тыщ на Bag LV \nСотни сук хотят ко мне \nСотни сук хотят камней \n\nКак дела? \nКак дела? \nЭто новый Cadillac \nДелать деньги, \nделать деньги \nДелать деньги, бля*ь, вот так \n(с) Моргенштерн',
      '\nЯ лью Cristal и Chandon Moët \nМечтал — теперь моё \nТрачу на это, трачу на то, \nтрачу на это, трачу на то \nЯ лью Cristal и Chandon Moët \nМечтал — теперь моё \nТрачу на это, трачу на то, \nтрачу на это, трачу на то \n(c) Моргенштерн',
    ],
  },
  { 
    question: ['молодец', 'ты хорошая', 'ты классная', 'ты класссная', ''], 
    answer: ['Я старалась', 'Спасибо, мне приятно', 'ооооооууу', ''] 
  },
  { 
    question: [...mainAnswers.swear, 'пошла в жопу', 'да пошла ты', 'иди в жопу', 'пошла нахуй', 'иди нахуй', 'нахуй иди', 'пошла ты', ''], 
    answer: [...mainAnswers.swear, ...mainAnswers.blame],
    function: (data) => {
      mainFunctions.setBlame(data, true)
      return data
    },
  },
  {
    question: ['спасибо', 'спс'],
    answer: ['Пожалуйста)', 'Незашто', 'Спасибо в корман не положишь'],
  },
  {
    question: ['дура'],
    answer: [...mainAnswers.blame, 'сам ты дура', 'нет ты дура', 'Дора?', ''],
    function: (data) => {
      mainFunctions.setBlame(data, true)
      return data
    },
  },
  { 
    question: ['кто я', 'кто я такой'], 
    answer: ['кто-то', 'ты лох', 'чма'] 
  },
  {
    question: ['хорошо', 'ладно', 'ок'],
    answer: ['дада', 'угу', 'договорились', 'вставить текст', 'не знаю что ответить'],
  },
  { 
    question: ['по пивку'], 
    answer: ['по пивку'], 
    function: (data) => {
      mainFunctions.setBlame(data, false)
      return data
    },
  },
]

export default questions

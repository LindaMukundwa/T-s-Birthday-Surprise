const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');
const happy = document.querySelector('.happy');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['💰', '🏃🏾', '💥', '🇳🇬', '🖤', '🌸', '🥳','🍾','❤️‍🔥','🙂↔️'],
    }).then(() => jsConfetti.addConfetti())
})

happy.addEventListener('click', () => {
    window.location.href="https://www.casamigos.com/en-us";
})
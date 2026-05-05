const MESSAGES = [
  'Didi is our leader and we love him.',
  'Hen, if you weren\'t funny we wouldn\'t need you.',
  'Who will break the van first?',
  'Liel is a support character.',
  'Didi and Hen are lovers.',
  'Will Ian pay back to Didi??',
  'Ian packed for 6 months. It\'s a 3-week trip.',
  'Liel spent 4 hours researching the best gas stations.',
  'Hen has a joke for every situation. Most of them are bad.',
  'Didi will try to adopt a dog in every city.',
  'Ian\'s budget: infinite. Ian\'s contributions: loading...',
  'The van will not break. We are not accepting other outcomes.',
];

export function startMessages() {
  const el = document.getElementById('crew-message');
  let i = 0;

  function show() {
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = MESSAGES[i];
      el.style.opacity = '1';
      i = (i + 1) % MESSAGES.length;
    }, 400);
  }

  show();
  setInterval(show, 4000);
}

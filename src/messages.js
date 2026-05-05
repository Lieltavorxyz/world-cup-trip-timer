const CREW_MESSAGES = [
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

const LIEL_MESSAGES = [
  'Liel built this site. Show some respect.',
  'Without Liel there is no trip. Without Liel there is no site. Without Liel there is nothing.',
  'Liel is the glue. The rest are just passengers.',
  'Liel planned everything. You\'re welcome.',
  'We stan Liel.',
  'Liel carried the group chat for 3 months. Minimum.',
];

function rotateMessages(messages, elId) {
  const el = document.getElementById(elId);
  let i = 0;

  function show() {
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = messages[i];
      el.style.opacity = '1';
      i = (i + 1) % messages.length;
    }, 400);
  }

  show();
  setInterval(show, 4000);
}

export function startMessages() {
  rotateMessages(CREW_MESSAGES, 'crew-message');
  rotateMessages(LIEL_MESSAGES, 'liel-message');
}

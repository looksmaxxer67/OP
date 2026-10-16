const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Gosha': '+380441112233',
  'Dasha': '+380447778899',
};

const findPhoneByName = (name) => {
  return phonebook[name];
};

console.log(findPhoneByName('Marcus Aurelius')); // +380445554433
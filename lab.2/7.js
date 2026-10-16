const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gosha', phone: '+380441112233' },
  { name: 'Dasha', phone: '+380447778899' },
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) {
      return item.phone;
    }
  }
  return 'not found';
};

console.log(findPhoneByName('Gosha')); // +380441112233
const fn = () => {
  const obj1 = { name: 'Перший' };
  let obj2 = { name: 'Другий' };
  obj1.name = 'Змінений перший'; 
  obj2.name = 'Змінений другий'; 
  obj2 = { name: 'Інший' };     
  console.log(obj1, obj2);
};

fn();
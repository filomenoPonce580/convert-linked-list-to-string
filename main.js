function stringify(list) {
  let data = [];
  while (list !== null) {
    data.push(list.data);
    list = list.next;
  }
  data.push('null');
  return data.join(' -> ');
}

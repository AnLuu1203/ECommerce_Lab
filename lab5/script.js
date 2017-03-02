function add_task() {
  var task_text = document.getElementById('input_task').value;

  if (task_text == '')
    return

  var remaining_tasks = parseInt(document.getElementById('task_number').innerText);

  var list_tasks = document.getElementById('show_tasks');


  var li = document.createElement('li');

  var check_box = document.createElement('input');
  check_box.type = 'checkbox';
  check_box.id = 'checkbox_' + remaining_tasks;
  check_box.onchange = checkbox_change;

  var label = document.createElement('label');
  label.innerText = task_text;

  li.appendChild(check_box);
  li.appendChild(label);
  list_tasks.appendChild(li);

  document.getElementById('input_task').value = '';
  update_remaining_task(remaining_tasks + 1);
}

function update_remaining_task(number) {
  document.getElementById('task_number').innerHTML = number;
}

function checkbox_change() {
  var label = document.querySelector('#' + this.id + ' ~ label');
  var remaining_tasks = parseInt(document.getElementById('task_number').innerText);

  if (this.checked) {
    label.setAttribute('class', 'text-line-through');
    update_remaining_task(remaining_tasks - 1);
  } else {
    label.removeAttribute('class', 'text-line-through');
    update_remaining_task(remaining_tasks + 1);
  }
}

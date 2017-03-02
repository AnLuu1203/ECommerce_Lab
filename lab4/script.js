function change_option_select() {
  var select_box_job = document.getElementById('job');
  var select_box_pay_for = document.getElementById('pay_for');

  clear_select_option(select_box_pay_for);

  if (select_box_job.value == 'Student') {
    add_option(select_box_pay_for, '1 semester', '1 semester');
    add_option(select_box_pay_for, '1 year', '1 year');
  } else {
    add_option(select_box_pay_for, '1 year', '1 year');
    add_option(select_box_pay_for, '2 years', '2 years');
  }
}

function clear_select_option(select_box) {
  select_box.options.length = 0;
}

function add_option(select_box, value, label) {
  var option = document.createElement('option');
  option.text = label;
  option.value = value;

  select_box.add(option);
}

function review_information() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('first_name').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var sex = document.querySelector("input[name='sex']:checked").value;
  var birthday = document.getElementById('birthday').value;
  var job = document.getElementById('job').value;
  var pay_for = document.getElementById('pay_for').value;
  var picture = document.getElementById('picture').value;

  change_text('info_name', first_name + ' ' + last_name);
  change_text('info_email', email);
  change_text('info_address', address);
  change_text('info_sex', sex);
  change_text('info_birthday', birthday);
  change_text('info_job', job);
  change_text('info_pay_for', pay_for);
  change_text('info_picture', picture);

  document.querySelector('section#review .information').style.height = '100%';
}

function change_text(id_tag, text) {
  document.getElementById(id_tag).innerHTML = text;
}

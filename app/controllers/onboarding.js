var args = arguments[0] || {};

function sendVerificationCode() {
	$.sbt1.text = "";
	$.sbt2.text = "Validando. Por favor aguarde...";
	$.input_phone_number.hide();
	$.round_btn.height = 0;
	$.wait.show();
}

function sendPhoneNumber() {
	$.sbt1.text = "Para completar a validação,";
	$.sbt2.text = "digite abaixo o código enviado por SMS.";
	$.input_phone_number.value = "";
	$.next_btn.addEventListener('click', sendVerificationCode);
}

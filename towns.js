$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
<<<<<<< HEAD
	$('#btnShuffle').click(shuffleTowns);
=======
	$('#btnAdd').click(addTown);
>>>>>>> 3aca97b896d10b160e7b1dc0ac1800966365cf18
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

<<<<<<< HEAD
function shuffleTowns() {
	let towns = $('#towns option').toArray();
	$('#towns').empty();
	shuffleArray(towns);
	$('#towns').append(towns);
	$('#result').text("Towns shuffled.");

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var oldElement = array[i];
			array[i] = array[j];
			array[j] = oldElement;
		}
	}
=======
function addTown() {
	let townName = $('#townNameForAdd').val();
	$('#townNameForAdd').val('');
	$('#towns').append($('<option>').text(townName));
	$('#result').text(townName + " added.");
>>>>>>> 3aca97b896d10b160e7b1dc0ac1800966365cf18
}


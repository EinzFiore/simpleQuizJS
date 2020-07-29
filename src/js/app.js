function check() {
    // cek jawaban
    const answer1 = document.quiz.answer1.value;
    const answer2 = document.quiz.answer2.value;
    const answer3 = document.quiz.answer3.value;

    let result = 0;

    if (answer1 == "Tsundere") {
        result++;
    }
    if (answer2 == "SAO") {
        result++;
    }
    if (answer3 == "Kuudere") {
        result++;
    }

    const messages = ['Mastah !', 'Hmm.. not bad..', 'Cih, dasar payah!!'];
    const picture = ['src/img/anime/gud.png', 'src/img/anime/think.png', 'src/img/anime/kuzu.png'];

    let range;
    if (result < 1) {
        range = 2;
    }
    if (result > 0 && result < 3) {
        range = 1;
    }
    if (result > 2) {
        range = 0;
    }

    document.getElementById('showResult').style.visibility = "visible";

    document.getElementById('messages').innerHTML = messages[range];
    document.getElementById('number_correct').innerHTML = 'Jawaban kamu ' + result + ' benar.';
    document.getElementById('picture').src = picture[range];

}
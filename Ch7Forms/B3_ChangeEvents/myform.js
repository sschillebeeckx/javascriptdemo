document.getElementById('submitBtn').addEventListener('click', () => {
    // Get text input value
    const username = document.getElementById('username').value;
    console.log('Username:', username);

    // Get language value
    const language = document.getElementById('language').value;
    console.log('Language:', language);

    // Get selected radio button value
    const gender = document.querySelector('input[name="gender"]:checked');
    console.log('Gender:', gender ? gender.value : 'No selection');

});
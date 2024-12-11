document.getElementById('submitBtn').addEventListener('click', () => {
    // Get text input value
    const username = document.getElementById('username').value;
    console.log('Username:', username);

    // Get password value
    const password = document.getElementById('password').value;
    console.log('Password:', password);

    // Get textarea value
    const bio = document.getElementById('bio').value;
    console.log('Bio:', bio);

    // Check if checkbox is checked
    const subscribe = document.getElementById('subscribe').checked;
    console.log('Subscribe:', subscribe);

    // Get selected radio button value
    const gender = document.querySelector('input[name="gender"]:checked');
    console.log('Gender:', gender ? gender.value : 'No selection');

    // Get select menu value
    const country = document.getElementById('country').value;
    console.log('Country:', country);
});
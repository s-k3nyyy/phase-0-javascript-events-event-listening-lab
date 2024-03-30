function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', (e) => {});
}
sinon.spy(input, 'addEventListener');

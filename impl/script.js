let showBox = document.getElementById("chatBox");
let isClicked = true;

const setScrollPosition = () => {
    if (chatBody.scrollHeight) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};
document.getElementById('type-box').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
function chatBoxopen() {
    if (isClicked) {
        showBox.classList.add("open-chat");
        isClicked = false;
        setScrollPosition();
    } else {
        showBox.classList.remove("open-chat");
        isClicked = true;
    }
}
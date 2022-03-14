const messages = 
[
    "carlos",
    "maria",
    "roberto",
    "pablito",
    "juanita"

];

const random_message = () =>
{
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = {random_message};
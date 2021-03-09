const translateMessage = (message) => {
    const messages = {
        invalid_credencials:'La cmbinación de usuario y contraseña es incorrecta.'
    };
    return message[message] || message;
};

export default translateMessage;
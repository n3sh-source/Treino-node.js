CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Nathan",
    "email@teste2.com",
    25
);

SELECT * FROM usuarios;

DELETE FROM usuarios WHERE nome = "Nathan";

UPDATE usuarios SET nome = "Luis Gustavo" WHERE nome = "Gustavo";
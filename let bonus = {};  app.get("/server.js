let bonus = {};

app.get("/bonus", auth, (req, res) => {
  const email = "admin@luxuria.com";

  const hoje = new Date().toDateString();

  if (bonus[email] === hoje) {
    return res.json({ message: "Já resgatou hoje" });
  }

  bonus[email] = hoje;
  usersData[email].saldo += 200;

  res.json({ message: "Bônus +200 coins!" });
});

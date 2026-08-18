const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://adamsdavi77_db_user:EHuMHJLmNYL0ldBp@cluster0.pikydsj.mongodb.net/?appName=Cluster0",
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;

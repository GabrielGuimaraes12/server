const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://guimatw2012:srYJ1WXnLX6y9Plk@loginviasat.dw1nem7.mongodb.net/';

// Configurações opcionais
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectToDatabase() {
  try {
    const client = new MongoClient(uri, options);
    await client.connect();
    console.log('Conectado ao MongoDB Atlas');
    // Aqui você pode realizar operações no banco de dados
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  }
}
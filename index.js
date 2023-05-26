const secret = require('./secret'); // import password
const mongoose = require('mongoose');

// Conectarse a la BD en MongoDB Atlas
mongoose.connect('mongodb+srv://'+secret.mongoUser+':'+secret.mongoPass+'@cluster0.l4iqntb.mongodb.net/?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
});


const crear = async () => {

    const user = new User({
        username: 'Gino',
        edad: 39,
    });

    const savedUser = await user.save();
    console.log(savedUser);
};

 //crear();

const buscarTodos = async () => {
    const users = await User.find();
    console.log(users);
}

// buscarTodos();


const buscar = async () => {
    const user = await User.find({ username: 'axes' });
    console.log(user);
}

// buscar();

const buscarUno = async () => {
    const user = await User.findOne({ username: 'axes' });
    console.log(user);
}
// buscarUno();


const actualizar = async () => {
    const user = await User.findOne({ username: 'axes' });
    console.log(user);
    user.edad = 69;
   await user.save();
}

// actualizar();


const eliminar = async () => {

    const user = await User.findOne({ username: 'axes' });
    console.log(user);
    if(user) {
        // eliminar registro
        await user.deleteOne();
    }
    
}

// eliminar();
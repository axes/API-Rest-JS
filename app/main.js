console.log('Hola mundo');


const loadInitialTemplate = () => {

const template = `
    <h1> Usuarios </h1>
    <form id="user-form">
        <div class="form-group">
            <label for="username">Nombre</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
        </div>

        <div class="form-group">
            <label for="edad">Edad</label>
            <input type="number" class="form-control" id="edad" name="edad" placeholder="Edad">
        </div>

        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>


    <ul id="users-list"></ul>
    `

    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = template;
}

const getUsers = async () => { 
    // const response = await fetch('/users');
    // const users = await response.json();
    // console.log(users);

}

const addFormListener = () => {
    const userForm = document.getElementById('user-form');
    userForm.onsubmit = async (e)  => {
        e.preventDefault();
        const formData = new FormData(userForm);
       // console.log(formData.get('username'));
        const data = Object.fromEntries(formData.entries());
        //console.log(data);
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        userForm.reset();

//        getUsers();

    }
}



window.onload =  () => {
    loadInitialTemplate();
    addFormListener();
    getUsers();
    }
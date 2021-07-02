module.exports.crearApellido = (req, res, next) => {
    const params = req.body;
    const fullName = `${params.Name} ${params.LastName}`;
    req.body.fullName = fullName;
    next();
}

module.exports.editarApellido1 = (req, res, next) => {
    const params = req.body;
    params.LastName = 'lo que sea';
    next();
}

module.exports.editarApellido2 = (req, res, next) => {
    const params = req.body;
    params.LastName = 'lo que sea x2';
    next();
}

module.exports.validateEmail = (req, res, next) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(params.email)){
        next();
    } else {
        res.status(400).send('Email incorrecto');
    }
   
}